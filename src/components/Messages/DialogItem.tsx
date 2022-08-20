import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./Messages.module.css";
import {DialogsPropsType} from "./Messages";

export const DialogItem = (props: DialogsPropsType) => {
  /* let path = '/messages/' + props.id; */

  return (
    <>
      {props.dialogProps.map(elem => {
        return (
          <div>
            <NavLink to={'/messages/' + elem.id} activeClassName={classes.activeLink}>
              {elem.name}
            </NavLink>
          </div>
        )
      })}
    </>
  );
}