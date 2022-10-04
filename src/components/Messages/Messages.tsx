import React from "react";
import classes from "./Messages.module.css";
import {DialogItem} from "./DialogItem";
import {MessageItem} from "./MessageItem";
import {MessagesContainerType} from "./MessagesContainer";

export const Messages = (props: MessagesContainerType) => {
    return (
        <>
            <div className={classes.messages}>
                <div className={classes.dialogs}>
                    <DialogItem myDialogs={props.myDialogs}/>
                </div>
                <div className={classes.text}>
                    <MessageItem myMessages={props.myMessages}
                                 onChangeMessageText={props.updateNewDialogTextAC}
                                 newMessageTextForDialog={props.newMessageTextForDialog}
                                 sendMessageHandler={props.sendMessageAC}
                    />
                </div>
            </div>
        </>
    );
}