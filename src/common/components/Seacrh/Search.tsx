import React, {ChangeEvent, useState} from "react";
import styles from './Search.module.css'

export const Search = () => {

    const [searchValue, setSearchValue] = useState<string>('')

    const onChangeCallback = (e: ChangeEvent<HTMLInputElement>) => {
        setSearchValue(e.currentTarget.value);
    }

    return (
        <div className={styles.searchMain}>
            <input
                value={searchValue}
                onChange={onChangeCallback}
                className={styles.searchInput}
                placeholder={'Поиск джедаев'}
            />
        </div>
    );
}