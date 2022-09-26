import React from "react";
import {ChangeEvent} from "react";
import classes from './MyPostsAdd.module.css';
import {Button} from "../../../UI/Button";
import {ActionsType, StoreType, UserMessageType} from "../../../redux/store";

//import {RootStateType} from "../../../redux/redux-store";

type MyPostsAddType = {
    newPostText: string
    dispatch: (action: ActionsType) => void
    onAddPostMessage: () => void
    onChangePostMessage: (event: ChangeEvent<HTMLTextAreaElement>) => void
}

export const MyPostsAdd = (props: MyPostsAddType) => {

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
                              onChange={props.onChangePostMessage}
                    />
                    {/*<Textarea textareaValue={textareaValue} setTextareaValue={setTextareaValue}/>*/}
                </div>
                <div className={classes.sendButton}>
                    {/*<button onClick={addPost}>Add post</button>*/}
                    <Button name={'Добавить запись'} callBack={props.onAddPostMessage}/>
                </div>
            </div>
        </>
    );
}