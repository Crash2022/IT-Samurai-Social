import React from 'react';
import isLoading from "../../assets/images/avatars/isLoadingBike_02.gif";
import styles from "./Preloader.module.css";

export const Preloader = () => {

    return (
            <div className={styles.isLoading}>
                <img src={isLoading} alt="isLoading"/>
            </div>
    );
}

