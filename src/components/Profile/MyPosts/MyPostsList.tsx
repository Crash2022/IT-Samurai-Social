import React from "react";
import {MyPostsItem} from "./MyPostsItem";
import classes from './MyPostsList.module.css';

import {UserMessageType} from "../../../redux/store";

type ProfileType = {
    myPosts: Array<UserMessageType>
}

export const MyPostsList = (props: ProfileType) => {
    return (
        <>
            <div className={classes.content__postlist}>
                <MyPostsItem myPosts={props.myPosts}/>
            </div>
        </>
    );
}