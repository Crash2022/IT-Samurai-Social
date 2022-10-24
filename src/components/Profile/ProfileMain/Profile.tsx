import React from "react";
import styles from './Profile.module.css';
import {MyProfile} from "../MyProfile/MyProfile";
import {MyPostsContainer} from "../MyPosts/MyPostsContainer";
import {ProfileType} from "../../../redux/profilePage-reducer";

type ProfilePropsType = {
    profile: null | ProfileType
    status: string
    updateUserStatus: (userId: string, status: string) => void
}

export const Profile = (props: ProfilePropsType) => {

    return (
        <div className={styles.right__profile}>
            <MyProfile
                profile={props.profile}
                status={props.status}
                updateUserStatus={props.updateUserStatus}
            />
            <MyPostsContainer/>
        </div>
    );
}