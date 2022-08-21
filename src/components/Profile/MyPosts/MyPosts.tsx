import React from "react";
import {MyPostsAdd} from "../MyPosts/MyPostsAdd";
import {MyPostsList} from "./MyPostsList";

import {MyPostsItemPropsType} from "../../../redux/datastate";

export const MyPosts = (props: MyPostsItemPropsType) => {
  return (
      <>
       <MyPostsAdd />
       <MyPostsList myposts={props.myposts}/>
      </>
  );
}
