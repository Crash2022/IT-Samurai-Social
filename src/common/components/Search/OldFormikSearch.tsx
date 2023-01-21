import React from 'react';
import {Formik, Form, Field} from 'formik';
import styles from './Search.module.css'
import {SuperButton} from "../../UI/Button/SuperButton";
import {UsersSearchFilterType} from "../../../redux/users-reducer";

type OldFormikSearchPropsType = {
    findFilteredUserHandler: (filter: UsersSearchFilterType) => void
    clearInput: () => void
    filterValue: string
    filterIsFriend: null | boolean
}

export type SearchFormSelectType = {
    term: string
    friend: 'null' | 'true' | 'false'
}

export const OldFormikSearch: React.FC<OldFormikSearchPropsType> = (
    {findFilteredUserHandler, clearInput, filterValue, filterIsFriend}) => {

    const submit = (values: SearchFormSelectType, {setSubmitting, resetForm}: { setSubmitting: (isSubmitting: boolean) => void, resetForm: any }) => {

        const friendFilter: UsersSearchFilterType = {
            term: values.term,
            friend: values.friend === 'null' ? null : values.friend === 'true' ? true : false
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
                initialValues={{term: filterValue, friend: filterIsFriend === null ? 'null' : filterIsFriend === true ? 'true' : 'false'}}
                onSubmit={submit}
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