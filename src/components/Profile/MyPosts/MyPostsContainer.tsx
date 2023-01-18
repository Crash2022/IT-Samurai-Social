import React from "react";
import {connect} from "react-redux";
import {RootStateType} from "../../../redux/redux-store";
import {UserMessageType} from "../../../redux/profilePage-reducer";
import {MyPosts} from "./MyPosts";
import {addPostAC} from "../../../redux/profilePage-reducer";
import {compose} from "redux";
import {myPostsSelector} from '../../../redux/profilePage-selectors';

export type MyPostsContainerType = MapStateToPropsMyPostsType & MapDispatchToPropsMyPostsType;

type MapStateToPropsMyPostsType = {
    myPosts: Array<UserMessageType>
}
type MapDispatchToPropsMyPostsType = {
    addPostAC: (newPostText: string) => void
}

const mapStateToProps = (state: RootStateType): MapStateToPropsMyPostsType => {
    return {
        myPosts: myPostsSelector(state)
    }
}

const mapDispatchToProps: MapDispatchToPropsMyPostsType = {
    addPostAC
}

//export default connect(mapStateToProps, DispatchMyPostsToProps)(MyPosts);
export const MyPostsContainer = compose<React.ComponentType>(connect(mapStateToProps, mapDispatchToProps))(MyPosts);