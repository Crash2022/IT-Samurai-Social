import React from 'react';
import {ActionsType, RootDataStateType} from "./datastate";

type myPostPageReducerType = {
    state: RootDataStateType
    action: ActionsType
}

const myPostPageReducer = (props: myPostPageReducerType) => {

    return props.state;
}