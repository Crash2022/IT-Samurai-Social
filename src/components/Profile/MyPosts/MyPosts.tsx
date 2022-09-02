import React from "react";
import {MyPostsAdd} from "../MyPosts/MyPostsAdd";
import {MyPostsList} from "./MyPostsList";
import {UserMessageType} from "../../../redux/datastate";

type ProfileType = {
    myposts: UserMessageType[]
    /*addPost: ()=>void
    updateNewPostText: (newText: string) => void*/
    dispatch: any
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
