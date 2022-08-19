import React from "react";
import classes from './MyPostsAdd.module.css';

export const MyPostsAdd = () => {
  return (
      <>
        <div className={classes.content__myposts}>
          <div className={classes.content__myposts_title}>
            My Posts
          </div>
          <div className={classes.content__myposts_add}>
            <textarea className={classes.newMessage}></textarea>
          </div>
          <div className={classes.sendButton}>
            <button>Add post</button>
          </div>
        </div>
      </>
  );
}