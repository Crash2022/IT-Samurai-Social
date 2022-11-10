import React from "react";
import {ProfileType} from "../../../redux/profilePage-reducer";
import {SuperButton} from "../../../UI/Button/SuperButton";
import styles from "./MyProfile.module.css";
import {Preloader} from "../../../UI/Preloader/Preloader";

type ProfileDataFormPropsType = {
    profile: null | ProfileType
    activateEditMode: () => void
}

export const ProfileDataForm: React.FC<ProfileDataFormPropsType> = ({profile, activateEditMode}) => {

    if (!profile) {
        return <Preloader/>
    } else {
        return (
            <>
                <div>
                    <SuperButton onClick={activateEditMode}>
                        Сохранить
                    </SuperButton>
                </div>

                <div><b>Имя:</b> {profile.fullName}</div>
                <div><b>Дата рождения:</b> ...</div>
                <div><b>Город:</b> ...</div>
                <div><b>Работа:</b> {profile.lookingForAJobDescription}</div>
                <div><b>Обо мне:</b> {profile.aboutMe}</div>
                <div className={styles.content__info_info_contacts}>
                    <div className={styles.content__info_info_contacts_title}>
                        <b>Контакты:</b>
                    </div>
                    {/*{showProfileContacts()}*/}
                </div>
            </>
        );
    }
}