import React from "react";
import {NavLink} from "react-router-dom";
import classes from "./Messages.module.css";

import {DialogsArray} from '../../redux/store';

type MessagesType = {
  myDialogs: Array<DialogsArray>
}

export const DialogItem = (props: MessagesType) => {
  /* let path = '/messages/' + props.id; */

  return (
    <>
      {props.myDialogs.map(dialog => {
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