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

type SearchFormSelectType = {
    term: string
    friend: 'null' | 'true' | 'false'
}

export const OldFormikSearch: React.FC<OldFormikSearchPropsType> = ({findFilteredUserHandler, clearInput, filterValue, filterIsFriend}) => {

    const submit = (values: SearchFormSelectType/*, {setSubmitting}: { setSubmitting: (isSubmitting: boolean) => void }*/) => {

        const friendFilter: UsersSearchFilterType = {
            term: values.term,
            friend: values.friend === 'null' ? null : values.friend === 'true'
        }

        findFilteredUserHandler(friendFilter);
        // setSubmitting(false);
    }

    const clearSearchHandler = () => {
        clearInput();
    }

    return (
        <div>
            <Formik
                initialValues={{term: '', friend: 'null'}}
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
                            <Field name='friend' as='select'>
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