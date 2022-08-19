import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./Messages.module.css";

type PropsType = {
    dialogs: DialogPropsType
    messages: MessagePropsType
}

type DialogPropsType = {
    id: string
    dialogName: string
}

type MessagePropsType = {
    text: string
}

export const DialogItem = (props: DialogPropsType) => {

  let path = "/messages/" + props.id;

  return (
      <div>
        <NavLink to={path} activeClassName={classes.activeLink}>{props.dialogName}</NavLink>
      </div>
    
  );
};

export const MessageItem = (props: MessagePropsType) => {

    return (
        <div>
          {props.text}
        </div>
      
    );
  };

export const Messages = (props: PropsType) => {

    let messageData = [
        {}
    ]

  return (
    <>
        <div className={classes.messages}>
            <div className={classes.dialogs}>
                <DialogItem id="1" dialogName="Neil Tunicliff"/>
                <DialogItem id="2" dialogName="Craig Lee Scott"/>
                <DialogItem id="3" dialogName="Ali Clarkson"/>
                <DialogItem id="4" dialogName="Thomas Remvik Aasen"/>
                <DialogItem id="5" dialogName="Damon Watson"/>
            </div>

            <div className={classes.text}>
                <MessageItem text="Hello, Damon Watson"/>
                <MessageItem text="Hello, Damon Watson"/>
                <MessageItem text="Hello, Damon Watson"/>
                <MessageItem text="Hello, Damon Watson"/>
                <MessageItem text="Hello, Damon Watson"/>
            </div>
        </div>
    </>
  );
};
