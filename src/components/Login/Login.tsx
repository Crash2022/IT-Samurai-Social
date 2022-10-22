import React from "react";
import styles from './Login.module.css';
import {reduxForm} from "redux-form";
import {LoginForm, LoginFormValuesType} from "./LoginForm";

export const Login = () => {

    const onSubmit = (formData: LoginFormValuesType) => {
        console.log(formData);
    }

    return (
        <div className={styles.login}>
            <h2>Вход</h2>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    );
}

export const LoginReduxForm = reduxForm<LoginFormValuesType>({
    form: 'login' // уникальное строковое имя для каждой формы
})(LoginForm)