import React from "react";
import {MyPostsList} from "./MyPostsList";
import {MyPostsAdd} from "./MyPostsAdd";
import {MyPostsType} from "./MyPostsContainer";

export const MyPosts = (props: MyPostsType) => {
    return (
        <>
            <MyPostsAdd newPostText={props.newPostText}
                        onAddPostMessage={props.addPostAC}
                        onChangePostMessage={props.updateNewPostAC}
            />
            <MyPostsList myPosts={props.myPosts}/>
        </>
    );
}