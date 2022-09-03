import React from "react";
import {MyProfile} from "./MyProfile/MyProfile";
import {MyPosts} from "./MyPosts/MyPosts";
import classes from './Profile.module.css';
import {AddPostACType, ActionChangeType, UserMessageType, store, ActionsType} from "../../redux/datastate";

type ProfileType = {
    myposts: UserMessageType[]
    dispatch: (action: ActionsType) => void
    newPostText: string
}

export const Profile = (props: ProfileType) => {
  return (
      <div className={classes.right__profile}>
        <MyProfile />
        <MyPosts
            myposts={props.myposts}
            dispatch={props.dispatch}
            newPostText={props.newPostText}/>
      </div>
  );
}