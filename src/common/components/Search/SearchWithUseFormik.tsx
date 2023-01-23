import React from 'react';
import {useFormik} from 'formik';
import styles from './Search.module.css'
import {SuperButton} from "../../UI/Button/SuperButton";
import {UsersSearchFilterType} from "../../../redux/users-reducer";
import {SearchFormSelectType} from "./SearchWithFormik";
import {
    friendFilterValueTypeFromString,
    friendFilterValueTypeToString
} from '../../utils/searchFilterFriendTypesModifier';

type FormikSearchPropsType = {
    findFilteredUserHandler: (filter: UsersSearchFilterType) => void
    clearInput: () => void
    filterValue: string
    filterIsFriend: null | boolean
}

export const SearchWithUseFormik: React.FC<FormikSearchPropsType> = ({findFilteredUserHandler, clearInput, filterValue, filterIsFriend}) => {

    const formik = useFormik({
        initialValues: {
            term: filterValue,
            friend: friendFilterValueTypeToString(filterIsFriend)
        },
        onSubmit: (values: SearchFormSelectType) => {

            const friendFilter: UsersSearchFilterType = {
                term: filterValue,
                friend: friendFilterValueTypeFromString(values.friend)
            }

            findFilteredUserHandler(friendFilter);
        },
        // enableReinitialize: true
    })

    const clearSearchHandler = () => {
        clearInput();
        formik.resetForm();
    }

    return (
        <form onSubmit={ formik.handleSubmit} className={styles.searchMain}>
            <div className={styles.searchInputMain}>
                <input
                    type='search'
                    className={styles.searchInput}
                    placeholder={'Поиск джедаев'}
                    {...formik.getFieldProps('term')}
                />
            </div>
            <div className={styles.searchSelect}>
                <select
                    // name='friend'
                    // onChange={formik.handleChange}
                    {...formik.getFieldProps('friend')}
                >
                    <option value={'null'}>Все джедаи</option>
                    <option value={'true'}>Друзья</option>
                    <option value={'false'}>Незнакомые</option>
                </select>
            </div>
            <div>
                <SuperButton
                    type={'submit'}
                    className={styles.findButton}>
                    Найти
                </SuperButton>
            </div>
            <div className={styles.clearInput} onClick={clearSearchHandler}>
                X
            </div>
        </form>
    );
}