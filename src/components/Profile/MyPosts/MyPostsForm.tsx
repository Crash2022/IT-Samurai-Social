import React from "react";
import {Field, InjectedFormProps} from "redux-form";
import styles from './MyPostsAdd.module.css';
import {maxLengthCreator, requiredField} from "../../../utils/validators/validators";

export type MyPostsFormType = {
    newPostText: string
}

const maxLengthCreator20 = maxLengthCreator(20);

export const MyPostsForm: React.FC<InjectedFormProps<MyPostsFormType>> = ({handleSubmit}) => {

    return (
            <form onSubmit={handleSubmit}>
                <div className={styles.sendMessage}>
                    <Field className={styles.newMessage}
                           placeholder={'Введите текст...'}
                           name={'newPostText'}
                           component={'textarea'}
                           validate={[requiredField, maxLengthCreator20]}
                    />
                </div>
                <div className={styles.sendButton}>
                    <button>Добавить запись</button>
                </div>
            </form>
    );
}