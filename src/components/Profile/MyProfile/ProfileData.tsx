import React, {ReactNode} from "react";
import styles from './MyProfile.module.css';
import {ProfileType} from "../../../redux/profilePage-reducer";
import {SuperButton} from "../../../common/UI/Button/SuperButton";
import {Contacts} from "./Contacts";

type ProfileDataPropsType = {
    profile: ProfileType
    isOwner: boolean
    changeEditMode: () => void
    //showProfileContacts: () => ReactNode
}

export const ProfileData: React.FC<ProfileDataPropsType> =
    ({profile, isOwner, changeEditMode/*, showProfileContacts*/}) => {

        return (
            <>
                {
                    isOwner &&
                    <div>
                        <SuperButton onClick={changeEditMode} style={{width: '165px'}}>
                            Редактировать
                        </SuperButton>
                    </div>
                }

                <div style={{marginTop: '10px'}}>
                    <b>Имя:</b> {profile.fullName}
                </div>
                <div>
                    <b>Работа:</b> {profile.lookingForAJobDescription}
                </div>
                <div>
                    <b>Обо мне:</b> {profile.aboutMe}
                </div>

                <div className={styles.content__info_info_contacts}>
                    <div className={styles.content__info_info_contacts_title}>
                        <b>Контакты:</b>
                    </div>

                    {/*{showProfileContacts()}*/}

                    {
                        // проверяем есть ли такие поля в стейте
                        profile && profile.contacts
                        ?
                             Object.keys(profile.contacts).map(key => {
                                return <Contacts key={key}
                                                 contactsTitle={key}
                                                 contactsValue={profile.contacts[key]}
                                        />
                                 })
                        :
                             <> </>
                    }

                </div>
            </>
        );
}