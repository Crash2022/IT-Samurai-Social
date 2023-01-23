import React from 'react';
import {Formik, Form, Field} from 'formik';
import styles from './Search.module.css'
import {SuperButton} from "../../UI/Button/SuperButton";
import {UsersSearchFilterType} from "../../../redux/users-reducer";
import {
    friendFilterValueTypeFromString,
    friendFilterValueTypeToString
} from '../../utils/searchFilterFriendTypesModifier';

type OldFormikSearchPropsType = {
    findFilteredUserHandler: (filter: UsersSearchFilterType) => void
    clearInput: () => void
    filterValue: string
    filterIsFriend: null | boolean
}

export type SearchFormSelectType = {
    term: string
    friend: FriendFormType
}
export type FriendFormType = 'null' | 'true' | 'false'

export const SearchWithFormik: React.FC<OldFormikSearchPropsType> = (
    {findFilteredUserHandler, clearInput, filterValue, filterIsFriend}) => {

    const submit = (values: SearchFormSelectType, {setSubmitting, resetForm}: { setSubmitting: (isSubmitting: boolean) => void, resetForm: any }) => {

        const friendFilter: UsersSearchFilterType = {
            term: values.term,
            friend: friendFilterValueTypeFromString(values.friend)
        }

        findFilteredUserHandler(friendFilter);
        setSubmitting(false);
        resetForm(); // нужно перенести в clearInput
    }

    const clearSearchHandler = () => {
        clearInput();
    }

    return (
        <div>
            <Formik
                initialValues={{term: filterValue, friend: friendFilterValueTypeToString(filterIsFriend)}}
                onSubmit={submit}
                // enableReinitialize: true // для useHistory чтобы игнорировал initialValues при первой отрисовке
            >
                {({values, handleChange, isSubmitting}) => (
                    <Form className={styles.searchMain}>
                        <div className={styles.searchInputMain}>
                            <Field
                                type='search'
                                name='term'
                                value={values.term}
                                onChange={handleChange}
                                className={styles.searchInput}
                                placeholder={'Поиск джедаев'}
                            />
                        </div>
                        <div className={styles.searchSelect}>
                            <Field name='friend' as='select' value={values.friend}>
                                <option value={'null'}>Все джедаи</option>
                                <option value={'true'}>Друзья</option>
                                <option value={'false'}>Незнакомые</option>
                            </Field>
                        </div>
                        <div>
                            <SuperButton type='submit' className={styles.findButton} disabled={isSubmitting}>
                                Найти
                            </SuperButton>
                        </div>
                        <div className={styles.clearInput} onClick={clearSearchHandler}>
                            X
                        </div>
                    </Form>
                )}
            </Formik>
        </div>
    );
}