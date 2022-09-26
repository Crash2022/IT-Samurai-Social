import React, {ChangeEvent} from "react";
import {
    ActionsType,
    MessagesArray,
    sendMessageActionCreator,
    updateNewDialogTextActionCreator
} from '../../redux/store';

import {MessageItem} from "./MessageItem";

type MessagesType = {
    myMessages: Array<MessagesArray>
    newMessageTextForDialog: string
    dispatch: (action: ActionsType) => void
}

{/* <div>{props.textProps.map((elem) => elem.text)}</div>; */}

export const MessageItemContainer = (props: MessagesType) => {

    const sendMessageHandler = () => {
        props.dispatch(sendMessageActionCreator());
    }
    const onChangeMessageText = (event: ChangeEvent<HTMLTextAreaElement>) => {
        let textareaMessage = event.currentTarget.value;
        props.dispatch(updateNewDialogTextActionCreator(textareaMessage));

        /*props.dispatch({type: 'UPDATE-NEW-POST-TEXT', newText: textareaValue});*/

        /*let textareaMessage = event.currentTarget.value;
        let action = updateNewDialogTextActionCreator(textareaMessage);
        props.dispatch(action);*/
    }

    return (
        <MessageItem myMessages={props.myMessages}
                     newMessageTextForDialog={props.newMessageTextForDialog}
                     dispatch={props.dispatch}
                     sendMessageHandler={sendMessageHandler}
                     onChangeMessageText={onChangeMessageText}
        />
    )
};