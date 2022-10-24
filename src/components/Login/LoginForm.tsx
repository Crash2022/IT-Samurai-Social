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

//const maxLengthCreator20 = maxLengthCreator(20);

export const LoginForm: React.FC<InjectedFormProps<LoginFormValuesType>> = ({ handleSubmit , error}) => {
    return (
            <form onSubmit={handleSubmit}>
                <div>
                    <Field
                        placeholder={'E-Mail'}
                        name={'email'}
                        component={SuperInputText}
                        validate={[requiredField]}
                    />
                </div>
                <div>
                    <Field
                        placeholder={'Пароль'}
                        name={'password'}
                        type={'password'}
                        component={SuperInputText}
                        validate={[requiredField]}
                    />
                </div>
                <div>
                    <Field name={'rememberMe'} component={SuperCheckbox}/>Запомнить меня
                </div>
                {
                    error &&
                    <div className={styles.formError}>
                        {error}
                    </div>
                }
                <div>
                    <SuperButton className={styles.loginButton}>Войти</SuperButton>
                </div>
            </form>
    );
}