import {combineReducers, createStore} from "redux";
import {
    myPostPageReducer,
    AddPostACType, UpdateNewPostACType,
    SetUserProfileACType
} from "./myPostPage-reducer";
import {ActionSendMessageType, ActionUpdateMessageType, dialogsPageReducer} from "./dialogsPage-reducer";
import {sidebarReducer} from "./sidebar-reducer";
import {
    SetCurrentPageACType,
    SetUsersACType, ToggleIsLoadingACType,
    UserFollowACType,
    usersReducer,
    UserUnfollowACType
} from "./users-reducer";

let reducers = combineReducers({
    myPostPage: myPostPageReducer,
    dialogsPage: dialogsPageReducer,
    sidebar: sidebarReducer,
    usersPage: usersReducer
});

export let store = createStore(reducers);

export type RootStateType = ReturnType<typeof reducers>

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
    SetUserProfileACType

export type MyPostsItemPropsType = {
    myPosts: Array<UserMessageType>
    newPostText: string
    profile: null
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
    isLoading: boolean
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