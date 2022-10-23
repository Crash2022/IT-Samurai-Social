import React from 'react';
import './App.css';
import {Route} from 'react-router-dom';
import {Navbar} from "./components/Navbar/Navbar";
import {News} from "./components/News/News";
import {Music} from "./components/Music/Music";
import {Settings} from "./components/Settings/Settings";
import {LoginContainer} from "./components/Login/Login";
import {Footer} from "./components/Footer/Footer";
import {MessagesContainer} from "./components/Messages/MessagesContainer";
import {UsersContainer} from "./components/Users/UsersContainer";
import {ProfileContainer} from "./components/Profile/ProfileMain/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";

export const App = () => {

    return (
        <div className="wrapper">
            <HeaderContainer/>
            <Navbar/>
            <div className="right__main">
                {/*<Route path={"/"} render={ () => <Welcome /> }/>*/}
                <Route path={"/profile/:userId?"} render={() => <ProfileContainer/>}/>
                <Route path={"/messages"} render={() => <MessagesContainer/>}/>
                <Route path={"/news"} render={() => <News/>}/>
                <Route path={"/music"} render={() => <Music/>}/>
                <Route path={"/users"} render={() => <UsersContainer/>}/>
                <Route path={"/settings"} render={() => <Settings/>}/>
                <Route path={"/login"} render={() => <LoginContainer/>}/>
            </div>
            <Footer/>
        </div>
    );
}

