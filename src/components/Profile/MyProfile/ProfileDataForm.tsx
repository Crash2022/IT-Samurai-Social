import React, {ReactNode} from "react";
import {SuperButton} from "../../../UI/Button/SuperButton";
import styles from "./MyProfile.module.css";
import {Field, InjectedFormProps} from "redux-form";
import {SuperInputText} from "../../../UI/Input/SuperInputText";
import {requiredField} from "../../../utils/validators/validators";
import {ProfileType} from "../../../redux/profilePage-reducer";

export type ProfileDataFormPropsType = {
    profile: ProfileType
    // ReactNode - так как возвращается какая-то логика
    showProfileContacts: () => ReactNode
    // свойства для изменения профайла
    aboutMe: string
    lookingForAJobDescription: string
    fullName: string
}

export const ProfileDataForm: React.FC<InjectedFormProps<ProfileDataFormPropsType>> =
    ({initialValues, handleSubmit}) => {

        // деструктуризация пропсов, чтобы не было конфликтов с redux-form
        const {profile, showProfileContacts} = initialValues;

        return (
            <>
                <form onSubmit={handleSubmit}>
                    <div>
                        <SuperButton type={'submit'} className={styles.saveButton}>
                            Сохранить
                        </SuperButton>
                    </div>
                    {/*<div><b>Имя:</b> {profile.fullName}</div>*/}
                    <div style={{height: '35px'}}>
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
                    <div style={{height: '35px'}}>
                        <Field
                            placeholder={'Работа'}
                            name={'lookingForAJobDescription'}
                            component={SuperInputText}
                            validate={[requiredField]}
                        />
                    </div>
                    {/*<div><b>Обо мне:</b> {profile.aboutMe}</div>*/}
                    <div style={{height: '35px'}}>
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
                        {showProfileContacts!()}
                    </div>
                </form>
            </>
        );
    }