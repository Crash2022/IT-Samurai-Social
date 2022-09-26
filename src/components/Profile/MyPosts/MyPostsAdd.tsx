import React from "react";
import {ChangeEvent} from "react";
import classes from './MyPostsAdd.module.css';
import {Button} from "../../../UI/Button";
//import {Textarea} from "../../../UI/Textarea";
import {
    addPostActionCreator,
    updateNewPostActionCreator,
    ActionsType, UserMessageType, StoreType
} from "../../../redux/store";

type MyPostsAddType = {
    newPostText?: string
    //dispatch: (action: ActionsType) => void
    updateNewPostText: (textareaValue: string) => void
    addPostMessage: () => void
    myPosts: UserMessageType[]
    store: StoreType
}

export const MyPostsAdd = (props: MyPostsAddType) => {

  const onAddPostMessage = () => {
      //props.dispatch(addPostActionCreator());
      addPostActionCreator();
  }
  const onChangePostMessage = (event: ChangeEvent<HTMLTextAreaElement>) => {
      let textareaValue = event.currentTarget.value;
      updateNewPostActionCreator(textareaValue);
      /*props.dispatch({type: 'UPDATE-NEW-POST-TEXT', newText: textareaValue});*/

      //let action = updateNewPostActionCreator(textareaValue);
      //props.dispatch(action);
  }

  return (
      <>
        <div className={classes.content__myposts}>
          <div className={classes.content__myposts_title}>
            Мои записи
          </div>
          <div className={classes.content__myposts_add}>
            <textarea className={classes.newMessage}
                      placeholder={'Введите текст...'}
                      value={props.newPostText}
                      onChange={onChangePostMessage}
            />
            {/*<Textarea textareaValue={textareaValue} setTextareaValue={setTextareaValue}/>*/}
          </div>
          <div className={classes.sendButton}>
            {/*<button onClick={addPost}>Add post</button>*/}
            <Button name={'Добавить запись'} callBack={onAddPostMessage}/>
          </div>
        </div>
      </>
  );
}