import React from "react";
import {MyPostsAdd} from "../MyPosts/MyPostsAdd";
import {MyPostsList} from "./MyPostsList";

/*import {MyPostsItemPropsType} from "../../../redux/datastate";*/

import {UserMessageType} from "../../../redux/datastate";

type ProfileType = {
    myposts: UserMessageType[]
    addPost: (newPostMessage: string)=>void
}

export const MyPosts = (props: ProfileType) => {
  return (
      <>
       <MyPostsAdd addPost={props.addPost}/>
       <MyPostsList myposts={props.myposts}/>
      </>
  );
}
