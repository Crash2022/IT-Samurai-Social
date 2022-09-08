import React from "react";
import classes from "./Messages.module.css";

import {DialogItem} from "./DialogItem";
import {MessageItem} from "./MessageItem";

import {DialogsArray, MessagesArray} from '../../redux/store';

type MessagesType = {
  myDialogs: DialogsArray[]
  myMessages: MessagesArray[]
  newMessageTextForDialog: string
  dispatch: (action: any) => void
  store: any
}

export const Messages = (props: MessagesType) => {
  return (
    <>
      <div className={classes.messages}>
        <div className={classes.dialogs}>
          <DialogItem mydialogs={props.myDialogs} />
        </div>

        <div className={classes.text}>
          <MessageItem myMessages={props.myMessages}
                       dispatch={props.dispatch}
                       newMessageTextForDialog={props.newMessageTextForDialog}
                       store={props.store}/>
        </div>
      </div>
    </>
  );
}