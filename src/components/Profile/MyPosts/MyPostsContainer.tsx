import React, {Dispatch} from "react";
import {connect} from "react-redux";
import {ActionsType, RootStateType, UserMessageType} from "../../../redux/redux-store";
import {MyPosts} from "./MyPosts";
import {addPostAC, updateNewPostAC} from "../../../redux/myPostPage-reducer";

type MapStateMyPostsPropsType = {
    myPosts: Array<UserMessageType>
    newPostText: string
}
type DispatchMyPostsToPropsType = {
    onAddPostMessage: () => void
    onChangePostMessage: (textareaValue: string) => void
}

export type MyPostsType = MapStateMyPostsPropsType & DispatchMyPostsToPropsType

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