import {getAuthTC} from "./auth-reducer";
import {AppThunkType} from "./redux-store";

export type AppPropsType = {
    initialized: boolean
}

const initialState = {
    initialized: false
};

export const appReducer = (state: AppPropsType = initialState, action: AppActionsType): AppPropsType => {
    switch(action.type) {
        case 'SET_INITIALIZED':
            return {...state, initialized: true};
        default:
            return state;
    }
}

/*-------------------------ACTION CREATOR-------------------------*/

export type AppActionsType = SetInitializedACType;

export type SetInitializedACType = ReturnType<typeof setInitializedAC>
export const setInitializedAC = () => ({
    type: 'SET_INITIALIZED'
} as const)

/*-------------------------THUNK-------------------------*/

export const initializeAppTC = (): AppThunkType => {
    return (dispatch) => {
        let promise = dispatch(getAuthTC());

        Promise.all([promise])
            .then( () => {
                dispatch(setInitializedAC());
        })
            .catch((error) => {
                console.log(error);
            })
    }
}