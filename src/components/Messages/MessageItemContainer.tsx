import React, {ChangeEvent} from "react";
//import classes from "./Messages.module.css";

import {
    ActionsType,
    MessagesArray,
    sendMessageActionCreator, StoreType,
    updateNewDialogTextActionCreator, updateNewPostActionCreator
} from '../../redux/store';
import classes from "../Profile/MyPosts/MyPostsAdd.module.css";
import {Button} from "../../UI/Button";
import {MessageItem} from "./MessageItem";

type MessagesType = {
    myMessages: Array<MessagesArray>
    newMessageTextForDialog: string
    //newMessageTextForDialog: string
    dispatch: (action: ActionsType) => void
    store: StoreType
    //textareaMessage: string
    //updateNewDialogText: (textareaMessage: string) => void
}

{/* <div>{props.textProps.map((elem) => elem.text)}</div>; */}

export const MessageItemContainer = (props: MessagesType) => {

    let state = props.store.getState().dialogsPage.messagesData;

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
        <MessageItem updateNewDialogText={onChangeMessageText}
                     sendMessage={sendMessageHandler}
                     dialogsPage={state}
                     myMessages={props.myMessages}
                     newMessageTextForDialog={props.newMessageTextForDialog}
                     dispatch={props.dispatch}
                     store={props.store}
        />
    )
};