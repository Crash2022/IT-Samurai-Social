import React from "react";
import {NavLink} from "react-router-dom";
import classes from "./Messages.module.css";
import {DialogsArray} from '../../redux/dialogsPage-reducer';
import {v1} from "uuid";

type DialogItemPropsType = {
    myDialogs: Array<DialogsArray>
}

export const DialogItem = (props: DialogItemPropsType) => {

    return (
        <>
            {props.myDialogs.map(dialog => {
                return (
                    <div key={v1()}>
                        {/*<NavLink to={'/messages/' + dialog.id} activeClassName={classes.activeLink}>*/}
                        <NavLink to={'/messages/' + dialog.id}>
                            {dialog.name}
                        </NavLink>
                    </div>
                )
            })}
        </>
    );
}