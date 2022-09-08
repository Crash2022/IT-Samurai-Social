import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {App} from "./App";
import {datastate} from './redux/datastate';
import {BrowserRouter} from "react-router-dom";

const renderEntireTree = () => {
    ReactDOM.render(
        <BrowserRouter>
            <App
                state={datastate.getState()}
                dispatch={datastate.dispatch.bind(datastate)}
                store={datastate}
            />
        </BrowserRouter>, document.getElementById('root')
    );
}

renderEntireTree();
datastate.subscribe(renderEntireTree);