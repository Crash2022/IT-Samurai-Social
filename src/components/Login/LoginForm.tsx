import React from "react";
import {Field} from "redux-form";
//import classes from './Login.module.css';

type LoginFormPropsType = {
    handleSubmit: any
}

export const LoginForm = (props: LoginFormPropsType) => {
    return (
            <form onSubmit={props.handleSubmit}>
                <div>
                    <Field placeholder={'Логин'} name={'login'} component={'input'}/>
                </div>
                <div>
                    <Field placeholder={'Пароль'} name={'password'} component={'input'}/>
                </div>
                <div>
                    <Field type="checkbox" name={'rememberMe'} component={'input'}/>Запомнить меня
                </div>
                <div>
                    <button>Войти</button>
                </div>
            </form>
    );
}