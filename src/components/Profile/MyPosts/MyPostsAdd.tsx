import React from "react";
import {ChangeEvent} from "react";
import classes from './MyPostsAdd.module.css';
import {Button} from "../../../UI/Button";

type MyPostAddPropsType = {
    newPostText: string
    onAddPostMessage: () => void
    onChangePostMessage: (textareaValue: string) => void
}

export const MyPostsAdd = (props: MyPostAddPropsType) => {

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