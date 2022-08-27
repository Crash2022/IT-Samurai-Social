import React from "react";
import {useState , ChangeEvent} from "react";
import classes from './MyPostsAdd.module.css';
import {Button} from "../../../UI/Button";
//import {UserMessageType} from "../../../redux/datastate";
import {Textarea} from "../../../UI/Textarea";

type MyPostsAddType = {
    addPost: () => void
    newPostText: string
    updateNewPostText: (newText: string) => void
}

export const MyPostsAdd = (props: MyPostsAddType) => {

  //const [textareaValue, setTextareaValue] = useState('')

  let newPostElement: any = React.createRef();
  const addPostMessage = () => {
      //let textareaValue = newPostElement.current.value;
      props.addPost();
      //textareaValue.current.value = '';
      //props.updateNewPostText('');
      //setTextareaValue('');
  }
  const onChangePostMessage = () => {
      let textareaValue = newPostElement.current.value;
      props.updateNewPostText(textareaValue);
    }

  return (
      <>
        <div className={classes.content__myposts}>
          <div className={classes.content__myposts_title}>
            My Posts
          </div>
          <div className={classes.content__myposts_add}>
            <textarea className={classes.newMessage}
                      value={props.newPostText}
                      onChange={onChangePostMessage}
                      ref={newPostElement}
                      /*onChange={(event: ChangeEvent<HTMLTextAreaElement>) => setTextareaValue(event.currentTarget.value)}*//>
            {/*<Textarea textareaValue={textareaValue} setTextareaValue={setTextareaValue}/>*/}
          </div>
          <div className={classes.sendButton}>
            {/*<button onClick={addPost}>Add post</button>*/}
            <Button name={'Add post'} callBack={addPostMessage}/>
          </div>
        </div>
      </>
  );
}