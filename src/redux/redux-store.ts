import {combineReducers, createStore} from "redux";
import {ActionChangeType, AddPostACType, myPostPageReducer} from "./myPostPage-reducer";
import {ActionSendMessageType, ActionUpdateMessageType, dialogsPageReducer} from "./dialogsPage-reducer";
import {sidebarReducer} from "./sidebar-reducer";
import {
    SetCurrentPageACType,
    SetUsersACType,
    UserFollowACType,
    usersReducer,
    UserUnfollowACType
} from "./users-reducer";

let reducersBatch = combineReducers({
    myPostPage: myPostPageReducer,
    dialogsPage: dialogsPageReducer,
    sidebar: sidebarReducer,
    usersPage: usersReducer
});

export let store = createStore(reducersBatch);

export type RootStateType = ReturnType<typeof reducersBatch>

export type ActionsType =
    AddPostACType |
    ActionChangeType |
    ActionSendMessageType |
    ActionUpdateMessageType |
    UserFollowACType |
    UserUnfollowACType |
    SetUsersACType |
    SetCurrentPageACType /*| setUsersTotalCountACType*/

export default store;