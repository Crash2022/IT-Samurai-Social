import React from "react";
import {MyPostsList} from "./MyPostsList";
import {MyPostAddType} from "./MyPostsContainer";
import {MyPostsAdd} from "./MyPostsAdd";

export const MyPosts = (props: MyPostAddType) => {
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