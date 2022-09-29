import React from "react";
import {MyPostsItem} from "./MyPostsItem";
import classes from './MyPostsList.module.css';
import {UserMessageType} from "../../../redux/store";

type MyPostsPropsType = {
    myPosts: Array<UserMessageType>
}

export const MyPostsList = (props: MyPostsPropsType) => {
    return (
        <>
            <div className={classes.content__postList}>
                <MyPostsItem myPosts={props.myPosts}/>
            </div>
        </>
    );
}