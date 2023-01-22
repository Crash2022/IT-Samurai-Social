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

export const selectedIsAuth = (state: RootStateType) => state.auth.isAuth
export const selectedLogin = (state: RootStateType) => state.auth.login
export const selectedAuthUserId = (state: RootStateType) => state.auth.userId
export const selectedCaptcha = (state: RootStateType) => state.auth.captchaUrl