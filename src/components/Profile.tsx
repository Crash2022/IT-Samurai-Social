import React from "react";
import MyProfile from "./MyProfile";
import MyPosts from "./MyPosts";

function Profile() {
  return (
      <div className="right__profile">
        <MyProfile />
        <MyPosts />
      </div>
  );
}

export default Profile;
