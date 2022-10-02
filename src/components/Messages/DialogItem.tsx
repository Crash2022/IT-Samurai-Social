import React from "react";
import {NavLink} from "react-router-dom";
import classes from "./Messages.module.css";
import {DialogsArray} from '../../redux/redux-store';
import {v1} from "uuid";

type DialogItemPropsType = {
    myDialogs: Array<DialogsArray>
}

export const DialogItem = (props: DialogItemPropsType) => {
    /* let path = '/messages/' + props.id; */

    return (
        <>
            {props.myDialogs.map(dialog => {
                return (
                    <div key={v1()}>
                        <NavLink to={'/messages/' + dialog.id} activeClassName={classes.activeLink}>
                            {dialog.name}
                        </NavLink>
                    </div>
                )
            })}
        </>
    );
}