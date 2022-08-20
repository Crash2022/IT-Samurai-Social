import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./Messages.module.css";

import {DialogItem} from "./DialogItem";
import {MessageItem} from "./MessageItem";

export type DialogsPropsType = {
  dialogProps: Array<DialogsArray>;
};
type DialogsArray = {
  id: number
  name: string
}

export type MessagePropsType = {
  textProps: Array<MessagesArray>;
};
type MessagesArray = {
  text: string;
};

const dialogsData = [
  { id: 1, name: "Neil Tunicliff" },
  { id: 2, name: "Craig Lee Scott" },
  { id: 3, name: "Ali Clarkson" },
  { id: 4, name: "Thomas Remvik Aasen" },
  { id: 5, name: "Damon Watson" },
];

const messagesData = [
  { text: "Hello, Neil Tunicliff" },
  { text: "Hello, Craig Lee Scott" },
  { text: "Hello, Ali Clarkson" },
  { text: "Hello, Thomas Remvik Aasen" },
  { text: "Hello, Damon Watson" },
];

export const Messages = (/* props: PropsType */) => {
    
  return (
    <>
      <div className={classes.messages}>
        <div className={classes.dialogs}>
          {/* <DialogItem id="1" dialogName="Neil Tunicliff" />
          <DialogItem id="2" dialogName="Craig Lee Scott" />
          <DialogItem id="3" dialogName="Ali Clarkson" />
          <DialogItem id="4" dialogName="Thomas Remvik Aasen" />
          <DialogItem id="5" dialogName="Damon Watson" /> */}

          <DialogItem dialogProps={dialogsData} />
        </div>

        <div className={classes.text}>
          {/* <MessageItem text="Hello, Damon Watson" />
          <MessageItem text="Hello, Damon Watson" />
          <MessageItem text="Hello, Damon Watson" />
          <MessageItem text="Hello, Damon Watson" />
          <MessageItem text="Hello, Damon Watson" /> */}

          <MessageItem textProps={messagesData} />
        </div>
      </div>
    </>
  );
}
