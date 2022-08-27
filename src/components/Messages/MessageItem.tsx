import React from "react";
//import classes from "./Messages.module.css";

import {MessagesArray} from '../../redux/datastate';
//import {Textarea} from "../../UI/Textarea";

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
              {/*{message.text}*/}
              <textarea></textarea>
              {/*<Textarea textareaValue={} setTextareaValue={} />*/}
            </div>
        )
      })}
    </>
  )
};