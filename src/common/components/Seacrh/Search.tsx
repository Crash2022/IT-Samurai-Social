import React, {ChangeEvent} from 'react';
import styles from './Search.module.css'
import {SuperButton} from '../../UI/Button/SuperButton';
import {DebounceInput} from 'react-debounce-input';
import SuperSelect from '../../UI/SuperSelect/SuperSelect';
import {UsersSearchFilterType} from '../../../redux/users-reducer';

type SearchPropsType = {
    searchValue: string
    setSearchValue: (e: ChangeEvent<HTMLInputElement>) => void
    clearInput: () => void
    findFilteredUserHandler: (filter: UsersSearchFilterType) => void
    setUserFilter: (filter: UsersSearchFilterType) => void
    filterIsFriend: null | boolean
}

// type SearchSelectType = {
//     term: string
//     friend: 'null' | 'true' | 'false'
// }

export const Search: React.FC<SearchPropsType> = React.memo(
    ({searchValue, setSearchValue, clearInput, findFilteredUserHandler, setUserFilter, filterIsFriend}) => {

        // const convertStringToBoolean = (values: SearchSelectType) => {
        //     const friendFilter: UsersSearchFilterType = {
        //         term: searchValue,
        //         friend: values.friend === 'null' ? null : values.friend === 'true' ? true : false
        //     }
        //     return friendFilter.friend;
        // }

        const buttonOnClickHandler = (/*e: ChangeEvent<HTMLSelectElement>, values: SearchSelectType*/) => {
            // const friendFilter: UsersSearchFilterType = {
            //     term: searchValue,
            //     friend: values.friend === 'null' ? null : values.friend === 'true' ? true : false
            // }

            findFilteredUserHandler({term: searchValue, friend: filterIsFriend});
        }

        const onChangeCallback = (e: ChangeEvent<HTMLSelectElement>) => {
            // @ts-ignore
            setUserFilter({term: searchValue, friend: e.currentTarget.value})
            console.log(searchValue, e.currentTarget.value)
        }

        return (
            <div className={styles.searchMain}>
                <div>
                    <input
                        value={searchValue}
                        onChange={setSearchValue}
                        className={styles.searchInput}
                        placeholder={'Поиск джедаев'}
                    />
                    {/*<DebounceInput
                    className={styles.searchInput}
                    placeholder={'Поиск джедаев'}
                    minLength={2}
                    debounceTimeout={1000}
                    value={searchValue}
                    onChange={e => findFilteredUserHandler(e.target.value)}
                />*/}
                </div>
                <div className={styles.searchSelect}>
                    <select onChange={onChangeCallback}>
                        <option value={'null'}>Все</option>
                        <option value={'true'}>Друзья</option>
                        <option value={'false'}>Недруги</option>
                    </select>
                    {/*<SuperSelect options={valueArray}
                             value={value}
                             onChangeOption={onChangeOption}
                >

                </SuperSelect>*/}
                </div>
                <div>
                    <SuperButton onClick={buttonOnClickHandler} className={styles.findButton}>
                        Найти
                    </SuperButton>
                </div>
                {/*<div>
                    <SuperButton onClick={buttonOnClickHandler} className={styles.findButton}>
                        Найти
                    </SuperButton>
                </div>*/}
                <div className={styles.clearInput} onClick={clearInput}>
                    X
                </div>

            </div>
        );
    })