import React, {useState}, {ChangeEvent} from "react";
import classes from './MyPostsAdd.module.css';
import {Button} from "../../../UI/Button";
//import {UserMessageType} from "../../../redux/datastate";
/*import {Textarea} from "../../../UI/Textarea";*/

type MyPostsAddType = {
    addPost: (newPostMessage: string)=>void
}

export const MyPostsAdd = (props: MyPostsAddType) => {

  const [textareaValue, setTextareaValue] = useState('')

  // let newPostElement = React.createRef();
  const addPostMessage = () => {
      // let textareaValue = newPostElement.current.value;
      //console.log('hey');
      props.addPost(textareaValue);
      setTextareaValue('');
  }

  return (
      <>
        <div className={classes.content__myposts}>
          <div className={classes.content__myposts_title}>
            My Posts
          </div>
          <div className={classes.content__myposts_add}>
            <textarea className={classes.newMessage}
                      value={textareaValue}
                      onChange={(event: ChangeEvent<HTMLTextAreaElement>) => setTextareaValue(event)}></textarea>
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