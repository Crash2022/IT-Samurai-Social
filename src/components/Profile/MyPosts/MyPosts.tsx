import React from "react";
import {MyPostsList} from "./MyPostsList";
import {UserMessageType} from "../../../redux/store";
import MyPostsAddContainer from "./MyPostsContainer";
import {MyPostsAdd} from "./MyPostsAdd";

type ProfileType = {
    myPosts: Array<UserMessageType>
}

export const MyPosts = (props: ProfileType) => {
    return (
        <>
            <MyPostsAdd/>
            <MyPostsList/>
            {/*<MyPostsList myPosts={props.myPosts}/>*/}
        </>
    );
}