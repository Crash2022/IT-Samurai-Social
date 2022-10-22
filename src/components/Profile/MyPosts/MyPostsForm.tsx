import React from "react";
import {Field, InjectedFormProps} from "redux-form";
import classes from './MyPostsAdd.module.css';

export type MyPostsFormType = {
    myPost: string
}

export const MyPostsForm: React.FC<InjectedFormProps<MyPostsFormType>> = ({handleSubmit}) => {

    return (
            <form onSubmit={handleSubmit}>
                <div className={classes.sendMessage}>
                    <Field className={classes.newMessage}
                           placeholder={'Введите текст...'}
                           name={'myPost'}
                           component={'textarea'}
                    />
                </div>
                <div className={classes.sendButton}>
                    <button>Добавить запись</button>
                </div>
            </form>
    );
}