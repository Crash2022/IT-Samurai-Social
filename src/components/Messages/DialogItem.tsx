import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./Messages.module.css";
import {DialogsPropsType} from "./Messages";

export const DialogItem = (props: DialogsPropsType) => {
  /* let path = '/messages/' + props.id; */

  return (
    <>
      {props.dialogProps.map(dialog => {
        return (
          <div>
            <NavLink to={'/messages/' + dialog.id} activeClassName={classes.activeLink}>
              {dialog.name}
            </NavLink>
          </div>
        )
      })}
    </>
  );
}