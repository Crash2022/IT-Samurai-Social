import React from "react";
import {NavLink} from "react-router-dom";
import classes from './Navbar.module.css';

export const NavLinks = () => {
    return (
        <nav className={classes.left__navMenu}>
            <div>
                <NavLink to="/profile" activeClassName={classes.activeLink}>Профиль</NavLink>
            </div>
            <div>
                <NavLink to="/messages" activeClassName={classes.activeLink}>Сообщения</NavLink>
            </div>
            <div>
                <NavLink to="/news" activeClassName={classes.activeLink}>Новости</NavLink>
            </div>
            <div>
                <NavLink to="/music" activeClassName={classes.activeLink}>Музыка</NavLink>
            </div>
            <div>
                <NavLink to="/users" activeClassName={classes.activeLink}>Джедаи</NavLink>
            </div>
            <div>
                <NavLink to="/settings" activeClassName={classes.activeLink}>Настройки</NavLink>
            </div>
        </nav>
    );
}