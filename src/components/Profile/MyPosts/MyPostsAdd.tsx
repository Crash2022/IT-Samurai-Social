import React, {useState} from "react";
import classes from './MyPostsAdd.module.css';
import {Button} from "../../../UI/Button";
import {Textarea} from "../../../UI/Textarea";


export const MyPostsAdd = () => {

  const [textareaValue, setTextareaValue] = useState('')

  //let newPostElement = React.createRef();

  const addPost = () => {
      //let textareaValue = newPostElement.current.value;
      console.log('hey');
      const newPost = {}
  }

  return (
      <>
        <div className={classes.content__myposts}>
          <div className={classes.content__myposts_title}>
            My Posts
          </div>
          <div className={classes.content__myposts_add}>
            {/*<textarea className={classes.newMessage} ref={newPostElement}></textarea>*/}
            <Textarea textareaValue={textareaValue} setTextareaValue={setTextareaValue}/>
          </div>
          <div className={classes.sendButton}>
            {/*<button onClick={addPost}>Add post</button>*/}
            <Button name={'Add post'} callBack={addPost}/>
          </div>
        </div>
      </>
  );
}