import {Dispatch} from "redux";
import {authAPI} from "../api/api";
import {ThunkDispatch} from "redux-thunk";
import {RootStateType} from "./redux-store";
import {stopSubmit} from "redux-form";

type ActionsType = SetAuthUserDataACType | LogoutUserDataACType;

export type AuthPropsType = {
    userId: null | string
    email: null | string
    login: null | string
    isAuth: boolean
}

let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false
};

export const authReducer = (state: AuthPropsType = initialState, action: ActionsType): AuthPropsType => {
    switch(action.type) {
        case 'SET_USER_DATA': {
            return {...state, ...action.payload, userId: action.payload.userId.toString()};
        }
        case 'LOGOUT_USER_DATA':
            return initialState;
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

/*-------------------------THUNK-------------------------*/

export const getAuthThunkCreator = () => {
    return (dispatch: Dispatch<ActionsType>) => {

        authAPI.getAuth()
            .then(data => {
                if (data.resultCode === 0) {
                    let {id, email, login} = data.data;
                    dispatch(setAuthUserDataAC(id, email, login, true));
                }
            })
    }
}

export const postLoginThunkCreator = (email: string, password: string, rememberMe: boolean) => {
    return (dispatch: ThunkDispatch<RootStateType, unknown, ReturnType<typeof stopSubmit>>) => {

        authAPI.postLogin(email, password, rememberMe)
            .then(data => {
                if (data.resultCode === 0) {
                    dispatch(getAuthThunkCreator());
                } else {
                    let message = data.messages.length > 0 ? data.messages[0] : 'Some error';
                    dispatch(stopSubmit('login', {_error: message}));
                }
            })
    }
}

export const deleteLoginThunkCreator = () => {
    return (dispatch: Dispatch<ActionsType>) => {

        authAPI.deleteLogin()
            .then(data => {
                if (data.resultCode === 0) {
                    dispatch(logoutUserDataAC(null, null, null, false));
                }
            })
    }
}