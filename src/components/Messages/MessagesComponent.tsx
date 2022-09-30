import React from "react";
import classes from "./Messages.module.css";
import {DialogItem} from "./DialogItem";
import {MessageItem} from "./MessageItem";
import {MessagesContainerType} from "./MessagesContainer";

export const MessagesComponent = (props: MessagesContainerType) => {
    return (
        <>
            <div className={classes.messages}>
                <div className={classes.dialogs}>
                    <DialogItem myDialogs={props.myDialogs}/>
                </div>
                <div className={classes.text}>
                    <MessageItem myMessages={props.myMessages}
                                 onChangeMessageText={props.onChangeMessageText}
                                 newMessageTextForDialog={props.newMessageTextForDialog}
                                 sendMessageHandler={props.sendMessageHandler}
                    />
                </div>
            </div>
        </>
    );
}