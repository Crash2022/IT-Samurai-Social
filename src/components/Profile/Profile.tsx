import React from "react";
import classes from './Profile.module.css';
import {MyProfile} from "./MyProfile/MyProfile";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import {ProfileContainerPropsType} from "./ProfileContainer";

export const Profile = (props: ProfileContainerPropsType) => {
  return (
      <div className={classes.right__profile}>
        <MyProfile/>
        <MyPostsContainer/>
      </div>
  );
}