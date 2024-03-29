import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {AppContainer} from "./components/App/App";
import {store} from './redux/redux-store';
import {BrowserRouter, HashRouter} from "react-router-dom";
import {Provider} from "react-redux";

ReactDOM.render(
    // для GitHubPages необходимо использовать HashRouter
    // <HashRouter></HashRouter>
    <BrowserRouter>
        <Provider store={store}>
            <AppContainer/>
        </Provider>
    </BrowserRouter>, document.getElementById('root')
);

//rerenderEntireTree();

// store.subscribe( () => {
//     rerenderEntireTree()
// });