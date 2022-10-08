import React from "react";
import {connect} from "react-redux";
import {RootStateType} from "../../redux/redux-store";
import {SidebarFriendsType} from "../../redux/sidebar-reducer";
import {NavbarFriends} from "./NavbarFriends";

export type MapStateNavbarToPropsType = {
    friendsData: Array<SidebarFriendsType>
}
export type DispatchNavbarToPropsType = {
    //code here
}
export type NavbarFriendsContainerType = MapStateNavbarToPropsType & DispatchNavbarToPropsType

const mapStateToProps = (state: RootStateType): MapStateNavbarToPropsType => {
    return {
        friendsData: state.sidebar.friendsData
    }
}
const DispatchNavbarToProps: DispatchNavbarToPropsType = {
        //code here
}

export default connect(mapStateToProps, DispatchNavbarToProps)(NavbarFriends);