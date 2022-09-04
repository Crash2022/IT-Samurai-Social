import React from 'react';
import {
    ActionsType,
    ADD_POST, MyPostsItemPropsType,
    RootDataStateType,
    SEND_DIALOG_TEXT,
    UPDATE_NEW_DIALOG_TEXT,
    UPDATE_NEW_POST_TEXT
} from "./datastate";
import {v1} from "uuid";

export const myPostPageReducer = (state: MyPostsItemPropsType, action: ActionsType) => {

    if (action.type === ADD_POST) {
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
        /*props._callSubscriber();*/
    } else if (action.type === UPDATE_NEW_POST_TEXT) {
        state.newPostText = action.newText;
        /*props._callSubscriber();*/
    }

    return state;
}