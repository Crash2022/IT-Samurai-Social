import React from "react";
import classes from './Login.module.css';
import {reduxForm} from "redux-form";
import {LoginForm} from "./LoginForm";

export const Login = () => {
    return (
        <div className={classes.login}>
            <h2>Войти</h2>
            <LoginReduxForm/>
        </div>
    );
}

export const LoginReduxForm = reduxForm({
    form: 'login' // уникальное строковое имя для каждой формы
})(LoginForm)