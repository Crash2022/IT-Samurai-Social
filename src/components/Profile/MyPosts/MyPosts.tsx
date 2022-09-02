import React from "react";
import {MyPostsAdd} from "../MyPosts/MyPostsAdd";
import {MyPostsList} from "./MyPostsList";
import {ActionChangeType, ActionType, UserMessageType} from "../../../redux/datastate";

type ProfileType = {
    myposts: UserMessageType[]
    /*addPost: ()=>void
    updateNewPostText: (newText: string) => void*/
    dispatch: (action: ActionType | ActionChangeType) => void
    newPostText: string
}

export const MyPosts = (props: ProfileType) => {
  return (
      <>
       <MyPostsAdd
           /*addPost={props.addPost}
           updateNewPostText={props.updateNewPostText}*/
           dispatch={props.dispatch}
           newPostText={props.newPostText}/>
       <MyPostsList myposts={props.myposts}/>
      </>
  );
}
