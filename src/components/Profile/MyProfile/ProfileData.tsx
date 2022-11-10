import React from "react";
import styles from './MyProfile.module.css';
import {ProfileType} from "../../../redux/profilePage-reducer";
import {Contacts} from "./Contacts";
import {Preloader} from "../../../UI/Preloader/Preloader";

type ProfileDataPropsType = {
    profile: null | ProfileType
}

export const ProfileData = (props: ProfileDataPropsType) => {

    const showProfileContacts = () => {
        // проверяем есть ли такие поля в стейте
        if (props.profile && props.profile.contacts) {

            return Object.keys(props.profile.contacts).map(key => {
                return <Contacts key={key}
                                 contactsTitle={key}
                                 contactsValue={props.profile?.contacts[key]}
                />
            })
        } else {
            return <> </>;
        }
    }

    if (!props.profile) {
        return <Preloader/>
    } else {
        return (
            <>
                <div><b>Имя:</b> {props.profile.fullName}</div>
                <div><b>Дата рождения:</b> ...</div>
                <div><b>Город:</b> ...</div>
                <div><b>Работа:</b> {props.profile.lookingForAJobDescription}</div>
                <div><b>Обо мне:</b> {props.profile.aboutMe}</div>
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