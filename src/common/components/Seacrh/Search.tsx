import React, {ChangeEvent, useState} from "react";
import styles from './Search.module.css'

type SearchPropsType = {
    searchValue: string
    setSearchValue: (e: ChangeEvent<HTMLInputElement>) => void
    clearInput: () => void
}

export const Search: React.FC<SearchPropsType> = ({searchValue, setSearchValue, clearInput}) => {

    // const [searchValue, setSearchValue] = useState<string>('')

    // const onChangeCallback = (e: ChangeEvent<HTMLInputElement>) => {
    //     setSearchValue(e.currentTarget.value);
    // }

    // const clearInput = () => {
    //     setSearchValue('');
    // }

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
            <div className={styles.clearInput} onClick={clearInput}>
                X
            </div>

        </div>
    );
}