import React from "react";
import styles from './Welcome.module.css';
import welcomeImage from '../../assets/images/welcome/Welcome_01.jpg'

export const Welcome = () => {
    return (
        <>
            <div className={styles.welcome_text}>
                Добро пожаловать в социальную сеть для Настоящих Джедаев!
            </div>
            <div className={styles.welcome_image}>
                <img src={welcomeImage} alt="welcome image"/>
            </div>
        </>
    );
}