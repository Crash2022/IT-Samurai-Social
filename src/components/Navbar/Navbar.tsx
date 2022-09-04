import React from "react";
import { NavLink } from "react-router-dom";
import classes from './Navbar.module.css';
import {NavbarFriends} from "./NavbarFriends";
import {SidebarFriendsType} from "../../redux/datastate";

type NavbarPropsType = {
    friendsList: Array<SidebarFriendsType>
}

export const Navbar = (props: NavbarPropsType) => {
  return (
    <nav className={classes.left__navmenu}>
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
        <NavLink to="/settings" activeClassName={classes.activeLink}>Настройки</NavLink>
      </div>
      <div>
         <NavbarFriends friendsList={props.friendsList}/>
      </div>
    </nav>
  );
}