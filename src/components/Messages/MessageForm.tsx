import React from "react";
import styles from "./Messages.module.css";
import {Field, InjectedFormProps} from "redux-form";

export type MessageFormType = {
    message: string
}

export const MessageForm: React.FC<InjectedFormProps<MessageFormType>> = ({handleSubmit}) => {

    return (
        <form onSubmit={handleSubmit}>
            <div className={styles.sendMessage}>
                <Field className={styles.newMessage}
                       placeholder={'Введите сообщение...'}
                       name={'message'}
                       component={'textarea'}
                />
            </div>
            <div className={styles.sendButton}>
                <button>Отправить сообщение</button>
            </div>
        </form>
    )
};