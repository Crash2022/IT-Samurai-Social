import React from 'react';
import {
    ActionsType,
    ADD_POST, DialogsPropsType,
    RootDataStateType,
    SEND_DIALOG_TEXT,
    UPDATE_NEW_DIALOG_TEXT,
    UPDATE_NEW_POST_TEXT
} from "./datastate";
import {v1} from "uuid";

export type dialogsPageReducerType = {
    state: RootDataStateType
    action: ActionsType
}

export const dialogsPageReducer = (state: DialogsPropsType, action: ActionsType) => {

    if (action.type === SEND_DIALOG_TEXT) {
        let newDialogMessageText = state.newMessageTextForDialog;
        state.newMessageTextForDialog = '';
        state.messagesData.push({id: v1(), text: newDialogMessageText});
        /*props._callSubscriber();*/
    } else if (action.type === UPDATE_NEW_DIALOG_TEXT) {
        state.newMessageTextForDialog = action.newDialogMessageText;
        /*props._callSubscriber();*/
    }

    return state;
}