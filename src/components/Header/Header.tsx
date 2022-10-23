import React from "react";
import styles from './Header.module.css';
import {NavLink} from "react-router-dom";
import socialLogo from "../../assets/images/social_logo.png";
import {HeaderContainerPropsType} from "./HeaderContainer";

export const Header = (props: HeaderContainerPropsType) => {
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
                        ? <div>
                            <div>{props.login}</div>
                            <div><button onClick={props.deleteLogin}>LogOut</button></div>
                        </div>
                        : <NavLink to="/login">
                            <span>LOG IN</span>
                        </NavLink>
                }
            </div>
        </header>
    );
}