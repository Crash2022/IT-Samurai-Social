import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {App} from "./App";
import {RootDataStateType, addPost, updateNewPostText} from './redux/datastate';
import {BrowserRouter} from "react-router-dom";

export const renderEntireTree = (state: RootDataStateType) => {
    ReactDOM.render(
        <BrowserRouter>
            <App
                state={state}
                addPost={addPost}
                updateNewPostText={updateNewPostText}/>
        </BrowserRouter>, document.getElementById('root')

    );
}