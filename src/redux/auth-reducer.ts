import {Dispatch} from "redux";
import {authAPI} from "../api/api";

type ActionsType = SetAuthUserDataACType; // | SetLoginDataACType;

export type AuthPropsType = {
    userId: null
    email: null
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
            return {...state, ...action.data, isAuth: true};
        default:
            return state;
    }
}

/*-------------------------ACTION CREATOR-------------------------*/

export type SetAuthUserDataACType = ReturnType<typeof setAuthUserDataAC>
export const setAuthUserDataAC = (userId: string, email: null, login: null) => ({
    type: 'SET_USER_DATA',
    data: {
        id: userId,
        email,
        login
    }
} as const)

// export type SetLoginDataACType = ReturnType<typeof setLoginDataAC>
// export const setLoginDataAC = (userId: string, email: null, password: null,
//                                rememberMe: boolean, captcha: boolean) => ({
//     type: 'SET_LOGIN_DATA',
//     data: {
//         id: userId,
//         email, password,
//         rememberMe, captcha
//     }
// } as const)

/*-------------------------THUNK-------------------------*/

export const getAuthThunkCreator = () => {

    return (dispatch: Dispatch<ActionsType>) => {

        authAPI.getAuth()
            .then(data => {
                if (data.resultCode === 0) {
                    let {id, email, login} = data.data;
                    dispatch(setAuthUserDataAC(id, email, login));
                }
            })
    }
}

// export const postLoginThunkCreator = () => {
//
//     return (dispatch: Dispatch<ActionsType>) => {
//
//         loginAPI.postLogin()
//             .then(data => {
//                 if (data.resultCode === 0) {
//                     let {id, login, password, rememberMe, captcha} = data.data;
//                     dispatch(setLoginDataAC(id, login, password, rememberMe, captcha));
//                 }
//             })
//     }
// }