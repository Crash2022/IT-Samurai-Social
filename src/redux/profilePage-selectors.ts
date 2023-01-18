import {RootStateType} from "./redux-store";

export const profileSelector = (state: RootStateType) => {
    return state.profilePage.profile;
}

export const profileStatusSelector = (state: RootStateType) => {
    return state.profilePage.status;
}

export const myPostsSelector = (state: RootStateType) => {
    return state.profilePage.myPosts;
}