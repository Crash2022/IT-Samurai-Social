import React from "react";
import {SuperButton} from "../../../common/UI/Button/SuperButton";
import styles from "./MyProfile.module.css";
import style from "../../Login/Login.module.css";
import {Field, InjectedFormProps} from "redux-form";
import {SuperInputText} from "../../../common/UI/Input/SuperInputText";
import {requiredField} from "../../../common/utils/validators";

export type ProfileDataFormPropsType = {
    // profile: ProfileType
    // ReactNode - так как возвращается какая-то логика
    // showProfileContacts: () => ReactNode
    // свойства для изменения профайла
    aboutMe: string
    lookingForAJobDescription: string
    fullName: string
    contacts: any;
}

export const ProfileDataForm: React.FC<InjectedFormProps<ProfileDataFormPropsType>> =
    ({initialValues, handleSubmit, error}) => {

        // деструктуризация пропсов, чтобы не было конфликтов с redux-form
        // const {showProfileContacts} = initialValues;

        return (
            <>
                <form onSubmit={handleSubmit}>
                    <div>
                        <SuperButton type={'submit'} className={styles.saveButton}>
                            Сохранить
                        </SuperButton>
                    </div>

                    <div className={style.formErrorBlock}>
                        {
                            error &&
                            <div className={style.formError}>
                                {error}
                            </div>
                        }
                    </div>

                    {/*<div><b>Имя:</b> {profile.fullName}</div>*/}
                    <div style={{height: '55px'}}>
                        <span><b>Имя:</b></span>
                        <Field
                            placeholder={'Имя'}
                            name={'fullName'}
                            component={SuperInputText}
                            validate={[requiredField]}
                        />
                    </div>

                    {/*<div><b>Работа:</b> {profile.lookingForAJobDescription}</div>*/}
                    <div style={{height: '55px'}}>
                        <span><b>Работа:</b></span>
                        <Field
                            placeholder={'Работа'}
                            name={'lookingForAJobDescription'}
                            component={SuperInputText}
                            validate={[requiredField]}
                        />
                    </div>

                    {/*<div><b>Обо мне:</b> {profile.aboutMe}</div>*/}
                    <div style={{height: '55px'}}>
                        <span><b>Обо мне:</b></span>
                        <Field
                            placeholder={'Обо мне'}
                            name={'aboutMe'}
                            component={SuperInputText}
                            validate={[requiredField]}
                        />
                    </div>

                   {/* <div className={styles.content__info_info_contacts}>
                        <div className={styles.content__info_info_contacts_title}>
                            <b>Контакты:</b>
                        </div>
                        {showProfileContacts && showProfileContacts()}
                    </div>*/}

                    <div className={styles.content__info_info_contacts}>
                        <div className={styles.content__info_info_contacts_title}>
                            <b>Контакты:</b>
                        </div>
                    {
                        Object.entries(initialValues.contacts).map(([key]) => {
                            return (
                                <>
                                    <div>
                                        {key}
                                    </div>
                                    <Field
                                        key={key}
                                        placeholder={`${key}`}
                                        name={`contacts.${key}`}
                                        component={SuperInputText}
                                        validate={[requiredField]}
                                        style={{height: '20px'}}
                                    />
                                </>
                            )
                        })
                    }
                    </div>

                </form>
            </>
        );
    }