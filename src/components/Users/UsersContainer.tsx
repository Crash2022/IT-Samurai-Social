import React, {Dispatch} from "react";
import {ActionsType, UsersArray} from "../../redux/store";
import {RootStateType} from "../../redux/redux-store";
import {connect} from "react-redux";
//import {Users} from "./Users";
import {followAC, setCurrentPageAC, setUsersAC, unfollowAC} from "../../redux/users-reducer";
import {UsersClassComponent} from "./UsersClassComponent";

export type MapStatePropsType = {
    users: Array<UsersArray>
    pageSize: number
    totalUsersCount: number
    currentPage: number
}
export type MapDispatchPropsType = {
    onFollow: (userId: string) => void
    onUnfollow: (userId: string) => void
    onSetUsers: (users: Array<UsersArray>) => void
    onChangePage: (currentPage: number) => void
}

export type UsersContainerType = MapStatePropsType & MapDispatchPropsType

const mapStateToProps = (state: RootStateType) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage
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
        onSetUsers: (users: Array<UsersArray>) => {
            dispatch(setUsersAC(users));
        },
        onChangePage: (currentPage: number) => {
            dispatch(setCurrentPageAC(currentPage));
        }
    }
}

//export default connect(mapStateToProps, mapDispatchToProps)(Users);
export default connect(mapStateToProps, mapDispatchToProps)(UsersClassComponent);