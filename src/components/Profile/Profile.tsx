import React from "react";
import {MyProfile} from "./MyProfile/MyProfile";
import {MyPosts} from "./MyPosts/MyPosts";
import classes from './Profile.module.css';
import {UserMessageType, ActionsType} from "../../redux/store";

type ProfileType = {
    myPosts: UserMessageType[]
    dispatch: (action: ActionsType) => void
    newPostText: string
}

export const Profile = (props: ProfileType) => {
  return (
      <div className={classes.right__profile}>
        <MyProfile />
        <MyPosts
            myPosts={props.myPosts}
            dispatch={props.dispatch}
            newPostText={props.newPostText}/>
      </div>
  );
}