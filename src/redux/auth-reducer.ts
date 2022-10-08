import {ActionsType} from "./redux-store";

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

export const authReducer = ( state: AuthPropsType = initialState, action: ActionsType): AuthPropsType => {
    switch(action.type) {
        case SET_USER_DATA:
            return {...state, ...action.data, isAuth: true};
        default:
            return state;
    }
}

export const SET_USER_DATA = 'SET_USER_DATA'
export type SetAuthUserDataACType = ReturnType<typeof setAuthUserDataAC>

export const setAuthUserDataAC = (userId: string, email: null, login: null) => ({
    type: SET_USER_DATA,
    data: {
        id: userId,
        email,
        login
    }
} as const)