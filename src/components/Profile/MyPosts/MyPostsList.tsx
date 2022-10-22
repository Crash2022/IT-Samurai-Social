import React from "react";
import {MyPostsItem} from "./MyPostsItem";
import styles from './MyPostsList.module.css';
import {UserMessageType} from "../../../redux/profilePage-reducer";

type MyPostListPropsType = {
    myPosts: Array<UserMessageType>
}

export const MyPostsList = (props: MyPostListPropsType) => {
    return (
            <div className={styles.content__postList}>
                <MyPostsItem myPosts={props.myPosts}/>
            </div>
    );
}