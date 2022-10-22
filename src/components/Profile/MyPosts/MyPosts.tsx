import React from "react";
import {MyPostsList} from "./MyPostsList";
import {MyPostsAdd} from "./MyPostsAdd";
import {MyPostsType} from "./MyPostsContainer";

export const MyPosts = (props: MyPostsType) => {
    return (
        <>
            <MyPostsAdd onAddPostMessage={props.addPostAC}/>
            <MyPostsList myPosts={props.myPosts}/>
        </>
    );
}