import React from "react";
import styles from './Login.module.css';
import {reduxForm} from "redux-form";
import {LoginForm, LoginFormValuesType} from "./LoginForm";
import {connect} from "react-redux";
import {getCaptchaThunkCreator, postLoginThunkCreator} from "../../redux/auth-reducer";
import {Redirect} from "react-router-dom";
import {RootStateType} from "../../redux/redux-store";

export type LoginPropsType = MapStateToPropsLoginType & MapDispatchToPropsLoginType;

export type MapStateToPropsLoginType = {
    isAuth: boolean
    captcha: null | string
}
export type MapDispatchToPropsLoginType = {
    setAuthUserData: (email: string,
                      password: string, rememberMe: boolean) => void
    //getCaptcha: () => void
}

const mapStateToProps = (state: RootStateType): MapStateToPropsLoginType => {
    return {
        isAuth: state.auth.isAuth,
        captcha: state.auth.captchaUrl
    }
}
const mapDispatchToProps: MapDispatchToPropsLoginType = {
    setAuthUserData: postLoginThunkCreator
    //getCaptcha: getCaptchaThunkCreator
}

export const Login = (props: LoginPropsType) => {

    const onSubmit = (formData: LoginFormValuesType) => {
        //console.log(formData);
        props.setAuthUserData(formData.email, formData.password, formData.rememberMe, formData.captcha);
    }

    if (props.isAuth) {
        return <Redirect to={'/profile'}/>
    }

    return (
        <div className={styles.login}>
            <div>
                <h2>Вход</h2>
            </div>
            <div>
                <LoginReduxForm onSubmit={onSubmit} initialValues={props.captcha}/>
            </div>
        </div>
    );
}

export const LoginReduxForm = reduxForm<LoginFormValuesType>({
    form: 'login' // уникальное строковое имя для каждой формы
})(LoginForm)

export const LoginContainer = connect(mapStateToProps, mapDispatchToProps)(Login)