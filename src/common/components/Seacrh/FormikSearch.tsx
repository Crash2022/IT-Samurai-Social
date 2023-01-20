import React from 'react';
import {useFormik} from 'formik';
import styles from './Search.module.css'
import {SuperButton} from "../../UI/Button/SuperButton";
import {useAppDispatch} from "../../hooks/useAppDispatch";
import {setFilterAC, UsersSearchFilterType} from "../../../redux/users-reducer";

export const FormikSearch = () => {

    const dispatch = useAppDispatch();

    const formik = useFormik({
        initialValues: {
            term: '',
            friend: false
        },
        onSubmit: (values: UsersSearchFilterType) => {
            // debugger
            // alert(JSON.stringify(values));

            // if (values.friend === null) {
            //     return 'null'
            // } else if (values.friend === true) {
            //     return 'true'
            // } else {
            //     return 'false'
            // }

            // values.friend === 'null' ? null : values.friend === 'true' ? true : false

            dispatch(setFilterAC(values))
        }
    })

    const clearSearchHandler = () => {
        // debugger
        dispatch(setFilterAC({term: '', friend: null}))
    }

    return (
        <form onSubmit={formik.handleSubmit} className={styles.searchMain}>
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