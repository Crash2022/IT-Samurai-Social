import React, {ChangeEvent} from "react";
import styles from './Search.module.css'
import {SuperButton} from '../../UI/Button/SuperButton';

type SearchPropsType = {
    searchValue: string
    setSearchValue: (e: ChangeEvent<HTMLInputElement>) => void
    clearInput: () => void
    findFilteredUserHandler: (filter: string) => void
}

export const Search: React.FC<SearchPropsType> = ({searchValue, setSearchValue, clearInput, findFilteredUserHandler}) => {

    // const [searchValue, setSearchValue] = useState<string>('')

    // const onChangeCallback = (e: ChangeEvent<HTMLInputElement>) => {
    //     setSearchValue(e.currentTarget.value);
    // }

    // const clearInput = () => {
    //     setSearchValue('');
    // }

    const buttonOnClickHandler = () => {
        findFilteredUserHandler(searchValue)
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
}