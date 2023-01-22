import React, {useEffect, useState} from 'react';
import styles from './MyProfile.module.css';
import {Preloader} from '../../../common/UI/Preloader/Preloader';
import userAvatar from '../../../common/assets/images/avatars/user_avatar.jpg';
import avatarPhoto from '../../../common/assets/images/avatars/avatar_photo.jpg';
import {updateUserPhotoTC, updateUserProfileTC} from '../../../redux/profilePage-reducer';
import {ProfileStatusWithHooks} from './ProfileStatusWithHooks';
import {ProfileData} from './ProfileData';
import {reduxForm} from 'redux-form';
import {ProfileDataForm, ProfileDataFormPropsType} from './ProfileDataForm';
import {useAppSelector} from "../../../common/hooks/useAppSelector";
import {selectedProfile, selectedProfileStatus} from "../../../redux/profilePage-selectors";
import {selectedIsAuth, selectedUserId} from "../../../redux/auth-selectors";
import {useAppDispatch} from "../../../common/hooks/useAppDispatch";
import {useSearchParams} from "react-router-dom";

type MyProfilePropsType = {
    // profile: null | ProfileType
    // status: string
    // isOwner: boolean
    // updateUserStatus: (userId: string, status: string) => void
    // updatePhoto: (photoFile: any) => void
    // updateUserProfile: (data: FormDataType) => Promise<any> // ???
}

export type FormDataType = {
    aboutMe: string;
    lookingForAJobDescription: string
    fullName: string
}

export const MyProfileWithHooks = (/*props: MyProfilePropsType*/) => {

    const dispatch = useAppDispatch()

    const profile = useAppSelector(selectedProfile)
    const status = useAppSelector(selectedProfileStatus)
    const userId = useAppSelector(selectedUserId)
    const isAuth = useAppSelector(selectedIsAuth)

    const [searchParams, setSearchParams] = useSearchParams()

    // if (e.currentTarget.value !== '') {
    //     searchParams.set('packName', e.currentTarget.value)
    // } else {
    //     searchParams.delete('packName')
    // }

    const [editMode, setEditMode] = useState<boolean>(false);

    const changeEditMode = () => {
        setEditMode(!editMode);
    }

    const onSubmit = (formData: ProfileDataFormPropsType) => {
        dispatch(updateUserProfileTC(formData));
        changeEditMode();

        // props.updateUserProfile(formData).then(() => {
        //     //setEditMode(false);
        //     changeEditMode();
        // })
    }

    const onAvatarSelected = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files?.length) {
            dispatch(updateUserPhotoTC(event.target.files[0]));
        }
    }

    useEffect(() => {

    }, [])

    if (!profile) {
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
                                src={profile.photos.small !== null ? profile.photos.small : userAvatar}
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
                                <ProfileDataReduxForm initialValues={{...profile}}
                                                      onSubmit={onSubmit}
                                />
                                :
                                <ProfileData profile={profile}
                                             isOwner={props.isOwner}
                                             changeEditMode={changeEditMode}
                                />
                        }

                        <ProfileStatusWithHooks userId={profile.userId}
                                                status={status}
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