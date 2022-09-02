import React from "react";
import {MyProfile} from "./MyProfile/MyProfile";
import {MyPosts} from "./MyPosts/MyPosts";
import classes from './Profile.module.css';
import {ActionType, ActionChangeType, UserMessageType, store} from "../../redux/datastate";

type ProfileType = {
    myposts: UserMessageType[]
    /*addPost: ()=>void
    updateNewPostText: (newText: string) => void*/
    dispatch: (action: ActionType | ActionChangeType) => void
    newPostText: string
}

export const Profile = (props: ProfileType) => {
  return (
      <div className={classes.right__profile}>
        <MyProfile />
        <MyPosts
            myposts={props.myposts}
            /*addPost={props.addPost}
            updateNewPostText={props.updateNewPostText}*/
            dispatch={props.dispatch}
            newPostText={props.newPostText}/>
      </div>
  );
}