import {MyPostsItemPropsType} from "./redux-store";
import {v1} from "uuid";
import {ActionsType} from "./redux-store";

let initialState = {
    myPosts: [
        {
            id: v1(),
            avatar: 'https://i.pinimg.com/736x/c2/6f/23/c26f23951566f65eb495497ccc208fc2--mountain-bike-dark-moon.jpg',
            nickname: 'Dimych',
            postMessage: 'Hello to all MTB Community',
            likes: 15,
            dislikes: 1
        },
        {
            id: v1(),
            avatar: 'https://i.pinimg.com/736x/c2/6f/23/c26f23951566f65eb495497ccc208fc2--mountain-bike-dark-moon.jpg',
            nickname: 'Dimych',
            postMessage: 'Hello to all Codewars',
            likes: 10,
            dislikes: 0
        },
        {
            id: v1(),
            avatar: 'https://i.pinimg.com/736x/c2/6f/23/c26f23951566f65eb495497ccc208fc2--mountain-bike-dark-moon.jpg',
            nickname: 'Dimych',
            postMessage: 'Hello to all FreeCodeCamp',
            likes: 105,
            dislikes: 10
        },
        {
            id: v1(),
            avatar: 'https://i.pinimg.com/736x/c2/6f/23/c26f23951566f65eb495497ccc208fc2--mountain-bike-dark-moon.jpg',
            nickname: 'Dimych',
            postMessage: 'Hello to all Incubators',
            likes: 105,
            dislikes: 10
        }
    ],
    newPostText: '',
    profile: null
}

export const myPostPageReducer = (state: MyPostsItemPropsType = initialState, action: ActionsType) => {

    /*if (action.type === ADD_POST) {
    let newPost = {
        id: v1(),
        avatar: "https://i.pinimg.com/736x/c2/6f/23/c26f23951566f65eb495497ccc208fc2--mountain-bike-dark-moon.jpg",
        nickname: "Dimych",
        postMessage: state.newPostText,
        likes: 0,
        dislikes: 0
    };
    state.user1.push(newPost);
    state.newPostText = '';
    /!*props._callSubscriber();*!/
} else if (action.type === UPDATE_NEW_POST_TEXT) {
    state.newPostText = action.newText;
    /!*props._callSubscriber();*!/
}*/

    let stateCopy;

    switch(action.type) {
        case ADD_POST: {
            let newPost = {
                id: v1(),
                avatar: "https://i.pinimg.com/736x/c2/6f/23/c26f23951566f65eb495497ccc208fc2--mountain-bike-dark-moon.jpg",
                nickname: "Dimych",
                postMessage: state.newPostText,
                likes: 0,
                dislikes: 0
            };
            return { ...state, myPosts: [...state.myPosts, newPost], newPostText: '' };
        }
        case UPDATE_NEW_POST_TEXT: {
            return { ...state, newPostText: action.newText };
        }
        case SET_USER_PROFILE: {
            return { ...state, profile: action.profile };
        }
        default:
            return state;
        }
}

export const ADD_POST = 'ADD-POST'
export type AddPostACType = ReturnType<typeof addPostAC>
export const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'
export type UpdateNewPostACType = ReturnType<typeof updateNewPostAC>
export const SET_USER_PROFILE = 'SET_USER_PROFILE'
export type SetUserProfileACType = ReturnType<typeof setUserProfileAC>

export const addPostAC = () => ({
    type: ADD_POST
} as const)
export const updateNewPostAC = (textareaValue: string) => ({
    type: UPDATE_NEW_POST_TEXT,
    newText: textareaValue
} as const )
export const setUserProfileAC = (profile: null) => ({
    type: SET_USER_PROFILE,
    profile
} as const )