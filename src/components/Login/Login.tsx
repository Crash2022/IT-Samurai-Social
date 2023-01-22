import React from "react";
import styles from './Login.module.css';
import {reduxForm} from "redux-form";
import {LoginForm, LoginFormOwnProps, LoginFormValuesType} from "./LoginForm";
import {connect} from "react-redux";
import {postLoginTC} from "../../redux/auth-reducer";
import {/*Redirect,*/ Navigate} from "react-router-dom";
import {RootStateType} from "../../redux/redux-store";
import {captchaUrlSelector, isAuthSelector} from '../../redux/auth-selectors';

export type LoginPropsType = MapStateToPropsLoginType & MapDispatchToPropsLoginType;

export type MapStateToPropsLoginType = {
    isAuth: boolean
    captchaUrl: null | string
}
export type MapDispatchToPropsLoginType = {
    setAuthUserData: (email: string, password: string,
                      rememberMe: boolean, captchaUrl: null | string) => void
}

const mapStateToProps = (state: RootStateType): MapStateToPropsLoginType => {
    return {
        isAuth: isAuthSelector(state),
        captchaUrl: captchaUrlSelector(state)
    }
}
const mapDispatchToProps: MapDispatchToPropsLoginType = {
    setAuthUserData: postLoginTC
}

export const Login = (props: LoginPropsType) => {

    const onSubmit = (formData: LoginFormValuesType) => {
        props.setAuthUserData(formData.email, formData.password,
            formData.rememberMe, formData.captchaUrl);
    }

    if (props.isAuth) {
        // return <Redirect to={'/profile'}/>
        return <Navigate to={'/profile'}/>
    }

    return (
        <div className={styles.login}>
            <div>
                <h2>Вход</h2>
            </div>
            <div>

                <LoginReduxForm onSubmit={onSubmit} captchaUrl={props.captchaUrl}/>
            </div>
        </div>
    );
}

export const LoginReduxForm = reduxForm<LoginFormValuesType, LoginFormOwnProps>({
    form: 'login' // уникальное строковое имя для каждой формы
})(LoginForm)

export const LoginContainer = connect(mapStateToProps, mapDispatchToProps)(Login)