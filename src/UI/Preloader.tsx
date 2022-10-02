import React from 'react';
import isLoading from "../assets/images/isLoadingBike_02.gif";
import classes from "../components/Users/Users.module.css";
import styles from "./Preloader.module.css";

export const Preloader = () => {

    return (
        <div className={classes.usersWrapper}>
            <div className={styles.isLoading}>
                <img src={isLoading} alt="isLoading"/>
            </div>
        </div>
    );
}

