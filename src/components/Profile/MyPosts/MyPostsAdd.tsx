import React from "react";
import styles from './MyPostsAdd.module.css';
import {MyPostsForm, MyPostsFormType} from "./MyPostsForm";
import {reduxForm} from "redux-form";

type MyPostAddPropsType = {
    onAddPostMessage: (newPostText: string) => void
}

export const MyPostsAdd = (props: MyPostAddPropsType) => {
// или наследуемся от PureComponent или shouldComponentUpdate()
// export class MyPostAdd extends React.PureComponent<> {}

    // аналог useMemo для классовой компоненты (урок 87)
    // shouldComponentUpdate() {
    //     return next.props !== this.props || next.state !== this.state;
    // }

    const onSubmit = (formData: MyPostsFormType) => {
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