import React from "react";
import styles from './MyProfile.module.css';
import {ProfileType} from "../../../redux/profilePage-reducer";
import {Contacts} from "./Contacts";
import {Preloader} from "../../../UI/Preloader/Preloader";
import {SuperButton} from "../../../UI/Button/SuperButton";

type ProfileDataPropsType = {
    profile: null | ProfileType
    isOwner: boolean
    activateEditMode: () => void
}

export const ProfileData: React.FC<ProfileDataPropsType> = ({profile, isOwner, activateEditMode}) => {

    const showProfileContacts = () => {
        // проверяем есть ли такие поля в стейте
        if (profile && profile.contacts) {

            return Object.keys(profile.contacts).map(key => {
                return <Contacts key={key}
                                 contactsTitle={key}
                                 contactsValue={profile?.contacts[key]}
                />
            })
        } else {
            return <> </>;
        }
    }

    if (!profile) {
        return <Preloader/>
    } else {
        return (
            <>
                {
                    isOwner &&
                    <div>
                        <SuperButton onClick={activateEditMode}>
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