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

export type MyPostsItemPropsType = {
    myPosts: Array<UserMessageType>
    newPostText: string
}
export type UserMessageType = {
    id: string
    avatar: string
    nickname: string
    postMessage: string
    likes: number
    dislikes: number
}

export type DialogsPropsType = {
    dialogsData: Array<DialogsArray>
    messagesData: Array<MessagesArray>
    newMessageTextForDialog: string
}
export type DialogsArray = {
    id: string
    name: string
}
export type MessagesArray = {
    id: string
    text: string
}

export type SideBarPropsType = {
    friendsData: Array<SidebarFriendsType>
}
export type SidebarFriendsType = {
    id: string
    name: string
    avatar: string
}

export type UsersPropsType = {
    users: Array<UsersArray>
    pageSize: number
    totalUsersCount: number
    currentPage: number
}
export type UsersArray = {
    id: string
    name: string
    followed: boolean
    status: string
    //location: {country: string, city: string}
    photos: {small: string, large: string}
}

export default store;