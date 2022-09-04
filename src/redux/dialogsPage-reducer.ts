import React from 'react';
import {ActionsType, RootDataStateType} from "./datastate";

type dialogsPageReducerType = {
    state: RootDataStateType
    action: ActionsType
}

const dialogsPageReducer = (props: dialogsPageReducerType) => {

    return props.state;
}