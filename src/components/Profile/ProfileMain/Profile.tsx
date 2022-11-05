import React from "react";
import styles from './Profile.module.css';
import {MyProfile} from "../MyProfile/MyProfile";
import {MyPostsContainer} from "../MyPosts/MyPostsContainer";
import {ProfileType} from "../../../redux/profilePage-reducer";

type ProfilePropsType = {
    profile: null | ProfileType
    status: string
    isOwner: boolean
    updateUserStatus: (userId: string, status: string) => void
    updatePhoto: (photoFile: any) => void
}

export const Profile = (props: ProfilePropsType) => {

    return (
        <div className={styles.right__profile}>
            <MyProfile
                profile={props.profile}
                status={props.status}
                isOwner={props.isOwner}
                updateUserStatus={props.updateUserStatus}
                updatePhoto={props.updatePhoto}
            />
            <MyPostsContainer/>
        </div>
    );
}