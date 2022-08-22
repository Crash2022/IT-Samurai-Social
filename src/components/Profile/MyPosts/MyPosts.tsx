import React from "react";
import {MyPostsAdd} from "../MyPosts/MyPostsAdd";
import {MyPostsList} from "./MyPostsList";

/*import {MyPostsItemPropsType} from "../../../redux/datastate";*/

import {UserMessageType} from "../../../redux/datastate";

type ProfileType = {
    myposts: UserMessageType[]
}

export const MyPosts = (props: ProfileType) => {
  return (
      <>
       <MyPostsAdd />
       <MyPostsList myposts={props.myposts}/>
      </>
  );
}
