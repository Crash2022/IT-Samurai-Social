import {applyMiddleware, combineReducers, createStore} from "redux";
import {profileReducer, AddPostACType, UpdateNewPostACType,
    SetUserProfileACType, SetUserStatusACType} from "./profilePage-reducer";
import {ActionSendMessageType, ActionUpdateMessageType, dialogsPageReducer} from "./dialogsPage-reducer";
import {sidebarReducer} from "./sidebar-reducer";
import {usersReducer, SetCurrentPageACType, SetUsersACType,
    ToggleFollowInProgressACType, ToggleIsLoadingACType,
    UserFollowACType, UserUnfollowACType} from "./users-reducer";
import {authReducer, SetAuthUserDataACType} from "./auth-reducer";
import thunkMiddleware from 'redux-thunk';

export const rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsPageReducer,
    sidebar: sidebarReducer,
    usersPage: usersReducer,
    auth: authReducer
});

export let store = createStore(rootReducer, applyMiddleware(thunkMiddleware));

export type RootStateType = ReturnType<typeof rootReducer>

export type ActionsType =
    AddPostACType |
    UpdateNewPostACType |
    ActionSendMessageType |
    ActionUpdateMessageType |
    UserFollowACType |
    UserUnfollowACType |
    SetUsersACType |
    SetCurrentPageACType |
    /*| setUsersTotalCountACType*/
    ToggleIsLoadingACType |
    SetUserProfileACType |
    SetAuthUserDataACType |
    ToggleFollowInProgressACType |
    SetUserStatusACType;

export default store;

// @ts-ignore
window.store = store