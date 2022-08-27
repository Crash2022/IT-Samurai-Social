import React from "react";
import {MyPostsAdd} from "../MyPosts/MyPostsAdd";
import {MyPostsList} from "./MyPostsList";
import {UserMessageType} from "../../../redux/datastate";

type ProfileType = {
    myposts: UserMessageType[]
    addPost: ()=>void
    newPostText: string
    updateNewPostText: (newText: string) => void
}

export const MyPosts = (props: ProfileType) => {
  return (
      <>
       <MyPostsAdd
           addPost={props.addPost}
           newPostText={props.newPostText}
           updateNewPostText={props.updateNewPostText}/>
       <MyPostsList myposts={props.myposts}/>
      </>
  );
}
