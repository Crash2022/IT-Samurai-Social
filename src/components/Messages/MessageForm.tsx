import React from "react";
import styles from "./Messages.module.css";
import {Field, InjectedFormProps} from "redux-form";
import {SuperTextArea} from "../../UI/Textarea/SuperTextArea";
import SuperButton from "../../UI/Button/SuperButton";

export type MessageFormType = {
    newMessage: string
}

export const MessageForm: React.FC<InjectedFormProps<MessageFormType>> = ({handleSubmit}) => {

    return (
        <form onSubmit={handleSubmit}>
            <div className={styles.sendMessageArea}>
                <Field placeholder={'Введите сообщение...'}
                       name={'newMessage'}
                       component={SuperTextArea}
                />
            </div>
            <div className={styles.sendButton}>
                <SuperButton>Отправить сообщение</SuperButton>
            </div>
        </form>
    )
};