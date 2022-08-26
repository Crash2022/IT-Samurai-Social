import React, {FC} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {App} from "./App";
//import datastate from './redux/datastate';
//import {addPost, RootDataStateType} from './redux/datastate';
import {BrowserRouter} from "react-router-dom";

export type RenderPropsType = {
    state: RootDataStateType
    addPost: (newPostMessage: string)=>void
}

export const renderEntireTree: FC<RenderPropsType> = ({state, addPost}) => {
    ReactDOM.render(
        <BrowserRouter>
            <App state={datastate} addPost={addPost}/>
        </BrowserRouter>, document.getElementById('root')

    );
}
