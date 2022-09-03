import React from "react";
import {MyPostsAdd} from "../MyPosts/MyPostsAdd";
import {MyPostsList} from "./MyPostsList";
import {ActionChangeType, ActionsType, AddPostACType, UserMessageType} from "../../../redux/datastate";

type ProfileType = {
    myposts: UserMessageType[]
    dispatch: (action: ActionsType) => void
    newPostText: string
}

export const MyPosts = (props: ProfileType) => {
  return (
      <>
       <MyPostsAdd
           dispatch={props.dispatch}
           newPostText={props.newPostText}/>
       <MyPostsList myposts={props.myposts}/>
      </>
  );
}