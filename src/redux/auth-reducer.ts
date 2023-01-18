import {Dispatch} from "redux";
import {authAPI, securityAPI} from "../common/api/api";
import {ThunkDispatch} from "redux-thunk";
import {RootStateType} from "./redux-store";
import {stopSubmit} from "redux-form";

export type AuthActionsType =
    SetAuthUserDataACType |
    LogoutUserDataACType |
    GetCaptchaACType;

export type AuthPropsType = {
    userId: null | string
    email: null | string
    login: null | string
    isAuth: boolean
    captchaUrl: null | string
}

let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false,
    captchaUrl: null
};

export const authReducer = (state: AuthPropsType = initialState, action: AuthActionsType): AuthPropsType => {
    switch(action.type) {
        case 'SET_USER_DATA': {
            return {...state, ...action.payload, userId: action.payload.userId.toString()};
        }
        case 'LOGOUT_USER_DATA':
            return initialState;
        case 'GET_CAPTCHA':
            return {...state, captchaUrl: action.captchaUrl};
        default:
            return state;
    }
}

/*-------------------------ACTION CREATOR-------------------------*/

export type SetAuthUserDataACType = ReturnType<typeof setAuthUserDataAC>
export const setAuthUserDataAC = (userId: number, email: string,
                                  login: string, isAuth: boolean) => ({
    type: 'SET_USER_DATA',
    payload: {
        userId, email,
        login, isAuth
    }
} as const)

export type LogoutUserDataACType = ReturnType<typeof logoutUserDataAC>
export const logoutUserDataAC = (userId: null, email: null,
                                 login: null, isAuth: boolean) => ({
    type: 'LOGOUT_USER_DATA',
    payload: {
        userId, email,
        login, isAuth
    }
} as const)

export type GetCaptchaACType = ReturnType<typeof getCaptchaAC>
export const getCaptchaAC = (captchaUrl: string) => ({
    type: 'GET_CAPTCHA', captchaUrl
} as const)

/*-------------------------THUNK-------------------------*/

export const getAuthTC = () => {
    return (dispatch: Dispatch<AuthActionsType>) => {
        authAPI.getAuth()
            .then(data => {
                if (data.resultCode === 0) {
                    let {id, email, login} = data.data;
                    dispatch(setAuthUserDataAC(id, email, login, true));
                }
            })
    }
}

export const postLoginTC = (email: string, password: string,
                                      rememberMe: boolean, captchaUrl: string | null) => {
    return (dispatch: ThunkDispatch<RootStateType, unknown, ReturnType<typeof stopSubmit>>) => {

        authAPI.postLogin(email, password, rememberMe, captchaUrl)
            .then(data => {
                if (data.resultCode === 0) {
                    dispatch(getAuthTC());
                } else {
                    if (data.resultCode === 10) {
                        dispatch(getCaptchaTC());
                    }

                    let message = data.messages.length > 0 ? data.messages[0] : 'Some error';
                    dispatch(stopSubmit('login', {_error: message}));
                }
            })
    }
}

export const deleteLoginTC = () => {
    return (dispatch: Dispatch<AuthActionsType>) => {
        authAPI.deleteLogin()
            .then(data => {
                if (data.resultCode === 0) {
                    dispatch(logoutUserDataAC(null, null, null, false));
                }
            })
    }
}

export const getCaptchaTC = () => {
    return (dispatch: Dispatch) => {
        securityAPI.getCaptcha()
            .then(data => {
                dispatch(getCaptchaAC(data.url));
            })
    }
}