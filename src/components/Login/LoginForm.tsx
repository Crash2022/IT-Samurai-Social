import React from "react";
import {Field, InjectedFormProps} from "redux-form";
import {SuperButton} from "../../UI/Button/SuperButton";
import styles from './Login.module.css';
import {SuperInputText} from "../../UI/Input/SuperInputText";
import SuperCheckbox from "../../UI/Checkbox/SuperCheckbox";
import {maxLengthCreator, requiredField} from "../../utils/validators/validators";

export type LoginFormValuesType = {
    email: string
    password: string
    rememberMe: boolean
}

const maxLengthCreator20 = maxLengthCreator(20);

export const LoginForm: React.FC<InjectedFormProps<LoginFormValuesType>> = ({ handleSubmit }) => {
    return (
            <form onSubmit={handleSubmit}>
                <div>
                    <Field
                        placeholder={'Логин'}
                        name={'email'}
                        component={SuperInputText}
                        validate={[requiredField, maxLengthCreator20]}
                    />
                </div>
                <div>
                    <Field
                        placeholder={'Пароль'}
                        name={'password'}
                        component={SuperInputText}
                        validate={[requiredField, maxLengthCreator20]}
                    />
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