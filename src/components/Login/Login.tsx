import React from "react";
import styles from './Login.module.css';
import {reduxForm} from "redux-form";
import {LoginForm, LoginFormValuesType} from "./LoginForm";
import {connect} from "react-redux";
import {postLoginThunkCreator} from "../../redux/auth-reducer";
import {Redirect} from "react-router-dom";
import {RootStateType} from "../../redux/redux-store";

export type LoginPropsType = MapStateToPropsLoginType & MapDispatchToPropsLoginType;

export type MapStateToPropsLoginType = {
    isAuth: boolean
}
export type MapDispatchToPropsLoginType = {
    setAuthUserData: (email: string,
                      password: string, rememberMe: boolean) => void
}

const mapStateToProps = (state: RootStateType): MapStateToPropsLoginType => {
    return {
        isAuth: state.auth.isAuth
    }
}
const mapDispatchToProps: MapDispatchToPropsLoginType = {
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
            <div>
                <h2>Вход</h2>
            </div>
            <div>
                <LoginReduxForm onSubmit={onSubmit}/>
            </div>
        </div>
    );
}

export const LoginReduxForm = reduxForm<LoginFormValuesType>({
    form: 'login' // уникальное строковое имя для каждой формы
})(LoginForm)

export const LoginContainer = connect(mapStateToProps, mapDispatchToProps)(Login)