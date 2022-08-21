import React from "react";
import {MyProfile} from "./MyProfile/MyProfile";
import {MyPosts} from "./MyPosts/MyPosts";
import classes from './Profile.module.css';

import {MyPostsItemPropsType} from "../../index";

export const Profile = (props: MyPostsItemPropsType) => {
  return (
      <div className={classes.right__profile}>
        <MyProfile />
        <MyPosts myposts={props.myposts}/>
      </div>
  );
}