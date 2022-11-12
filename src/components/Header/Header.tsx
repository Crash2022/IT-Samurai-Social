import React from "react";
import styles from './Header.module.css';
import {NavLink} from "react-router-dom";
import socialLogo from "../../assets/images/avatars/social_logo.png";
import {HeaderContainerType} from "./HeaderContainer";
import {SuperButton} from "../../UI/Button/SuperButton";

export const Header = (props: HeaderContainerType) => {

    return (
        <header className={styles.header}>
            <div className={styles.header__logo}>
                <NavLink to="/">
                    <img
                        src={socialLogo}
                        style={{width: "100px", height: "100px"}}
                        alt="logo">
                    </img>
                </NavLink>
            </div>

            <div className={styles.header__socialName}>
                Социальная сеть для джедаев
            </div>

            <div className={styles.login_block}>
                {
                    props.isAuth
                        ? <div className={styles.loginBlock}>
                            <div className={styles.loginSpan}>
                                {props.login}
                            </div>
                            <div>
                                <SuperButton className={styles.logoutButton}
                                             onClick={props.deleteLogin}
                                >
                                    Выход
                                </SuperButton>
                            </div>
                        </div>
                        : <NavLink to="/login">
                            <div className={styles.loginBlock}>
                                <SuperButton className={styles.loginButton}>
                                    Вход
                                </SuperButton>
                            </div>
                        </NavLink>
                }
            </div>
        </header>
    );
}