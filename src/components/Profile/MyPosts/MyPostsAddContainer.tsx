import React from "react";
//import {ChangeEvent} from "react";
import {MyPostsAdd} from "./MyPostsAdd";

import {
    addPostActionCreator,
    updateNewPostActionCreator,
    ActionsType, StoreType
} from "../../../redux/store";

//import {RootStateType} from "../../../redux/redux-store";
//import {store} from '../../../redux/redux-store';

type MyPostsAddType = {
    dispatch: (action: ActionsType) => void
    store: StoreType
}

export const MyPostsAddContainer = (props: MyPostsAddType) => {

  let state = props.store.getState();

  const addPostMessage = () => {
      props.store.dispatch(addPostActionCreator());
  }
  const onChangePostMessage = (textareaValue: string) => {
      let action = updateNewPostActionCreator(textareaValue);
      props.store.dispatch(action);
  }

  return (
      <MyPostsAdd store={props.store}
                  newPostText={state.myPostPage.newPostText}
                  dispatch={props.dispatch}
      />
  );
}