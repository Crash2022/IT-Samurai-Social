import React from "react";
import {Profile} from "./Profile";
//import axios from "axios";
import {connect} from "react-redux";
import {RootStateType} from "../../redux/redux-store";
import {ProfileType, setUserProfileAC} from "../../redux/profilePage-reducer";
import {withRouter, RouteComponentProps} from "react-router-dom";
import {getProfile} from "../../api/api";

export type MapStateUserProfileToPropsType = {
    profile: null | ProfileType
}
export type DispatchUserProfileToPropsType = {
    setUserProfileAC: (profile: null) => void
}

export type PathParamType = {
    userId: string
}

export type ProfileContainerPropsType =
    MapStateUserProfileToPropsType &
    DispatchUserProfileToPropsType &
    RouteComponentProps<PathParamType>;

const mapStateToProps = (state: RootStateType): MapStateUserProfileToPropsType => {
    return {
        profile: state.profilePage.profile
    }
}

const DispatchUserProfileToProps: DispatchUserProfileToPropsType = {
    setUserProfileAC
}

export class ProfileContainer extends React.Component<ProfileContainerPropsType> {

    componentDidMount() {
        let userId = +this.props.match.params.userId;

        if(!userId) {
            userId = 2;
        }

        /*axios
            .get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)*/
            getProfile(userId)
            .then(data => {
                this.props.setUserProfileAC(data);
            })
    }

    render() {
        return (
                <Profile {...this.props} profile={this.props.profile}/>
        )
    }
}

let WithUrlDataContainerComponent = withRouter(ProfileContainer);
export default connect(mapStateToProps, DispatchUserProfileToProps)(WithUrlDataContainerComponent);