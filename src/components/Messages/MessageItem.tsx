import React, {ChangeEvent} from "react";
//import classes from "./Messages.module.css";

import {MessagesArray, sendMessageActionCreator, updateNewDialogTextActionCreator} from '../../redux/datastate';
import classes from "../Profile/MyPosts/MyPostsAdd.module.css";
import {Button} from "../../UI/Button";

type MessagesType = {
    mymessages: Array<MessagesArray>
    newMessageTextForDialog: string
    dispatch: (action: any) => void
}

{/* <div>{props.textProps.map((elem) => elem.text)}</div>; */}

export const MessageItem = (props: MessagesType) => {

    //let messageElements = props.mymessages.map(message => {<div>message.text</div>})

    const sendMessageHandler = () => {
        props.dispatch(sendMessageActionCreator());
    }
    const onChangeMessageText = (event: ChangeEvent<HTMLTextAreaElement>) => {
        let textareaMessage = event.currentTarget.value;
        /*props.dispatch({type: 'UPDATE-NEW-POST-TEXT', newText: textareaValue});*/
        let action = updateNewDialogTextActionCreator(textareaMessage);
        props.dispatch(action);
    }

    return (
        <>
            {props.mymessages.map(message => {
              return (
                  <div>
                      {message.text}
                  </div>
              )
            })}
            <div className={classes.content__myposts_add}>
                    <textarea className={classes.newMessage}
                              placeholder={'Введите сообщение...'}
                              value={props.newMessageTextForDialog}
                              onChange={onChangeMessageText}
                    />
            </div>
            <div className={classes.sendButton}>
                <Button name={'Отправить сообщение'} callBack={sendMessageHandler}/>
            </div>
        </>
    )
};