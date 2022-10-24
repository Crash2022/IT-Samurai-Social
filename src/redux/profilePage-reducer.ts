import {v1} from "uuid";
import {RootStateType} from "./redux-store";
import {Dispatch} from "redux";
import {profileAPI} from "../api/api";
import {ThunkAction} from "redux-thunk";

type ActionsType =
    AddPostACType |
    SetUserProfileACType |
    SetUserStatusACType;

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
        facebook: string
        website: null
        vk: string
        twitter: string
        instagram: string
        youtube: null
        github: string
        mainLink: null
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
    profile: null,
    status: ''
}

export const profileReducer = (state: MyPostsItemPropsType = initialState, action: ActionsType): MyPostsItemPropsType => {

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
        case 'SET_USER_PROFILE': {
            return { ...state, profile: action.profile };
        }
        case 'SET_USER_STATUS': {
            return { ...state, status: action.status };
        }
        default:
            return state;
        }
}

/*-------------------------ACTION CREATOR-------------------------*/

export type AddPostACType = ReturnType<typeof addPostAC>
export type SetUserProfileACType = ReturnType<typeof setUserProfileAC>
export type SetUserStatusACType = ReturnType<typeof setUserStatusAC>

export const addPostAC = (newPostText: string) => ({
    type: 'ADD_POST', newPostText
} as const)
export const setUserProfileAC = (profile: null) => ({
    type: 'SET_USER_PROFILE',
    profile
} as const )
export const setUserStatusAC = (status: string) => ({
    type: 'SET_USER_STATUS',
    status
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

export const getProfileThunkCreator = (userId: string) => {

    return (dispatch: Dispatch<ActionsType>) => {

        profileAPI.getProfile(userId)
            .then(data => {
                dispatch(setUserProfileAC(data));
            })
    }
}

export const getUserStatusThunkCreator = (userId: string) => {

    return (dispatch: Dispatch<ActionsType>) => {

        profileAPI.getUserStatus(userId)
            .then(data => {
                dispatch(setUserStatusAC(data));
            })
    }
}

export const updateUserStatusThunkCreator = (userId: string, status: string):
    ThunkAction<void, RootStateType, { }, ActionsType> => {

    return (dispatch) => {

        profileAPI.updateUserStatus(status)
            .then(data => {
                if (data.resultCode === 0) {
                    dispatch(getUserStatusThunkCreator(userId));
                }
            })
    }
}