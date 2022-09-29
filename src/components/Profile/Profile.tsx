import React from "react";
import {MyProfile} from "./MyProfile/MyProfile";
import classes from './Profile.module.css';
import MyPostsContainer from "./MyPosts/MyPostsContainer";

export const Profile = () => {
  return (
      <div className={classes.right__profile}>
        <MyProfile/>
        <MyPostsContainer/>
      </div>
  );
}