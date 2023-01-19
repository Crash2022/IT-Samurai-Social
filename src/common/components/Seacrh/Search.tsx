import React, {ChangeEvent} from 'react';
import styles from './Search.module.css'
import {SuperButton} from '../../UI/Button/SuperButton';
import {DebounceInput} from 'react-debounce-input';
import {UsersSearchFilterType} from '../../../redux/users-reducer';

type SearchPropsType = {
    searchValue: string
    filterIsFriend: null | boolean
    setSearchValue: (e: ChangeEvent<HTMLInputElement>) => void
    setSearchSelect: (e: ChangeEvent<HTMLSelectElement>) => void
    clearInput: () => void
    findFilteredUserHandler: (filter: UsersSearchFilterType) => void
    selectStateValue: string
}

// type SearchSelectType = {
//     term: string
//     friend: 'null' | 'true' | 'false'
// }

export const Search: React.FC<SearchPropsType> = React.memo(
    ({searchValue, filterIsFriend, setSearchValue, setSearchSelect,
         clearInput, findFilteredUserHandler, selectStateValue}) => {

        // const convertStringToBoolean = (values: SearchSelectType) => {
        //     const friendFilter: UsersSearchFilterType = {
        //         term: searchValue,
        //         friend: values.friend === 'null' ? null : values.friend === 'true' ? true : false
        //     }
        //     return friendFilter.friend;
        // }

        const buttonOnClickHandler = () => {
            findFilteredUserHandler({term: searchValue, friend: filterIsFriend});
        }

        return (
            <div className={styles.searchMain}>
                <div className={styles.searchInputMain}>
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
                    <select name={'selectFriend'}
                            defaultValue={selectStateValue}
                            onChange={setSearchSelect}
                    >
                        <option value={'null'}>Все джедаи</option>
                        <option value={'true'}>Друзья</option>
                        <option value={'false'}>Незнакомые</option>
                    </select>
                </div>
                <div>
                    <SuperButton onClick={buttonOnClickHandler} className={styles.findButton}>
                        Найти
                    </SuperButton>
                </div>
                <div className={styles.clearInput} onClick={clearInput}>
                    X
                </div>
            </div>
        );
    })