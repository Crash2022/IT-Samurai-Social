import React, {Dispatch} from "react";
import {ActionsType, addPostAC, updateNewPostAC, UserMessageType} from "../../../redux/store";
import {connect} from "react-redux";
import {RootStateType} from "../../../redux/redux-store";
import {MyPosts} from "./MyPosts";

type MapStatePropsType = {
    myPosts: Array<UserMessageType>
    newPostText: string
}
type MapDispatchPropsType = {
    onAddPostMessage: () => void
    onChangePostMessage: (textareaValue: string) => void
}

export type MyPostsType = MapStatePropsType & MapDispatchPropsType

const mapStateToProps = (state: RootStateType) => {
    return {
        newPostText: state.myPostPage.newPostText,
        myPosts: state.myPostPage.myPosts
    }
}
const mapDispatchToProps = (dispatch: Dispatch<ActionsType>) => {
    return {
        onAddPostMessage: () => {
            dispatch(addPostAC());
        },
        onChangePostMessage: (textareaValue: string) => {
            dispatch(updateNewPostAC(textareaValue));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MyPosts);