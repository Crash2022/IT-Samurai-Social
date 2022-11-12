import {v1} from "uuid";
import {CombinedState, Dispatch} from "redux";
import {profileAPI} from "../api/api";
import {ThunkAction, ThunkDispatch} from "redux-thunk";
import {FormDataType} from "../components/Profile/MyProfile/MyProfile";
import {RootStateType} from "./redux-store";
import {stopSubmit} from "redux-form";

type ProfileActionsType =
    AddPostACType |
    SetUserProfileACType |
    SetUserStatusACType |
    DeletePostACType |
    UpdateUserPhotoACType;

//иная запись типа null | другой тип
//export type Nullable<T> = null | T

export type MyPostsItemPropsType = {
    myPosts: Array<UserMessageType>
    profile: null | ProfileType
    // profile: null as Nullable<ProfileType> // иной вид типизации
    status: string
}
export type UserMessageType = {
    id: string
    avatar: string
    nickname: string
    postMessage: string
    likes: number
    dislikes: number
}

export type ProfileType = {
    aboutMe: string
    contacts: {
        [key:string] : string | null
        // facebook: string
        // website: string | null
        // vk: string
        // twitter: string
        // instagram: string | null
        // youtube: string | null
        // github: string
        // mainLink: string | null
    }
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    userId: string
    photos: {
        small: string
        large: string
    }
}

let initialState = {
    myPosts: [
        {
            id: v1(),
            avatar: 'https://i.pinimg.com/736x/c2/6f/23/c26f23951566f65eb495497ccc208fc2--mountain-bike-dark-moon.jpg',
            nickname: 'Crash555',
            postMessage: 'Hello to all MTB Community',
            likes: 15,
            dislikes: 1
        },
        {
            id: v1(),
            avatar: 'https://i.pinimg.com/736x/c2/6f/23/c26f23951566f65eb495497ccc208fc2--mountain-bike-dark-moon.jpg',
            nickname: 'Crash555',
            postMessage: 'Hello to all Codewars',
            likes: 10,
            dislikes: 0
        },
        {
            id: v1(),
            avatar: 'https://i.pinimg.com/736x/c2/6f/23/c26f23951566f65eb495497ccc208fc2--mountain-bike-dark-moon.jpg',
            nickname: 'Crash555',
            postMessage: 'Hello to all FreeCodeCamp',
            likes: 105,
            dislikes: 10
        },
        {
            id: v1(),
            avatar: 'https://i.pinimg.com/736x/c2/6f/23/c26f23951566f65eb495497ccc208fc2--mountain-bike-dark-moon.jpg',
            nickname: 'Crash555',
            postMessage: 'Hello to all Incubators',
            likes: 105,
            dislikes: 10
        }
    ] as Array<UserMessageType>,
    profile: null as null | ProfileType,
    status: '',
}

export const profileReducer = (state: MyPostsItemPropsType = initialState, action: ProfileActionsType): MyPostsItemPropsType => {

    switch(action.type) {
        case 'ADD_POST': {
            let newPost = {
                id: v1(),
                avatar: "https://i.pinimg.com/736x/c2/6f/23/c26f23951566f65eb495497ccc208fc2--mountain-bike-dark-moon.jpg",
                nickname: "Crash555",
                postMessage: action.newPostText,
                likes: 0,
                dislikes: 0
            };
            return { ...state, myPosts: [newPost, ...state.myPosts] };
        }
        case 'DELETE_POST': {
            return { ...state, myPosts: state.myPosts.filter(post => post.id !== action.postId) };
        }
        case 'SET_USER_PROFILE': {
            return { ...state, profile: action.profile };
        }
        case 'SET_USER_STATUS': {
            return { ...state, status: action.status };
        }
        case 'UPDATE_USER_PHOTO': {
            console.log(action.photoFile)
            // return { ...state, profile: {...state.profile!, photos: {...state.profile!.photos, small: action.photoFile}} };
            return { ...state, profile: {...state.profile!, photos: action.photoFile} }
        }
        default:
            return state;
        }
}

/*-------------------------ACTION CREATOR-------------------------*/

export type AddPostACType = ReturnType<typeof addPostAC>
export type DeletePostACType = ReturnType<typeof deletePostAC>
export type SetUserProfileACType = ReturnType<typeof setUserProfileAC>
export type SetUserStatusACType = ReturnType<typeof setUserStatusAC>
export type UpdateUserPhotoACType = ReturnType<typeof updateUserPhotoAC>

export const addPostAC = (newPostText: string) => ({
    type: 'ADD_POST', newPostText
} as const)
export const deletePostAC = (postId: string) => ({
    type: 'DELETE_POST', postId
} as const)
export const setUserProfileAC = (profile: null) => ({
    type: 'SET_USER_PROFILE',
    profile
} as const )
export const setUserStatusAC = (status: string) => ({
    type: 'SET_USER_STATUS',
    status
} as const )
export const updateUserPhotoAC = (photoFile: { small: string, large: string }) => ({
    type: 'UPDATE_USER_PHOTO',
    photoFile
} as const )

// Иная запись типизации actions
/*type ActionsType = ReturnType<PropertiesType<typeof actions>>
type PropertiesType<T> = T extends {[key: string]: infer U ? U : never}

const actions = {
    addPostAC: () => ({type: 'ADD_POST'} as const),
    updateNewPostAC: (textareaValue: string) => ({
        type: 'UPDATE_NEW_POST_TEXT',
        newText: textareaValue
    } as const ),
    setUserProfileAC: (profile: null) => ({
        type: 'SET_USER_PROFILE', profile} as const )
}*/

/*-------------------------THUNK-------------------------*/

export const getProfileTC = (userId: string) => {
    return (dispatch: Dispatch<ProfileActionsType>) => {

        profileAPI.getProfile(userId)
            .then(data => {
                dispatch(setUserProfileAC(data));
            })
    }
}

export const getUserStatusTC = (userId: string) => {
    return (dispatch: Dispatch<ProfileActionsType>) => {

        profileAPI.getUserStatus(userId)
            .then(data => {
                dispatch(setUserStatusAC(data));
            })
    }
}

export const updateUserStatusTC = (userId: string, status: string):
    ThunkAction<void, RootStateType, { }, ProfileActionsType> => {

    return (dispatch) => {

        profileAPI.updateUserStatus(status)
            .then(data => {
                if (data.resultCode === 0) {
                    dispatch(getUserStatusTC(userId));
                } else {
                    alert(data.messages[0]);
                }
            })
            .catch(error => console.log(error))
    }
}

export const updateUserPhotoTC = (photoFile: File) => {
    return (dispatch: Dispatch<ProfileActionsType>) => {

        profileAPI.updateUserPhoto(photoFile)
            .then(data => {
                if (data.resultCode === 0) {
                    dispatch(updateUserPhotoAC(data.data.photos));
                }
            })
    }
}

export const updateUserProfileTC = (profile: FormDataType) =>
    (dispatch: ThunkDispatch<RootStateType, unknown, ReturnType<typeof stopSubmit>>,
     getState: () => CombinedState<RootStateType>) => {

        const userId = getState().auth.userId;
        return profileAPI.updateUserProfile(profile)
            .then(data => {
                if (data.resultCode === 0 && userId) {
                    dispatch(getProfileTC(userId));
                } else {
                    dispatch(stopSubmit('profileDataForm', {_error: data.messages[0]}));
                    return Promise.reject(data.messages[0]);
                }
            })
    }