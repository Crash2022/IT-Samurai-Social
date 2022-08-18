import React from "react";
import { NavLink } from "react-router-dom";
import classes from './Navbar.module.css';

export const Navbar = () => {
  return (
    <nav className={classes.left__navmenu}>
      <div>
        <NavLink to="/profile" activeClassName={classes.activeLink}>Profile</NavLink>
      </div>
      <div>
        <NavLink to="/messages" activeClassName={classes.activeLink}>Messages</NavLink>
      </div>
      <div>
        <NavLink to="/news" activeClassName={classes.activeLink}>News</NavLink>
      </div>
      <div>
        <NavLink to="/music" activeClassName={classes.activeLink}>Music</NavLink>
      </div>
      <div>
        <NavLink to="/settings" activeClassName={classes.activeLink}>Settings</NavLink>
      </div>
    </nav>
  );
}