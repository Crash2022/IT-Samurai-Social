import React from "react";
import {Field, InjectedFormProps} from "redux-form";
import SuperButton from "../../UI/Button/SuperButton";
import styles from './Login.module.css';
import {SuperInputText} from "../../UI/Input/SuperInputText";
import SuperCheckbox from "../../UI/Checkbox/SuperCheckbox";

export type LoginFormValuesType = {
    email: string
    password: string
    rememberMe: boolean
}

export const LoginForm: React.FC<InjectedFormProps<LoginFormValuesType>> = ({ handleSubmit }) => {
    return (
            <form onSubmit={handleSubmit}>
                <div>
                    <Field placeholder={'Логин'} name={'email'} component={SuperInputText}/>
                </div>
                <div>
                    <Field placeholder={'Пароль'} name={'password'} component={SuperInputText}/>
                </div>
                <div>
                    <Field name={'rememberMe'} component={SuperCheckbox}/>Запомнить меня
                </div>
                <div>
                    <SuperButton className={styles.loginButton}>Войти</SuperButton>
                </div>
            </form>
    );
}