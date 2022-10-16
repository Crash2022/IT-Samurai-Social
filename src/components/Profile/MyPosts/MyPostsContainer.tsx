import React from "react";
import {connect} from "react-redux";
import {RootStateType} from "../../../redux/redux-store";
import {UserMessageType} from "../../../redux/profilePage-reducer";
import {MyPosts} from "./MyPosts";
import {addPostAC, updateNewPostAC} from "../../../redux/profilePage-reducer";
import {compose} from "redux";

type MapStateMyPostsToPropsType = {
    myPosts: Array<UserMessageType>
    newPostText: string
}
type DispatchMyPostsToPropsType = {
    addPostAC: () => void
    updateNewPostAC: (textareaValue: string) => void
}

export type MyPostsType = MapStateMyPostsToPropsType & DispatchMyPostsToPropsType

const mapStateToProps = (state: RootStateType): MapStateMyPostsToPropsType => {
    return {
        newPostText: state.profilePage.newPostText,
        myPosts: state.profilePage.myPosts
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

//export default connect(mapStateToProps, DispatchMyPostsToProps)(MyPosts);
export const MyPostsContainer = compose<React.ComponentType>(connect(mapStateToProps, DispatchMyPostsToProps))(MyPosts);