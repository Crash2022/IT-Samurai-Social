import React from "react";
import {Profile} from "./Profile";
//import axios from "axios";
import {connect} from "react-redux";
import {RootStateType} from "../../redux/redux-store";
import {ProfileType, getProfileThunkCreator,
    getUserStatusThunkCreator, updateUserStatusThunkCreator}
    from "../../redux/profilePage-reducer";
import {withRouter, RouteComponentProps} from "react-router-dom";
//import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";
//import {usersAPI} from "../../api/api";

export type MapStateUserProfileToPropsType = {
    profile: null | ProfileType
    status: string
    //isAuth: boolean
}
export type DispatchUserProfileToPropsType = {
    //setUserProfileAC: (profile: null) => void
    getProfile: (userId: number) => void
    getUserStatus: (userId: number) => void
    updateUserStatus: (userId: number, status: string) => void
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
        profile: state.profilePage.profile,
        status: state.profilePage.status,
        //isAuth: state.auth.isAuth
    }
}

const DispatchUserProfileToProps: DispatchUserProfileToPropsType = {
    //setUserProfileAC,
    getProfile: getProfileThunkCreator,
    getUserStatus: getUserStatusThunkCreator,
    updateUserStatus: updateUserStatusThunkCreator
}

export class ProfileContainerCompose extends React.Component<ProfileContainerPropsType> {

    componentDidMount() {
        let userId = +this.props.match.params.userId;

        if (!userId) {
            userId = 26141;
        }

        /*axios
            .get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)*/

        /*usersAPI.getProfile(userId)
        .then(data => {
            this.props.setUserProfileAC(data);
        })*/
        this.props.getProfile(userId);
        this.props.getUserStatus(userId);
    }

    render() {
        return (
            <Profile {...this.props}
                     profile={this.props.profile}
                     status={this.props.status}
                     updateUserStatus={this.props.updateUserStatus}
            />
        )
    }
}

// Пошаговая запись без compose (типизация не сделана)
// let WithUrlDataContainerComponent = withRouter(ProfileContainer);
// let WithAuthRedirectComponent = withAuthRedirect(WithUrlDataContainerComponent);
// export default connect(mapStateToProps, DispatchUserProfileToProps)(WithUrlDataContainerComponent);

export const ProfileContainer = compose<React.ComponentType>(connect(mapStateToProps, DispatchUserProfileToProps),
    //withAuthRedirect,
    withRouter)
(ProfileContainerCompose);