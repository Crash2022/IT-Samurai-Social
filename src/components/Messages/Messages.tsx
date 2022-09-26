import React from "react";
import classes from "./Messages.module.css";
import {DialogItem} from "./DialogItem";
import {DialogsArray, MessagesArray} from '../../redux/store';
import MessageItemContainer from "./MessageItemContainer";

type MessagesType = {
    myDialogs: Array<DialogsArray>
    myMessages: Array<MessagesArray>
    newMessageTextForDialog: string
}

export const Messages = (props: MessagesType) => {
    return (
        <>
            <div className={classes.messages}>
                <div className={classes.dialogs}>
                    <DialogItem myDialogs={props.myDialogs}/>
                </div>
                <div className={classes.text}>
                    <MessageItemContainer myMessages={props.myMessages} />
                </div>
            </div>
        </>
    );
}