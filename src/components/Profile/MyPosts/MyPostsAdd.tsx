import React from "react";
import {ChangeEvent} from "react";
import classes from './MyPostsAdd.module.css';
import {Button} from "../../../UI/Button";
import {MyPostAddType} from "./MyPostsContainer";

export const MyPostsAdd = (props: MyPostAddType) => {

    const onChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.onChangePostMessage(e.currentTarget.value)
    }

    return (
        <>
            <div className={classes.content__myPosts}>
                <div className={classes.content__myPosts_title}>
                    <span>Мои записи</span>
                </div>
                <div className={classes.content__myPosts_add}>
                    <textarea className={classes.newMessage}
                              placeholder={'Введите текст...'}
                              value={props.newPostText}
                              onChange={onChangeHandler}
                    />
                </div>
                <div className={classes.sendButton}>
                    <Button name={'Добавить запись'} callBack={props.onAddPostMessage}/>
                </div>
            </div>
        </>
    );
}