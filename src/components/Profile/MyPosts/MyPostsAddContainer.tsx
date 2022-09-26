import React from "react";
import {ChangeEvent} from "react";
import {MyPostsAdd} from "./MyPostsAdd";

import {
    addPostActionCreator,
    updateNewPostActionCreator,
    ActionsType, UserMessageType, StoreType
} from "../../../redux/store";
import {RootStateType} from "../../../redux/redux-store";

//import {store} from '../../../redux/redux-store';

type MyPostsAddType = {
    //newPostText: string
    dispatch: (action: ActionsType) => void
    //myPosts: UserMessageType[]
    store: StoreType
}

export const MyPostsAddContainer = (props: MyPostsAddType) => {

  let state = props.store.getState();

  const addPostMessage = () => {
      props.store.dispatch(addPostActionCreator());
  }
  const onChangePostMessage = (/*event: ChangeEvent<HTMLTextAreaElement>*/ textareaValue: string) => {
      let action = updateNewPostActionCreator(textareaValue);
      props.store.dispatch(action);
  }

  return (
      <MyPostsAdd updateNewPostText={onChangePostMessage}
                  addPostMessage={addPostMessage}
                  myPosts={state.myPostPage.user1}
                  store={props.store}
                  newPostText={state.myPostPage.newPostText}
                  dispatch={props.dispatch}
      />
  );
}