import React, {FC} from 'react';
import './App.css';
import {Route} from 'react-router-dom';

import {Header} from "./components/Header/Header";
import {Navbar} from "./components/Navbar/Navbar";
import {Messages} from "./components/Messages/Messages";
import {Profile} from "./components/Profile/Profile";
import {News} from "./components/News/News";
import {Music} from "./components/Music/Music";
import {Settings} from "./components/Settings/Settings";
import {Footer} from "./components/Footer/Footer";

import {RootDataStateType, ActionsType} from "./redux/store";

export type AppPropsType = {
    // state: RootDataStateType
    // dispatch: (action: ActionsType) => void
}

export const App: FC<AppPropsType> = ({}) => {

    return (
        <div className="wrapper">
            <Header/>
            <Navbar/>
            <div className="right__main">
                {/*<Route path={"/"} render={ () => <Welcome /> }/>*/}
                <Route path={"/profile"} render={() => <Profile/>}/>
                <Route path={"/messages"} render={() => <Messages/>}/>
                <Route path={"/news"} render={() => <News/>}/>
                <Route path={"/music"} render={() => <Music/>}/>
                <Route path={"/settings"} render={() => <Settings/>}/>
            </div>
            <Footer/>
        </div>
    );
}

