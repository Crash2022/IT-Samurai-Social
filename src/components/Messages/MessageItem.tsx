import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./Messages.module.css";
import {MessagePropsType} from '../../index';

{/* <div>{props.textProps.map((elem) => elem.text)}</div>; */}

export const MessageItem = (props: MessagePropsType) => {
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