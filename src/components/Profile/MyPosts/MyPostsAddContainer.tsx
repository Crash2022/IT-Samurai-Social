import React from "react";
import {ChangeEvent} from "react";
import {MyPostsAdd} from "./MyPostsAdd";

import {
    addPostActionCreator,
    updateNewPostActionCreator,
    ActionsType, UserMessageType
} from "../../../redux/store";

type MyPostsAddType = {
    newPostText: string
    dispatch: (action: ActionsType) => void
    updateNewPostText: any
    myPosts: UserMessageType[]
}

export const MyPostsAddContainer = (props: MyPostsAddType) => {

  const addPostMessage = () => {
      props.store.dispatch(addPostActionCreator());
  }
  const onChangePostMessage = (event: ChangeEvent<HTMLTextAreaElement>, textareaValue: string) => {
      let action = updateNewPostActionCreator(textareaValue);
      props.store.dispatch(action);
  }

  return (
      <MyPostsAdd updateNewPostText={onChangePostMessage}
                  addPostMessage={addPostMessage}
                  posts={props.myPosts}/>
  );
}