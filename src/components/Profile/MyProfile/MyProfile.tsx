import React, {useState} from 'react';
import styles from './MyProfile.module.css';
import {Preloader} from '../../../common/UI/Preloader/Preloader';
import userAvatar from '../../../common/assets/images/avatars/user_avatar.jpg';
import avatarPhoto from '../../../common/assets/images/avatars/avatar_photo.jpg';
import {ProfileType} from '../../../redux/profilePage-reducer';
import {ProfileStatusWithHooks} from './ProfileStatusWithHooks';
import {ProfileData} from './ProfileData';
import {reduxForm} from 'redux-form';
import {ProfileDataForm, ProfileDataFormPropsType} from './ProfileDataForm';

type MyProfilePropsType = {
    profile: null | ProfileType
    status: string
    isOwner: boolean
    updateUserStatus: (userId: string, status: string) => void
    updatePhoto: (photoFile: any) => void
    updateUserProfile: (data: FormDataType) => Promise<any> // ???
}

export type FormDataType = {
    aboutMe: string;
    lookingForAJobDescription: string
    fullName: string
}

export const MyProfile = (props: MyProfilePropsType) => {

    const [editMode, setEditMode] = useState<boolean>(false);

    const changeEditMode = () => {
        setEditMode(!editMode);
        //setEditMode(true);
    }

    const onSubmit = (formData: ProfileDataFormPropsType) => {
        props.updateUserProfile(formData).then(() => {
            //setEditMode(false);
            changeEditMode();
        })
    }

    const onAvatarSelected = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files?.length) {
            props.updatePhoto(event.target.files[0]);
        }
    }

    /*const showProfileContacts = () => {
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
    }*/

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
                                alt='my-avatar'>
                            </img>
                        </div>
                        <label className={styles.content__info_avatarUpload}>
                            {
                                props.isOwner
                                    ?
                                    <>
                                        <input type='file' onChange={onAvatarSelected}
                                               className={styles.content__info_avatarUploadInput}
                                        />
                                        <span>Выберите файл</span>
                                    </>
                                    : ''
                            }
                        </label>
                    </div>

                    <div className={styles.content__info_info}>

                        {
                            editMode
                                ?
                                <ProfileDataReduxForm initialValues={{...props.profile}}
                                                      onSubmit={onSubmit}
                                />
                                :
                                <ProfileData profile={props.profile}
                                             isOwner={props.isOwner}
                                             changeEditMode={changeEditMode}
                                    //showProfileContacts={showProfileContacts}
                                />
                        }

                        <ProfileStatusWithHooks userId={props.profile.userId}
                                                status={props.status}
                                                updateUserStatus={props.updateUserStatus}
                                                isOwner={props.isOwner}
                        />

                    </div>
                </div>
            </>
        );
    }
}

export const ProfileDataReduxForm = reduxForm<ProfileDataFormPropsType>({
    form: 'profileDataForm' // уникальное строковое имя для каждой формы
})(ProfileDataForm)