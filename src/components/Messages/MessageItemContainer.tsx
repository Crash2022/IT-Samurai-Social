import React, {ChangeEvent} from "react";
import {
    ActionsType,
    MessagesArray,
    StoreType,
    sendMessageActionCreator,
    updateNewDialogTextActionCreator
} from '../../redux/store';

import {MessageItem} from "./MessageItem";

type MessagesType = {
    myMessages: Array<MessagesArray>
    newMessageTextForDialog: string
    dispatch: (action: ActionsType) => void
    store: StoreType
}

{/* <div>{props.textProps.map((elem) => elem.text)}</div>; */}

export const MessageItemContainer = (props: MessagesType) => {

    //let state = props.store.getState().dialogsPage.messagesData;

    const sendMessageHandler = () => {
        props.store.dispatch(sendMessageActionCreator());
    }
    const onChangeMessageText = (textareaMessage: string) => {
        /*props.dispatch({type: 'UPDATE-NEW-POST-TEXT', newText: textareaValue});*/

        /*let textareaMessage = event.currentTarget.value;
        let action = updateNewDialogTextActionCreator(textareaMessage);
        props.dispatch(action);*/

        props.store.dispatch(updateNewDialogTextActionCreator(textareaMessage));
    }

    return (
        <MessageItem myMessages={props.myMessages}
                     newMessageTextForDialog={props.newMessageTextForDialog}
                     dispatch={props.dispatch}
                     store={props.store}
        />
    )
};