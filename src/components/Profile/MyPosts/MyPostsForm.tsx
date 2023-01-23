import React from "react";
import {Field, InjectedFormProps} from "redux-form";
import styles from './MyPostsAdd.module.css';
import {maxLengthCreator, requiredField} from "../../../common/utils/validators";
import {SuperButton} from "../../../common/UI/Button/SuperButton";
import {SuperTextArea} from "../../../common/UI/Textarea/SuperTextArea";

export type MyPostsFormType = {
    newPostText: string
}

const maxLengthCreator100 = maxLengthCreator(100);

export const MyPostsForm: React.FC<InjectedFormProps<MyPostsFormType>> = ({handleSubmit}) => {

    return (
            <form onSubmit={handleSubmit}>
                <div className={styles.sendMessageArea}>
                    <Field placeholder={'Введите текст...'}
                           name={'newPostText'}
                           component={SuperTextArea}
                           validate={[requiredField, maxLengthCreator100]}
                    />
                </div>
                <div className={styles.sendButton}>
                    <SuperButton>Добавить запись</SuperButton>
                </div>
            </form>
    );
}