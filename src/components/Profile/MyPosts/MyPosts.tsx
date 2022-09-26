import React from "react";
import {MyPostsList} from "./MyPostsList";
import {UserMessageType} from "../../../redux/store";
import MyPostsAddContainer from "./MyPostsAddContainer";

type ProfileType = {
    myPosts: Array<UserMessageType>
}

export const MyPosts = (props: ProfileType) => {
    return (
        <>
            <MyPostsAddContainer />
            <MyPostsList myPosts={props.myPosts}/>
        </>
    );
}