import React from "react";
import {connect} from "react-redux";
import {RootStateType} from "../../redux/redux-store";
import {NavbarFriends} from "./NavbarFriends";
import {UsersArray} from "../../redux/users-reducer";

export type MapStateNavbarToPropsType = {
    // friendsData: Array<SidebarFriendsType>
    followedUsers: Array<UsersArray>
}
export type DispatchNavbarToPropsType = {
    //code here
}
export type NavbarFriendsContainerType = MapStateNavbarToPropsType & DispatchNavbarToPropsType

const mapStateToProps = (state: RootStateType): MapStateNavbarToPropsType => {
    return {
        // friendsData: state.sidebar.friendsData
        followedUsers: state.usersPage.users
    }
}
const DispatchNavbarToProps: DispatchNavbarToPropsType = {
        //code here
}

export default connect(mapStateToProps, DispatchNavbarToProps)(NavbarFriends);