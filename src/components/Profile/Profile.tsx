import React from "react";
import {MyProfile} from "./MyProfile/MyProfile";
import {MyPosts} from "./MyPosts/MyPosts";
import classes from './Profile.module.css';

import {UserMessageType} from "../../redux/datastate";

type ProfileType = {
    myposts: UserMessageType[]
    addPost: (newPostMessage: string)=>void
}

export const Profile = (props: ProfileType) => {
  return (
      <div className={classes.right__profile}>
        <MyProfile />
        <MyPosts myposts={props.myposts} addPost={props.addPost}/>
      </div>
  );
}