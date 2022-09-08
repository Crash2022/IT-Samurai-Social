import React from 'react';
import {ActionsType, RootDataStateType, SideBarPropsType} from "./store";

export type sidebarType = {
    state: RootDataStateType
    action: ActionsType
}

export const sidebarReducer = ( state: SideBarPropsType, action: ActionsType) => {

    return state;
}