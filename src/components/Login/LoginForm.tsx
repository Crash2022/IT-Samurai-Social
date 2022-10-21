import React from "react";
import {Field, InjectedFormProps} from "redux-form";
//import classes from './Login.module.css';

export type LoginFormValuesType = {
    email: string
    password: string
    rememberMe: boolean
}

export const LoginForm: React.FC<InjectedFormProps<LoginFormValuesType>> = ({ handleSubmit }) => {
    return (
            <form onSubmit={handleSubmit}>
                <div>
                    <Field placeholder={'Логин'} name={'email'} component={'input'}/>
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