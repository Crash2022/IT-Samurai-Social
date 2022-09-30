import React, {Dispatch} from "react";
import {ActionsType, UsersArray} from "../../redux/store";
import {RootStateType} from "../../redux/redux-store";
import {connect} from "react-redux";
import {Users} from "./Users";
import {followAC, setUsersAC, unfollowAC} from "../../redux/users-reducer";

type MapStatePropsType = {
    users: Array<UsersArray>
}
type MapDispatchPropsType = {
    onFollow: (userId: string) => void
    onUnfollow: (userId: string) => void
    onSetUsers: (users: UsersArray) => void
}

export type UsersContainerType = MapStatePropsType & MapDispatchPropsType

const mapStateToProps = (state: RootStateType) => {
    return {
        users: state.usersPage.users
    }
}
const mapDispatchToProps = (dispatch: Dispatch<ActionsType>) => {
    return {
        onFollow: (userId: string) => {
            dispatch(followAC(userId));
        },
        onUnfollow: (userId: string) => {
            dispatch(unfollowAC(userId));
        },
        onSetUsers: (users: UsersArray) => {
            dispatch(setUsersAC(users));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Users);