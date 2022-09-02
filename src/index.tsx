import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {App} from "./App";
import {RootDataStateType} from './redux/datastate';
import {store} from './redux/datastate';
import {BrowserRouter} from "react-router-dom";

const renderEntireTree = () => {
    ReactDOM.render(
        <BrowserRouter>
            <App
                state={store.getState()}
                dispatch={store.dispatch.bind(store)}
            />
        </BrowserRouter>, document.getElementById('root')
    );
}

renderEntireTree();
store.subscribe(renderEntireTree);