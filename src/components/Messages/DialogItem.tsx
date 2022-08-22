import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./Messages.module.css";

import {DialogsArray, MessagesArray} from '../../redux/datastate';

type MessagesType = {
  mydialogs: DialogsArray[]
}

export const DialogItem = (props: MessagesType) => {
  /* let path = '/messages/' + props.id; */

  return (
    <>
      {props.mydialogs.map(dialog => {
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