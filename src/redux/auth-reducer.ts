import {Dispatch} from "redux";
import {authAPI} from "../api/api";
import {ThunkDispatch} from "redux-thunk";
import {RootStateType} from "./redux-store";

type ActionsType = SetAuthUserDataACType;

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
        case 'SET_USER_DATA':
            return {...state, ...action.payload};
        default:
            return state;
    }
}

/*-------------------------ACTION CREATOR-------------------------*/

export type SetAuthUserDataACType = ReturnType<typeof setAuthUserDataAC>
export const setAuthUserDataAC = (userId: string | null, email: string | null,
                                  login: null, isAuth: boolean) => ({
    type: 'SET_USER_DATA',
    payload: {
        id: userId,
        email, login, isAuth
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
    return (dispatch: ThunkDispatch<RootStateType, unknown, ActionsType>) => {

        authAPI.postLogin(email, password, rememberMe)
            .then(data => {
                if (data.resultCode === 0) {
                    dispatch(getAuthThunkCreator());
                }
            })
    }
}

export const deleteLoginThunkCreator = () => {
    return (dispatch: Dispatch<ActionsType>) => {

        authAPI.deleteLogin()
            .then(data => {
                if (data.resultCode === 0) {
                    dispatch(setAuthUserDataAC(null, null, null, false));
                }
            })
    }
}