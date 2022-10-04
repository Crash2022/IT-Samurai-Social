import React from "react";
import {connect} from "react-redux";
import {RootStateType, UserMessageType} from "../../../redux/redux-store";
import {MyPosts} from "./MyPosts";
import {addPostAC, updateNewPostAC} from "../../../redux/myPostPage-reducer";

type MapStateMyPostsToPropsType = {
    myPosts: Array<UserMessageType>
    newPostText: string
}
type DispatchMyPostsToPropsType = {
    addPostAC: () => void
    updateNewPostAC: (textareaValue: string) => void
}

export type MyPostsType = MapStateMyPostsToPropsType & DispatchMyPostsToPropsType

const mapStateToProps = (state: RootStateType) => {
    return {
        newPostText: state.myPostPage.newPostText,
        myPosts: state.myPostPage.myPosts
    }
}
/*const mapDispatchToProps = (dispatch: Dispatch<ActionsType>) => {
    return {
        onAddPostMessage: () => {
            dispatch(addPostAC());
        },
        onChangePostMessage: (textareaValue: string) => {
            dispatch(updateNewPostAC(textareaValue));
        }
    }
}*/

const DispatchMyPostsToProps: DispatchMyPostsToPropsType = {
    addPostAC, updateNewPostAC
}

export default connect(mapStateToProps, DispatchMyPostsToProps)(MyPosts);