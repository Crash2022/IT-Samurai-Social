import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {App} from "./App";
//import {RootStateType, store} from './redux/redux-store';
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";
import {RootDataStateType, store} from "./redux/store";


const renderEntireTree = (state: RootDataStateType) => {
    ReactDOM.render(
        <BrowserRouter>
            {/*<Provider store={store}>*/}
                <App store={store} state={state} dispatch={store.dispatch.bind(store)}/>
            {/*</Provider>*/}
        </BrowserRouter>, document.getElementById('root')
    );
}

renderEntireTree(store.getState());

store.subscribe(() => {
    let state = store.getState();
    renderEntireTree(state);
});