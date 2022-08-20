import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./Messages.module.css";
import {MessagePropsType} from "./Messages";

{/* <div>{props.textProps.map((elem) => elem.text)}</div>; */}

export const MessageItem = (props: MessagePropsType) => {
  return (
    <>
      {props.textProps.map((elem) => {
        return (
          <>
            <div>
              {elem.text}
            </div>
          </>
        )
      })}
    </>
  )
};