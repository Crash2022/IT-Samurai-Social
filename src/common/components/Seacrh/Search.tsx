import React, {ChangeEvent} from "react";
import styles from './Search.module.css'
import {SuperButton} from '../../UI/Button/SuperButton';
import {DebounceInput} from 'react-debounce-input';

type SearchPropsType = {
    searchValue: string
    setSearchValue: (e: ChangeEvent<HTMLInputElement>) => void
    clearInput: () => void
    findFilteredUserHandler: (filter: string) => void
}

export const Search: React.FC<SearchPropsType> = React.memo(({searchValue, setSearchValue, clearInput, findFilteredUserHandler}) => {

    const buttonOnClickHandler = () => {
        findFilteredUserHandler(searchValue);
    }

    return (
        <div className={styles.searchMain}>
            <div>
                {/*<input
                    value={searchValue}
                    onChange={setSearchValue}
                    className={styles.searchInput}
                    placeholder={'Поиск джедаев'}
                />*/}
                <DebounceInput
                    className={styles.searchInput}
                    placeholder={'Поиск джедаев'}
                    minLength={2}
                    debounceTimeout={1000}
                    value={searchValue}
                    onChange={e => findFilteredUserHandler(e.target.value)}
                />
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