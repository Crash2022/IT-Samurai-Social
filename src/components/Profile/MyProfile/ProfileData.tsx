import React from "react";
import styles from './MyProfile.module.css';
import {ProfileType} from "../../../redux/profilePage-reducer";
import {Preloader} from "../../../UI/Preloader/Preloader";
import {SuperButton} from "../../../UI/Button/SuperButton";

type ProfileDataPropsType = {
    profile: null | ProfileType
    isOwner: boolean
    changeEditMode: () => void
    showProfileContacts: () => void
}

export const ProfileData: React.FC<ProfileDataPropsType> =
    ({profile, isOwner, changeEditMode, showProfileContacts}) => {

    if (!profile) {
        return <Preloader/>
    } else {
        return (
            <>
                {
                    isOwner &&
                    <div>
                        <SuperButton onClick={changeEditMode}>
                            Редактировать
                        </SuperButton>
                    </div>
                }
                <div><b>Имя:</b> {profile.fullName}</div>
                <div><b>Дата рождения:</b> ...</div>
                <div><b>Город:</b> ...</div>
                <div><b>Работа:</b> {profile.lookingForAJobDescription}</div>
                <div><b>Обо мне:</b> {profile.aboutMe}</div>
                <div className={styles.content__info_info_contacts}>
                    <div className={styles.content__info_info_contacts_title}>
                        <b>Контакты:</b>
                    </div>
                    {showProfileContacts()}
                </div>
            </>
        );
    }
}