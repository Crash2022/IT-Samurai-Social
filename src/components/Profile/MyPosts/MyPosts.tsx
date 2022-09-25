import React from "react";
import {MyPostsAdd} from "../MyPosts/MyPostsAdd";
import {MyPostsList} from "./MyPostsList";
import {ActionsType, UserMessageType} from "../../../redux/store";
import {MyPostsAddContainer} from "./MyPostsAddContainer";

type ProfileType = {
    myPцosts: UserMessageType[]
    dispatch: (action: ActionsType) => void
    newPostText: string
}

export const MyPosts = (props: ProfileType) => {
  return (
      <>
       <MyPostsAddContainer
           dispatch={props.dispatch}
           newPostText={props.newPostText}/>
       <MyPostsList myPosts={props.myPosts}/>
      </>
  );
}