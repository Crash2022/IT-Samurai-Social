import React, {Dispatch} from "react";
import {MyPostsAdd} from "./MyPostsAdd";
import {ActionsType, sendMessageActionCreator, updateNewDialogTextActionCreator} from "../../../redux/store";
import {connect} from "react-redux";
import {RootStateType} from "../../../redux/redux-store";

type MapStatePropsType = {
    newPostText: string
}
type MapDispatchPropsType = {
    onAddPostMessage: () => void
    onChangePostMessage: (textareaValue: string) => void
}

export type MyPostAddType = MapStatePropsType & MapDispatchPropsType

const mapStateToProps = (state: RootStateType) => {
    return {
        newPostText: state.myPostPage.newPostText
    }
}
const mapDispatchToProps = (dispatch: Dispatch<ActionsType>) => {
    return {
        onAddPostMessage: () => {
            dispatch(sendMessageActionCreator());
        },
        onChangePostMessage: (textareaValue: string) => {
            dispatch(updateNewDialogTextActionCreator(textareaValue));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MyPostsAdd);