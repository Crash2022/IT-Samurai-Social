import React from "react";
import {MyProfile} from "./MyProfile/MyProfile";
import {MyPosts} from "./MyPosts/MyPosts";

export const Profile = () => {
  return (
      <div className="right__profile">
        <MyProfile />
        <MyPosts />
      </div>
  );
}