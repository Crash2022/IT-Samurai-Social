import React from "react";
import styles from './Login.module.css';
import {reduxForm} from "redux-form";
import {LoginForm, LoginFormValuesType} from "./LoginForm";
import {connect} from "react-redux";
import {postLoginThunkCreator} from "../../redux/auth-reducer";
import {Redirect} from "react-router-dom";
import {RootStateType} from "../../redux/redux-store";

type LoginPropsType = MapStateLoginToPropsType & DispatchLoginToPropsType

export type MapStateLoginToPropsType = {
    isAuth: boolean
}
export type DispatchLoginToPropsType = {
    setAuthUserData: (email: string,
                      password: string, rememberMe: boolean) => void
}

const mapStateToProps = (state: RootStateType): MapStateLoginToPropsType => {
    return {
        isAuth: state.auth.isAuth
    }
}
const mapDispatchToProps: DispatchLoginToPropsType = {
    setAuthUserData: postLoginThunkCreator
}

export const Login = (props: LoginPropsType) => {

    const onSubmit = (formData: LoginFormValuesType) => {
        //console.log(formData);
        props.setAuthUserData(formData.email, formData.password, formData.rememberMe);
    }

    if (props.isAuth) {
        return <Redirect to={'/profile'}/>
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

export const LoginContainer = connect(mapStateToProps, mapDispatchToProps)(Login)