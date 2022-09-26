import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {App} from "./App";
import {store} from './redux/redux-store';
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";

const rerenderEntireTree = (/*state: RootStateType*/) => {
    ReactDOM.render(
        <BrowserRouter>
            <Provider store={store}>
                <App state={store.getState()} dispatch={store.dispatch}/>
            </Provider>
        </BrowserRouter>, document.getElementById('root')
    );
}

rerenderEntireTree(/*store.getState()*/);

store.subscribe( () => {
    rerenderEntireTree()
});