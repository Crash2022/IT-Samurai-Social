import React from "react";
import {MyProfile} from "./MyProfile/MyProfile";
import {MyPosts} from "./MyPosts/MyPosts";
import classes from './Profile.module.css';

export const Profile = () => {
  return (
      <div className={classes.right__profile}>
        <MyProfile />
        <MyPosts />
      </div>
  );
}