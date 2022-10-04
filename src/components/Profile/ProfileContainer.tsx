import React from "react";
import {Profile} from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {RootStateType} from "../../redux/redux-store";
import {setUserProfileAC} from "../../redux/myPostPage-reducer";

export type MapStateUserProfileToPropsType = {
    profile: null
}
export type DispatchUserProfileToPropsType = {
    setUserProfileAC: (profile: null) => void
}
export type ProfileContainerPropsType = MapStateUserProfileToPropsType & DispatchUserProfileToPropsType

const mapStateToProps = (state: RootStateType) => {
    return {
        profile: state.myPostPage.profile
    }
}

const DispatchUserProfileToProps: DispatchUserProfileToPropsType = {
    setUserProfileAC
}

export class ProfileContainer extends React.Component<ProfileContainerPropsType> {

    componentDidMount() {
        axios
            .get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
            .then(response => {
                this.props.setUserProfileAC(response.data);
            });
    }

    render() {
        return (
                <Profile {...this.props} profile={this.props.profile}/>
        )
    }
}

export default connect(mapStateToProps, DispatchUserProfileToProps)(ProfileContainer);