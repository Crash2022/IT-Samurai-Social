import React from "react";
import {useState , ChangeEvent} from "react";
import classes from './MyPostsAdd.module.css';
import {Button} from "../../../UI/Button";
//import {Textarea} from "../../../UI/Textarea";
import {ActionType, ActionChangeType, addPostActionCreator, updateNewPostActionCreator} from "../../../redux/datastate";

type MyPostsAddType = {
    /*addPost: () => void
    updateNewPostText: (newText: string) => void*/
    newPostText: string
    /*dispatch: (action: ActionType | ActionChangeType) => void*/
    dispatch: (action: any) => void
}

export const MyPostsAdd = (props: MyPostsAddType) => {

  //const [textareaValue, setTextareaValue] = useState('')

  let newPostElement: any = React.createRef();
  const addPostMessage = () => {
      props.dispatch(addPostActionCreator());
  }
  const onChangePostMessage = (event: ChangeEvent<HTMLTextAreaElement>) => {
      let textareaValue = event.currentTarget.value;
      /*props.dispatch({type: 'UPDATE-NEW-POST-TEXT', newText: textareaValue});*/
      let action = updateNewPostActionCreator(textareaValue);
      props.dispatch(action);
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
                      /*onChange={(event: ChangeEvent<HTMLTextAreaElement>) => setTextareaValue(event.currentTarget.value)}*//>
            {/*<Textarea textareaValue={textareaValue} setTextareaValue={setTextareaValue}/>*/}
          </div>
          <div className={classes.sendButton}>
            {/*<button onClick={addPost}>Add post</button>*/}
            <Button name={'Добавить запись'} callBack={addPostMessage}/>
          </div>
        </div>
      </>
  );
}