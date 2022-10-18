import React from "react";
import classes from './Profile.module.css';
import {MyProfile} from "./MyProfile/MyProfile";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";
import {MapStateUserProfileToPropsType, ProfileContainerPropsType} from "./ProfileContainer";
import {ProfileType} from "../../redux/profilePage-reducer";

type ProfilePropsType = {
    profile: null | ProfileType
    status: string
    updateUserStatus: (userId: number, status: string) => void
}

export const Profile = (props: ProfilePropsType) => {

    return (
        <div className={classes.right__profile}>
            <MyProfile
                profile={props.profile}
                status={props.status}
                updateUserStatus={props.updateUserStatus}
            />
            <MyPostsContainer/>
        </div>
    );
}