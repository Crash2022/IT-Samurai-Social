import React from "react";
import classes from "./Messages.module.css";

import {DialogsArray, MessagesArray} from '../../redux/datastate';

type MessagesType = {
  mymessages: MessagesArray[]
}

{/* <div>{props.textProps.map((elem) => elem.text)}</div>; */}

export const MessageItem = (props: MessagesType) => {
  return (
    <>
      {props.mymessages.map(message => {
        return (
            <div>
              {message.text}
            </div>
        )
      })}
    </>
  )
};