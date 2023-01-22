import React from "react";
import {NavLink} from "react-router-dom";
import styles from './Navbar.module.css';

export const NavLinks = () => {
    return (
        <nav className={styles.left__navMenu}>
            <div>
                {/*<NavLink to="/profile" activeClassName={styles.activeLink}>Профиль</NavLink>*/}
                <NavLink to='/profile'>Профиль</NavLink>
            </div>
            <div>
                {/*<NavLink to="/messages" activeClassName={styles.activeLink}>Сообщения</NavLink>*/}
                <NavLink to='/messages'>Сообщения</NavLink>
            </div>
            <div>
                {/*<NavLink to="/news" activeClassName={styles.activeLink}>Новости</NavLink>*/}
                <NavLink to='/news'>Новости</NavLink>
            </div>
            <div>
                {/*<NavLink to="/music" activeClassName={styles.activeLink}>Музыка</NavLink>*/}
                <NavLink to='/music'>Музыка</NavLink>
            </div>
            <div>
                {/*<NavLink to="/users" activeClassName={styles.activeLink}>Джедаи</NavLink>*/}
                <NavLink to='/users'>Джедаи</NavLink>
            </div>
            <div>
                {/*<NavLink to="/settings" activeClassName={styles.activeLink}>Настройки</NavLink>*/}
                <NavLink to='/settings'>Настройки</NavLink>
            </div>
        </nav>
    );
}