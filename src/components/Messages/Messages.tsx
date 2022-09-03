import React from "react";
import classes from "./Messages.module.css";

import {DialogItem} from "./DialogItem";
import {MessageItem} from "./MessageItem";

import {DialogsArray, MessagesArray} from '../../redux/datastate';

type MessagesType = {
  mydialogs: DialogsArray[]
  mymessages: MessagesArray[]
  newMessageTextForDialog: string
  dispatch: (action: any) => void
}

export const Messages = (props: MessagesType) => {
  return (
    <>
      <div className={classes.messages}>
        <div className={classes.dialogs}>
          <DialogItem mydialogs={props.mydialogs} />
        </div>

        <div className={classes.text}>
          <MessageItem mymessages={props.mymessages}
                       dispatch={props.dispatch}
                       newMessageTextForDialog={props.newMessageTextForDialog}/>
        </div>
      </div>
    </>
  );
}