import React from "react";
import {ProfileType} from "../../../redux/profilePage-reducer";
import {SuperButton} from "../../../UI/Button/SuperButton";
import styles from "./MyProfile.module.css";
import {Preloader} from "../../../UI/Preloader/Preloader";
import {Field, InjectedFormProps} from "redux-form";
import {SuperInputText} from "../../../UI/Input/SuperInputText";
import {requiredField} from "../../../utils/validators/validators";

export type ProfileDataFormPropsType = {
    profile: null | ProfileType
    changeEditMode: () => void
    showProfileContacts: () => void
}

export const ProfileDataForm: React.FC<InjectedFormProps<ProfileDataFormPropsType>> =
    ({profile, changeEditMode, showProfileContacts, handleSubmit}) => {

        if (!profile) {
            return <Preloader/>
        } else {
            return (
                <>
                    <form onSubmit={handleSubmit}>
                        <div>
                            <SuperButton onClick={changeEditMode}>
                                Сохранить
                            </SuperButton>
                        </div>
                        {/*<div><b>Имя:</b> {profile.fullName}</div>*/}
                        <div>
                            <Field
                                placeholder={'Имя'}
                                name={'fullName'}
                                component={SuperInputText}
                                validate={[requiredField]}
                            />
                        </div>
                        {/*<div><b>Дата рождения:</b> ...</div>*/}
                        {/*<div><b>Город:</b> ...</div>*/}
                        {/*<div><b>Работа:</b> {profile.lookingForAJobDescription}</div>*/}
                        <div>
                            <Field
                                placeholder={'Работа'}
                                name={'lookingForAJobDescription'}
                                component={SuperInputText}
                                validate={[requiredField]}
                            />
                        </div>
                        {/*<div><b>Обо мне:</b> {profile.aboutMe}</div>*/}
                        <div>
                            <Field
                                placeholder={'Обо мне'}
                                name={'aboutMe'}
                                component={SuperInputText}
                                validate={[requiredField]}
                            />
                        </div>

                        <div className={styles.content__info_info_contacts}>
                            <div className={styles.content__info_info_contacts_title}>
                                <b>Контакты:</b>
                            </div>
                            {showProfileContacts()}
                        </div>
                    </form>
                </>
            );
        }
    }