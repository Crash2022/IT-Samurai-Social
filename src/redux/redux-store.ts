import {combineReducers, createStore} from "redux";
import {
    profileReducer,
    AddPostACType, UpdateNewPostACType,
    SetUserProfileACType
} from "./profilePage-reducer";
import {ActionSendMessageType, ActionUpdateMessageType, dialogsPageReducer} from "./dialogsPage-reducer";
import {sidebarReducer} from "./sidebar-reducer";
import {
    SetCurrentPageACType,
    SetUsersACType, ToggleIsLoadingACType,
    UserFollowACType,
    usersReducer,
    UserUnfollowACType
} from "./users-reducer";

export const rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsPageReducer,
    sidebar: sidebarReducer,
    usersPage: usersReducer
});

export let store = createStore(rootReducer);

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
    SetUserProfileACType;

export default store;