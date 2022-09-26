import React, {ChangeEvent} from "react";
import {MyPostsAdd} from "./MyPostsAdd";
import {addPostActionCreator, updateNewPostActionCreator, ActionsType} from "../../../redux/store";

//import {RootStateType} from "../../../redux/redux-store";
//import {store} from '../../../redux/redux-store';

type MyPostsAddType = {
    dispatch: (action: ActionsType) => void
    newPostText: string
}

export const MyPostsAddContainer = (props: MyPostsAddType) => {

    const onAddPostMessage = () => {
        props.dispatch(addPostActionCreator());
    }

    const onChangePostMessage = (event: ChangeEvent<HTMLTextAreaElement>) => {
        let textareaValue = event.currentTarget.value;
        props.dispatch(updateNewPostActionCreator(textareaValue));

        /*props.dispatch({type: 'UPDATE-NEW-POST-TEXT', newText: textareaValue});*/

        //let action = updateNewPostActionCreator(textareaValue);
        //props.dispatch(action);
    }

    return (
        <MyPostsAdd newPostText={props.newPostText}
                    dispatch={props.dispatch}
                    onAddPostMessage={onAddPostMessage}
                    onChangePostMessage={onChangePostMessage}
        />
    );
}