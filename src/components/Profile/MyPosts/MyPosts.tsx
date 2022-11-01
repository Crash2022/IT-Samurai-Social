import React from "react";
import {MyPostsList} from "./MyPostsList";
import {MyPostsAdd} from "./MyPostsAdd";
import {MyPostsContainerType} from "./MyPostsContainer";

export const MyPosts = (props: MyPostsContainerType) => {

    return (
        <>
            <MyPostsAdd onAddPostMessage={props.addPostAC}/>
            <MyPostsList myPosts={props.myPosts}/>
        </>
    );
}