import {RootStateType} from "./redux-store";

export const friendsDataSelector = (state: RootStateType) => {
    return state.sidebar.friendsData;
}