import React, {ChangeEvent} from "react";
//import classes from "./Messages.module.css";

import {
    ActionsType, addPostActionCreator,
    MessagesArray,
    sendMessageActionCreator, StoreType,
    updateNewDialogTextActionCreator
} from '../../redux/store';
import classes from "../Profile/MyPosts/MyPostsAdd.module.css";
import {Button} from "../../UI/Button";

type MessagesType = {
    myMessages: Array<MessagesArray>
    newMessageTextForDialog: string
    dispatch: (action: ActionsType) => void
    store: StoreType
    //textareaMessage: string
    updateNewDialogText: (textareaMessage: string) => void
    sendMessage: () => void
    dialogsPage: any
}

{/* <div>{props.textProps.map((elem) => elem.text)}</div>; */}

export const MessageItem = (props: MessagesType) => {

    //let state = props.dialogsPage.messagesData;

    const sendMessageHandler = () => {
        //props.dispatch(sendMessageActionCreator());

        props.dispatch(sendMessageActionCreator());
    }
    const onChangeMessageText = (event: ChangeEvent<HTMLTextAreaElement>) => {
        /*props.dispatch({type: 'UPDATE-NEW-POST-TEXT', newText: textareaValue});*/

        /*let textareaMessage = event.currentTarget.value;
        let action = updateNewDialogTextActionCreator(textareaMessage);
        props.dispatch(action);*/

        let textareaMessage = event.currentTarget.value;
        props.dispatch(updateNewDialogTextActionCreator(textareaMessage));
    }

    return (
        <>
            {props.myMessages.map(message => {
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