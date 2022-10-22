import React from "react";
import styles from './MyPostsAdd.module.css';
import {MyPostsForm, MyPostsFormType} from "./MyPostsForm";
import {reduxForm} from "redux-form";

type MyPostAddPropsType = {
    onAddPostMessage: (newPostText: string) => void
}

export const MyPostsAdd = (props: MyPostAddPropsType) => {

    const onSubmit = (formData: MyPostsFormType) => {
        //console.log(formData);
        props.onAddPostMessage(formData.newPostText);
    }

    return (
        <>
            <div className={styles.content__myPosts}>
                <div className={styles.content__myPosts_title}>
                    <span>Мои записи</span>
                </div>
                <div className={styles.content__myPosts_add}>
                    <MyPostReduxForm onSubmit={onSubmit}/>
                </div>
            </div>
        </>
    );
}

export const MyPostReduxForm = reduxForm<MyPostsFormType>({
    form: 'myPostForm'
})(MyPostsForm)