import React, {ChangeEvent} from "react";
import classes from "../Profile/MyPosts/MyPostsAdd.module.css";
import {ActionsType, MessagesArray} from '../../redux/store';
import {Button} from "../../UI/Button";
import {v1} from "uuid";

type MessagesType = {
    myMessages: Array<MessagesArray>
    newMessageTextForDialog: string
    dispatch: (action: ActionsType) => void
    sendMessageHandler: () => void
    onChangeMessageText: (event: ChangeEvent<HTMLTextAreaElement>) => void
}

{/* <div>{props.textProps.map((elem) => elem.text)}</div>; */}

export const MessageItem = (props: MessagesType) => {

    return (
        <>
            {props.myMessages.map(message => {
              return (
                  <div key={v1()}>
                      {message.text}
                  </div>
              )
            })}
            <div className={classes.content__myposts_add}>
                    <textarea className={classes.newMessage}
                              placeholder={'Введите сообщение...'}
                              value={props.newMessageTextForDialog}
                              onChange={props.onChangeMessageText}
                    />
            </div>
            <div className={classes.sendButton}>
                <Button name={'Отправить сообщение'} callBack={props.sendMessageHandler}/>
            </div>
        </>
    )
};