import React from "react";
import {connect} from "react-redux";
import {RootStateType} from "../../../redux/redux-store";
import {UserMessageType} from "../../../redux/profilePage-reducer";
import {MyPosts} from "./MyPosts";
import {addPostAC} from "../../../redux/profilePage-reducer";
import {compose} from "redux";

type MapStateMyPostsToPropsType = {
    myPosts: Array<UserMessageType>
}
type DispatchMyPostsToPropsType = {
    addPostAC: (newPostText: string) => void
}

export type MyPostsType = MapStateMyPostsToPropsType & DispatchMyPostsToPropsType

const mapStateToProps = (state: RootStateType): MapStateMyPostsToPropsType => {
    return {
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
    addPostAC
}

//export default connect(mapStateToProps, DispatchMyPostsToProps)(MyPosts);
export const MyPostsContainer = compose<React.ComponentType>(connect(mapStateToProps, DispatchMyPostsToProps))(MyPosts);