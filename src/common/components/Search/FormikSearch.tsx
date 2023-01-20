import React from 'react';
import {useFormik} from 'formik';
import styles from './Search.module.css'
import {SuperButton} from "../../UI/Button/SuperButton";
import {UsersSearchFilterType} from "../../../redux/users-reducer";

type FormikSearchPropsType = {
    findFilteredUserHandler: (filter: UsersSearchFilterType) => void
    clearInput: () => void
}

export const FormikSearch: React.FC<FormikSearchPropsType> = ({findFilteredUserHandler, clearInput}) => {

    const formik = useFormik({
        initialValues: {
            term: '',
            friend: null
        },
        onSubmit: (values) => {
            console.log(values)
            findFilteredUserHandler(values)
        },
        // enableReinitialize: true
    })

    const clearSearchHandler = () => {
        clearInput();
    }

    return (
        <form onSubmit={ formik.handleSubmit} className={styles.searchMain}>
            <div className={styles.searchInputMain}>
                <input
                    type='text'
                    className={styles.searchInput}
                    placeholder={'Поиск джедаев'}
                    {...formik.getFieldProps('term')}
                />
            </div>
            <div className={styles.searchSelect}>
                <select
                    name='friend'
                    onChange={formik.handleChange}
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