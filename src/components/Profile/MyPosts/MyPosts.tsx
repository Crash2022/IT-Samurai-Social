import React from "react";
//import {MyPostsAdd} from "../MyPosts/MyPostsAdd";
import {MyPostsList} from "./MyPostsList";
import {ActionsType, StoreType, UserMessageType} from "../../../redux/store";
import {MyPostsAddContainer} from "./MyPostsAddContainer";
import store from "../../../redux/redux-store";

type ProfileType = {
    myPosts: UserMessageType[]
    dispatch: (action: ActionsType) => void
    newPostText: string
    store: StoreType
}

export const MyPosts = (props: ProfileType) => {
    return (
        <>
            {/* <MyPostsAdd
           dispatch={props.dispatch}
           newPostText={props.newPostText}/>*/}
            <MyPostsAddContainer store={props.store} />
            <MyPostsList myPosts={props.myPosts}/>
        </>
    );
}