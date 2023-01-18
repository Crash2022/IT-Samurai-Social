import {RootStateType} from "./redux-store";

export const dialogsDataSelector = (state: RootStateType) => {
    return state.dialogsPage.dialogsData;
}

export const messagesDataSelector = (state: RootStateType) => {
    return state.dialogsPage.messagesData;
}