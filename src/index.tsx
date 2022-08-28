import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {App} from "./App";
import datastate, {subscribe} from './redux/datastate';
import {RootDataStateType, addPost, updateNewPostText} from './redux/datastate';
import {BrowserRouter} from "react-router-dom";

const renderEntireTree = (state: RootDataStateType) => {
    ReactDOM.render(
        <BrowserRouter>
            <App
                state={state}
                addPost={addPost}
                updateNewPostText={updateNewPostText}/>
        </BrowserRouter>, document.getElementById('root')

    );
}

renderEntireTree(datastate);
subscribe(renderEntireTree);