import React, {useEffect, useState} from 'react';
import styles from './MyProfile.module.css';
import {Preloader} from '../../../common/UI/Preloader/Preloader';
import userAvatar from '../../../common/assets/images/avatars/user_avatar.jpg';
import avatarPhoto from '../../../common/assets/images/avatars/avatar_photo.jpg';
import {
    getProfileTC,
    getUserStatusTC,
    updateUserPhotoTC,
    updateUserProfileTC
} from '../../../redux/profilePage-reducer';
import {ProfileStatusWithHooks} from './ProfileStatusWithHooks';
import {ProfileData} from './ProfileData';
import {reduxForm} from 'redux-form';
import {ProfileDataForm, ProfileDataFormPropsType} from './ProfileDataForm';
import {useAppSelector} from "../../../common/hooks/useAppSelector";
import {selectedProfile, selectedProfileStatus} from "../../../redux/profilePage-selectors";
import {selectedAuthUserId, selectedIsAuth} from "../../../redux/auth-selectors";
import {useAppDispatch} from "../../../common/hooks/useAppDispatch";
import {useNavigate, useParams} from "react-router-dom";

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
    const navigate = useNavigate()

    const profile = useAppSelector(selectedProfile)
    const status = useAppSelector(selectedProfileStatus)
    const authUserId = useAppSelector(selectedAuthUserId)

    const [editMode, setEditMode] = useState<boolean>(false);

    const params = useParams<'userId'>();
    const userId = params.userId;
    console.log(params)
    const changeEditMode = () => {
        setEditMode(!editMode);
    }

    const onSubmit = (formData: ProfileDataFormPropsType) => {
        dispatch(updateUserProfileTC(formData)).then(() => {changeEditMode()});
    }

    const onAvatarSelected = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files?.length) {
            dispatch(updateUserPhotoTC(event.target.files[0]));
        }
    }

    const refreshProfile = () => {
        const getUserData = (userId: string) => {
            dispatch(getProfileTC(userId));
            dispatch(getUserStatusTC(userId));
        }

        let userIdFromParams = userId;
        let userIdFromState = authUserId;

        if(userIdFromParams) {
            getUserData(userIdFromParams);
            return;
        }

        if(userIdFromState) {
            getUserData(userIdFromState);
            return;
        }

        navigate('/login')
    }

    useEffect(() => {
        refreshProfile();
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
                                userId
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
                                             isOwner={!userId}
                                             changeEditMode={changeEditMode}
                                />
                        }

                        <ProfileStatusWithHooks userId={profile.userId}
                                                status={status}
                                                isOwner={!userId}
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