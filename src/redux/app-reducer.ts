import {getAuthThunkCreator} from "./auth-reducer";
import {ThunkDispatch} from "redux-thunk";
import {RootStateType} from "./redux-store";

type ActionsType = SetInitializedACType;

export type AppPropsType = {
    initialized: boolean
}

let initialState = {
    initialized: false
};

export const appReducer = (state: AppPropsType = initialState, action: ActionsType): AppPropsType => {
    switch(action.type) {
        case 'SET_INITIALIZED':
            return {...state, initialized: true};
        default:
            return state;
    }
}

/*-------------------------ACTION CREATOR-------------------------*/

export type SetInitializedACType = ReturnType<typeof setInitializedAC>
export const setInitializedAC = () => ({
    type: 'SET_INITIALIZED'
} as const)

/*-------------------------THUNK-------------------------*/

export const initializeAppThunkCreator = () => {
    return (dispatch: ThunkDispatch<RootStateType, unknown, ActionsType>) => {
        let promise = dispatch(getAuthThunkCreator());

        Promise.all([promise])
            .then( () => {
                dispatch(setInitializedAC());
        })
    }
}