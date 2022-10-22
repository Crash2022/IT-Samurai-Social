import React from "react";
import classes from "./Messages.module.css";
import {Field, InjectedFormProps} from "redux-form";

export type MessageFormType = {
    message: string
}

export const MessageForm: React.FC<InjectedFormProps<MessageFormType>> = ({ handleSubmit }) => {

    return (
            <form onSubmit={handleSubmit}>
                <div className={classes.sendMessage}>
                    <Field className={classes.newMessage} placeholder={'Введите сообщение...'} name={'message'} component={'textarea'}/>
                </div>
                <div className={classes.sendButton}>
                    <button>Отправить сообщение</button>
                </div>
            </form>
    )
};