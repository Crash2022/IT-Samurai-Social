import React from "react";
import {MyPostsList} from "./MyPostsList";
import {MyPostsAdd} from "./MyPostsAdd";
import {MyPostsType} from "./MyPostsContainer";

export const MyPosts = (props: MyPostsType) => {
    return (
        <>
            <MyPostsAdd newPostText={props.newPostText}
                        onAddPostMessage={props.onAddPostMessage}
                        onChangePostMessage={props.onChangePostMessage}
            />
            <MyPostsList myPosts={props.myPosts}/>
        </>
    );
}