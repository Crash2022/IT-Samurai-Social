import React from "react";
import styles from "./Messages.module.css";
import {v1} from "uuid";
import {MessagesArray} from "../../redux/dialogsPage-reducer";
import {MessageForm, MessageFormType} from "./MessageForm";
import {reduxForm} from "redux-form";

type MessageItemPropsType = {
    myMessages: Array<MessagesArray>
    sendMessageHandler: (newMessageTextForDialog: string) => void
}

export const MessageItem = (props: MessageItemPropsType) => {

    const onSubmit = (formData: MessageFormType) => {
        props.sendMessageHandler(formData.newMessage);
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
            <div className={styles.sendMessageForm}>
                <MessageReduxForm onSubmit={onSubmit}/>
            </div>
        </>
    )
};

export const MessageReduxForm = reduxForm<MessageFormType>({
    form: 'dialogMessageForm' // уникальное строковое имя для каждой формы
})(MessageForm)