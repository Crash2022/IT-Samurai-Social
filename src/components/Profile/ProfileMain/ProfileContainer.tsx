import React from "react";
import {Profile} from "./Profile";
import {connect} from "react-redux";
import {RootStateType} from "../../../redux/redux-store";
import {ProfileType, getProfileThunkCreator,
    getUserStatusThunkCreator, updateUserStatusThunkCreator}
    from "../../../redux/profilePage-reducer";
import {withRouter, RouteComponentProps} from "react-router-dom";
//import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";

export type ProfileContainerType =
    MapStateToPropsUserProfileType &
    MapDispatchToPropsUserProfileType &
    RouteComponentProps<PathParamType>;

type MapStateToPropsUserProfileType = {
    profile: null | ProfileType
    status: string
    authorizedUserId: null | string
    isAuth: boolean
}
type MapDispatchToPropsUserProfileType = {
    //setUserProfileAC: (profile: null) => void
    getProfile: (userId: string) => void
    getUserStatus: (userId: string) => void
    updateUserStatus: (userId: string, status: string) => void
}
export type PathParamType = {
    userId: string
}

const mapStateToProps = (state: RootStateType): MapStateToPropsUserProfileType => {
    return {
        profile: state.profilePage.profile,
        status: state.profilePage.status,
        authorizedUserId: state.auth.userId,
        isAuth: state.auth.isAuth
    }
}
const mapDispatchToProps: MapDispatchToPropsUserProfileType = {
    //setUserProfileAC,
    getProfile: getProfileThunkCreator,
    getUserStatus: getUserStatusThunkCreator,
    updateUserStatus: updateUserStatusThunkCreator
}

export class ProfileContainerCompose extends React.Component<ProfileContainerType> {

    componentDidMount() {
        const getUserData = (userId: string) => {
            this.props.getProfile(userId);
            this.props.getUserStatus(userId);
        }

        let userIdFromParams = this.props.match.params.userId;
        let userIdFromState = this.props.authorizedUserId;

        if(userIdFromParams) {
            getUserData(userIdFromParams);
            return;
        }

        if(userIdFromState) {
            getUserData(userIdFromState);
            return;
        }

        this.props.history.push('/login'); // метод для редиректа на нужную страницу
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

export const ProfileContainer = compose<React.ComponentType>(connect(mapStateToProps, mapDispatchToProps),
    //withAuthRedirect,
    withRouter)
(ProfileContainerCompose);