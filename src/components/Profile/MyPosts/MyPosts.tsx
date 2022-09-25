import React from "react";
//import {MyPostsAdd} from "../MyPosts/MyPostsAdd";
import {MyPostsList} from "./MyPostsList";
import {ActionsType, UserMessageType} from "../../../redux/store";
import {MyPostsAddContainer} from "./MyPostsAddContainer";

type ProfileType = {
    myPosts: UserMessageType[]
    dispatch: (action: ActionsType) => void
    newPostText: string
}

export const MyPosts = (props: ProfileType) => {
    return (
        <>
            {/* <MyPostsAdd
           dispatch={props.dispatch}
           newPostText={props.newPostText}/>*/}
            <MyPostsAddContainer store={props.store}/>
            <MyPostsList myPosts={props.myPosts}/>
        </>
    );
}