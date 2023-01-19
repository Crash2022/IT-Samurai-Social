import React from "react";
import {connect} from "react-redux";
import {RootStateType} from "../../redux/redux-store";
import {NavbarFriends} from "./NavbarFriends";

export type NavbarFriendsContainerType = MapStateNavbarToPropsType & DispatchNavbarToPropsType

type MapStateNavbarToPropsType = {
    //code here
}
type DispatchNavbarToPropsType = {
    //code here
}

const mapStateToProps = (state: RootStateType): MapStateNavbarToPropsType => {
    return {
        //code here
    }
}
const mapDispatchToProps: DispatchNavbarToPropsType = {
        //code here
}

export default connect(mapStateToProps, mapDispatchToProps)(NavbarFriends);