import React from "react";
import {Field, InjectedFormProps} from "redux-form";
import {SuperButton} from "../../common/UI/Button/SuperButton";
import styles from './Login.module.css';
import {SuperInputText} from "../../common/UI/Input/SuperInputText";
import SuperCheckbox from "../../common/UI/Checkbox/SuperCheckbox";
import {maxLengthCreator, requiredField} from "../../common/utils/validators";

export type LoginFormValuesType = {
    email: string
    password: string
    rememberMe: boolean
    captchaUrl: string
}

//const maxLengthCreator20 = maxLengthCreator(20);

export type LoginFormOwnProps = {
    captchaUrl: null | string
}

export const LoginForm: React.FC<InjectedFormProps<LoginFormValuesType, LoginFormOwnProps> & LoginFormOwnProps> =
    ({ handleSubmit, error, captchaUrl}) => {
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
                <div className={styles.formErrorBlock}>

                    {
                        captchaUrl &&
                        <div style={{marginTop: '100px'}}>
                            <img src={captchaUrl} alt='captcha'/>
                        </div>
                    }

                    {
                        error &&
                        <div className={styles.formError}>
                            {error}
                        </div>
                    }

                    {/*пока что отключу captchaUrl*/}
                    {/*{captchaUrl &&
                        <Field
                            placeholder={'Введите символы'}
                            name={'captchaUrl'}
                            component={SuperInputText}
                            validate={[requiredField]}
                        />
                    }*/}

                </div>
                <div>
                    <SuperButton className={styles.loginButton}>Войти</SuperButton>
                </div>
            </form>
    );
}