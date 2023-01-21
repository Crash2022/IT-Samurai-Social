import {RootStateType} from "./redux-store";

export const selectedNavbarUsers = (state: RootStateType) => state.sidebar.users
export const selectedNavbarFriends = (state: RootStateType) => state.sidebar.friend