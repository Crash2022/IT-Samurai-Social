import React from 'react';
import {ActionsType, RootDataStateType} from "./datastate";

type sidebarType = {
    state: RootDataStateType
    action: ActionsType
}

const myPostPageReducer = (props: sidebarType) => {

    return props.state;
}