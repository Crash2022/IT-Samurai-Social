import React from "react";
import styles from './NotFound.module.css';
import notFound from '../../assets/images/notfound/NotFound_01-2.jpg'

export const NotFound = () => {
    return (
        <div className={styles.notFound}>
            <img src={notFound} alt="404 not found"/>
        </div>
    );
}