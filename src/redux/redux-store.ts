import {applyMiddleware, combineReducers, legacy_createStore} from "redux";
import {ProfileActionsType, profileReducer} from "./profilePage-reducer";
import {DialogsActionsType, dialogsPageReducer} from "./dialogsPage-reducer";
import {SidebarActionsType, sidebarReducer} from "./sidebar-reducer";
import {UsersActionsType, usersReducer} from "./users-reducer";
import {AuthActionsType, authReducer} from "./auth-reducer";
import {AppActionsType, appReducer} from "./app-reducer";
import thunkMiddleware, { ThunkAction, ThunkDispatch } from 'redux-thunk';
import { reducer as formReducer } from 'redux-form'

export const rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsPageReducer,
    sidebar: sidebarReducer,
    usersPage: usersReducer,
    auth: authReducer,
    app: appReducer,
    form: formReducer
});

export const store = legacy_createStore(rootReducer, applyMiddleware(thunkMiddleware));

//export type ReduxStoreType = typeof store
export type RootStateType = ReturnType<typeof rootReducer>

export type AppThunkDispatch = ThunkDispatch<RootStateType, unknown, ApplicationActionsType>

export type AppThunkType<ReturnType = void> = ThunkAction<ReturnType, RootStateType, unknown, ApplicationActionsType>

export type ApplicationActionsType =
    AppActionsType |
    AuthActionsType |
    DialogsActionsType |
    ProfileActionsType |
    SidebarActionsType |
    UsersActionsType;

// export default store;

// @ts-ignore
window.store = store