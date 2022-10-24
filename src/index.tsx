import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {AppContainer} from "./App";
import {store} from './redux/redux-store';
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";

ReactDOM.render(
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
