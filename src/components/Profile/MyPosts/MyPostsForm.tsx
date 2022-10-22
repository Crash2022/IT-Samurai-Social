import React from "react";
import {Field, InjectedFormProps} from "redux-form";
import styles from './MyPostsAdd.module.css';

export type MyPostsFormType = {
    newPostText: string
}

export const MyPostsForm: React.FC<InjectedFormProps<MyPostsFormType>> = ({handleSubmit}) => {

    return (
            <form onSubmit={handleSubmit}>
                <div className={styles.sendMessage}>
                    <Field className={styles.newMessage}
                           placeholder={'Введите текст...'}
                           name={'newPostText'}
                           component={'textarea'}
                    />
                </div>
                <div className={styles.sendButton}>
                    <button>Добавить запись</button>
                </div>
            </form>
    );
}