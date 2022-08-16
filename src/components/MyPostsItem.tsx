import React from "react";
import classes from './MyPostsItem.module.css';

type MyPostsItemPropsType = {
  message: Array<UserMessageType>
}

type UserMessageType = {
  avatar: string,
  nickname: string,
  postmessage: string,
  likes: number,
  dislikes: number
}

export const MyPostsItem = (props: MyPostsItemPropsType) => {
  return (
      <>
        <div className={classes.postitem}>
          <div className={classes.avatar}>
            <img src={props.message[0].avatar}></img>
          </div>
          <div className={classes.userinfo}>
            <div className={classes.nickname}>
              {props.message[0].nickname}
            </div>
            <div className={classes.message}>
              {props.message[0].postmessage}
            </div>
          </div>
        </div>

        <div className={classes.counter}>
          <div className={classes.likes}>
            <div>Likes: {props.message[0].likes}</div>
          </div>
          <div className={classes.dislikes}>
            <div>Dislikes: {props.message[0].dislikes}</div>
          </div>
        </div>
      </>
  );
}