import React, {ChangeEvent} from "react";
import classes from "../Profile/MyPosts/MyPostsAdd.module.css";
import {Button} from "../../UI/Button";
import {v1} from "uuid";
import {MessagesArray} from "../../redux/dialogsPage-reducer";
import {MessageForm, MessageFormType} from "./MessageForm";
import {reduxForm} from "redux-form";

type MessageItemPropsType = {
    myMessages: Array<MessagesArray>
    onChangeMessageText: (textareaMessage: string) => void
    newMessageTextForDialog: string
    sendMessageHandler: () => void
}

export const MessageItem = (props: MessageItemPropsType) => {

    // const onSubmit = (formData: MessageFormType) => {
    //     console.log(formData);
    // }

    const onChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.onChangeMessageText(e.currentTarget.value)
    }

    return (
        <>
            {props.myMessages.map(message => {
                return (
                    <div key={v1()}>
                        {message.text}
                    </div>
                )
            })}
            <div className={classes.content__myPosts_add}>
                    <textarea className={classes.newMessage}
                              placeholder={'Введите сообщение...'}
                              value={props.newMessageTextForDialog}
                              onChange={onChangeHandler}
                    />
            </div>
            <div className={classes.sendButton}>
                <Button name={'Отправить сообщение'} callBack={props.sendMessageHandler}/>
            </div>

            {/*<MessageReduxForm onSubmit={onSubmit}/>*/}
        </>
    )
};

export const MessageReduxForm = reduxForm<MessageFormType>({
    form: 'dialogMessageForm' // уникальное строковое имя для каждой формы
})(MessageForm)