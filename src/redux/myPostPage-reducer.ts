import {
    ActionsType,
    MyPostsItemPropsType,
    ADD_POST,
    UPDATE_NEW_POST_TEXT
} from "./store";
import {v1} from "uuid";

let initialState = {
    myPosts: [
        {
            id: v1(),
            avatar: "https://i.pinimg.com/736x/c2/6f/23/c26f23951566f65eb495497ccc208fc2--mountain-bike-dark-moon.jpg",
            nickname: "Dimych",
            postMessage: "Hello to all MTB Community",
            likes: 15,
            dislikes: 1
        },
        {
            id: v1(),
            avatar: "https://i.pinimg.com/736x/c2/6f/23/c26f23951566f65eb495497ccc208fc2--mountain-bike-dark-moon.jpg",
            nickname: "Dimych",
            postMessage: "Hello to all Codewars",
            likes: 10,
            dislikes: 0
        },
        {
            id: v1(),
            avatar: "https://i.pinimg.com/736x/c2/6f/23/c26f23951566f65eb495497ccc208fc2--mountain-bike-dark-moon.jpg",
            nickname: "Dimych",
            postMessage: "Hello to all FreeCodeCamp",
            likes: 105,
            dislikes: 10
        },
        {
            id: v1(),
            avatar: "https://i.pinimg.com/736x/c2/6f/23/c26f23951566f65eb495497ccc208fc2--mountain-bike-dark-moon.jpg",
            nickname: "Dimych",
            postMessage: "Hello to all Incubators",
            likes: 105,
            dislikes: 10
        }
    ],
    newPostText: ''
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
        default:
            return state;
        }
}