import {applyMiddleware, combineReducers, legacy_createStore} from "redux";
import {profileReducer} from "./profilePage-reducer";
import {dialogsPageReducer} from "./dialogsPage-reducer";
import {sidebarReducer} from "./sidebar-reducer";
import {usersReducer} from "./users-reducer";
import {authReducer} from "./auth-reducer";
import {appReducer} from "./app-reducer";
import thunkMiddleware from 'redux-thunk';
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

export let store = legacy_createStore(rootReducer, applyMiddleware(thunkMiddleware));

export type RootStateType = ReturnType<typeof rootReducer>

export default store;

// @ts-ignore
window.store = store