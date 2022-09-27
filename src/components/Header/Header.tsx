import React from "react";
import classes from './Header.module.css';
import {NavLink} from "react-router-dom";

export const Header = () => {
    return (
        <header className={classes.header}>
            <div className={classes.header__logo}>
                <NavLink to="/">
                    <img
                        src="https://bikescollective.com/wp-content/uploads/2020/05/Bikes-Collectives-logo-revised-black-logo-PNG.png"
                        style={{width: "100px", height: "100px"}}
                        alt="logo">
                    </img>
                </NavLink>
            </div>
            <div className={classes.header__socialName}>
                Социальная сеть для джедаев
            </div>
        </header>
    );
}