import React from "react";
import {Field, InjectedFormProps} from "redux-form";
import styles from './MyPostsAdd.module.css';
import {maxLengthCreator, requiredField} from "../../../utils/validators/validators";
import SuperButton from "../../../UI/Button/SuperButton";
import {SuperTextArea} from "../../../UI/Textarea/SuperTextArea";

export type MyPostsFormType = {
    newPostText: string
}

const maxLengthCreator20 = maxLengthCreator(20);

export const MyPostsForm: React.FC<InjectedFormProps<MyPostsFormType>> = ({handleSubmit}) => {

    return (
            <form onSubmit={handleSubmit}>
                <div className={styles.sendMessageArea}>
                    <Field placeholder={'Введите текст...'}
                           name={'newPostText'}
                           component={SuperTextArea}
                           validate={[requiredField, maxLengthCreator20]}
                    />
                </div>
                <div className={styles.sendButton}>
                    <SuperButton>Добавить запись</SuperButton>
                </div>
            </form>
    );
}