import React from "react";
import classes from './Header.module.css';
import {NavLink} from "react-router-dom";
import socialLogo from "../../assets/images/social_logo.png";
import {HeaderContainerPropsType} from "./HeaderContainer";

export const Header = (props: HeaderContainerPropsType) => {
    return (
        <header className={classes.header}>
            <div className={classes.header__logo}>
                <NavLink to="/">
                    <img
                        src={socialLogo}
                        style={{width: "100px", height: "100px"}}
                        alt="logo">
                    </img>
                </NavLink>
            </div>
            <div className={classes.header__socialName}>
                Социальная сеть для джедаев
            </div>
            <div className={classes.login_block}>
                {
                    props.isAuth
                        ? props.login
                        : <NavLink to="/login">
                            LOG IN
                        </NavLink>
                }
            </div>
        </header>
    );
}