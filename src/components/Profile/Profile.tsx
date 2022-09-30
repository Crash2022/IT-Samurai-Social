import React from "react";
import classes from './Profile.module.css';
import {MyProfile} from "./MyProfile/MyProfile";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

export const Profile = () => {
  return (
      <div className={classes.right__profile}>
        <MyProfile/>
        <MyPostsContainer/>
      </div>
  );
}