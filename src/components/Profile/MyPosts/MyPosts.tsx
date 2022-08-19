import React from "react";
import {MyPostsAdd} from "../MyPosts/MyPostsAdd";
import {MyPostsList} from "./MyPostsList";

export const MyPosts = () => {
  return (
      <>
       <MyPostsAdd />
       <MyPostsList />
      </>
  );
}
