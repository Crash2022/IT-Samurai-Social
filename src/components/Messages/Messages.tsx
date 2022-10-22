import React from "react";
import styles from "./Messages.module.css";
import {DialogItem} from "./DialogItem";
import {MessageItem} from "./MessageItem";
import {MessagesContainerType} from "./MessagesContainer";

export const Messages = (props: MessagesContainerType) => {

    return (
        <>
            <div className={styles.messages}>
                <div className={styles.dialogs}>
                    <DialogItem myDialogs={props.myDialogs}/>
                </div>
                <div className={styles.text}>
                    <MessageItem myMessages={props.myMessages}
                                 sendMessageHandler={props.sendMessageAC}
                    />
                </div>
            </div>
        </>
    );
}