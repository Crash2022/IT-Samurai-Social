import React, {Dispatch} from "react";
import {connect} from "react-redux";
import {ActionsType, RootStateType, SidebarFriendsType} from "../../redux/redux-store";
import {NavbarFriends} from "./NavbarFriends";

export type MapStateNavbarToPropsType = {
    friendsData: Array<SidebarFriendsType>
}
export type DispatchNavbarToPropsType = {
    //code here
}
export type NavbarFriendsContainerType = MapStateNavbarToPropsType & DispatchNavbarToPropsType

const mapStateToProps = (state: RootStateType) => {
    return {
        friendsData: state.sidebar.friendsData
    }
}
const DispatchNavbarToProps: DispatchNavbarToPropsType = {
        //code here
}

export default connect(mapStateToProps, DispatchNavbarToProps)(NavbarFriends);