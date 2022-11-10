import React from "react";
import styles from './MyProfile.module.css';
import {Preloader} from "../../../UI/Preloader/Preloader";
import userAvatar from "../../../assets/images/user_avatar.jpg";
import avatarPhoto from "../../../assets/images/avatar_photo.jpg";
//import {ProfileStatus} from "./ProfileStatus";
import {ProfileType} from "../../../redux/profilePage-reducer";
import {ProfileStatusWithHooks} from "./ProfileStatusWithHooks";
import {Contacts} from "./Contacts";

type MyProfilePropsType = {
    profile: null | ProfileType
    status: string
    isOwner: boolean
    updateUserStatus: (userId: string, status: string) => void
    updatePhoto: (photoFile: any) => void
}

export const MyProfile = (props: MyProfilePropsType) => {

    const onAvatarSelected = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files?.length) {
            props.updatePhoto(event.target.files[0]);
        }
    }

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
                <div className={styles.content__avatar}>
                    <img src={avatarPhoto}
                         alt="profile-avatar">
                    </img>
                </div>

                <div className={styles.content__info}>
                    <div className={styles.content__info_avatar}>
                        <div>
                        <img
                            // можно написать так через псевдо истину-псевдо ложь
                            // src={props.profile.photos.small || userAvatar}
                            src={props.profile.photos.small !== null ? props.profile.photos.small : userAvatar}
                            alt="my-avatar">
                        </img>
                        </div>
                        <div className={styles.content__info_avatarUpload}>
                            {props.isOwner ? <input type="file" onChange={onAvatarSelected}/> : ''}
                        </div>
                    </div>

                    <div className={styles.content__info_info}>
                        <div><b>Имя:</b> {props.profile.fullName}</div>
                        <div><b>Дата рождения:</b> ...</div>
                        <div><b>Город:</b> ...</div>
                        <div><b>Работа:</b> {props.profile.lookingForAJobDescription}</div>
                        <div><b>Обо мне:</b> {props.profile.aboutMe}</div>
                        <div className={styles.content__info_info_contacts}>
                            <span><b>Контакты:</b></span> {showProfileContacts()}
                        </div>

                        {/*<ProfileStatus userId={props.profile.userId}
                                       status={props.status}
                                       updateUserStatus={props.updateUserStatus}
                        />*/}

                        <ProfileStatusWithHooks userId={props.profile.userId}
                                                status={props.status}
                                                updateUserStatus={props.updateUserStatus}
                        />
                    </div>
                </div>
            </>
        );
    }
}