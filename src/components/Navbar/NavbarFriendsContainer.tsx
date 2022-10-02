import React, {Dispatch} from "react";
import {connect} from "react-redux";
import {ActionsType, RootStateType, SidebarFriendsType} from "../../redux/redux-store";
import {NavbarFriends} from "./NavbarFriends";

type MapStatePropsType = {
    friendsData: Array<SidebarFriendsType>
}
type MapDispatchPropsType = {
    //code here
}

export type NavbarFriendsContainerType = MapStatePropsType & MapDispatchPropsType

const mapStateToProps = (state: RootStateType) => {
    return {
        friendsData: state.sidebar.friendsData
    }
}
const mapDispatchToProps = (dispatch: Dispatch<ActionsType>) => {
    return {
        //code here
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NavbarFriends);