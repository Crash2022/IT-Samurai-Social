import React from "react";
import {MyProfile} from "./MyProfile";
import {MyPosts} from "./MyPosts";

export const Profile = () => {
  return (
      <div className="right__profile">
        <MyProfile />
        <MyPosts />
      </div>
  );
}