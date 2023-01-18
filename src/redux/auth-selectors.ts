import {RootStateType} from "./redux-store";

export const isAuthSelector = (state: RootStateType) => {
    return state.auth.isAuth;
}

export const loginSelector = (state: RootStateType) => {
    return state.auth.login;
}

export const authUserIdSelector = (state: RootStateType) => {
    return state.auth.userId;
}

export const captchaUrlSelector = (state: RootStateType) => {
    return state.auth.captchaUrl;
}