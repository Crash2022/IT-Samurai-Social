import React from 'react';
import './App.css';
import {Route, withRouter} from 'react-router-dom';
import {Navbar} from "./components/Navbar/Navbar";
import {News} from "./components/News/News";
import {Music} from "./components/Music/Music";
import {Settings} from "./components/Settings/Settings";
import {LoginContainer} from "./components/Login/Login";
import {Footer} from "./components/Footer/Footer";
import {MessagesContainer} from "./components/Messages/MessagesContainer";
import {UsersContainer} from "./components/Users/UsersContainer";
import {ProfileContainer} from "./components/Profile/ProfileMain/ProfileContainer";
import {HeaderContainer} from "./components/Header/HeaderContainer";
import {connect} from "react-redux";
import {RootStateType} from "./redux/redux-store";
//import {deleteLoginThunkCreator, getAuthThunkCreator} from "./redux/auth-reducer";
import {compose} from "redux";
import {initializeAppThunkCreator} from "./redux/app-reducer";
import {Preloader} from "./UI/Preloader/Preloader";

export type AppPropsType = MapStateToPropsAppType & MapDispatchToPropsAppType;

type MapStateToPropsAppType = {
    //isAuth: boolean
    //login: null | string
    initialized: boolean
}
type MapDispatchToPropsAppType = {
    //getAuth: () => void
    //deleteLogin: () => void
    initializeApp: () => void
}

const mapStateToProps = (state: RootStateType): MapStateToPropsAppType => {
    return {
        //isAuth: state.auth.isAuth,
        //login: state.auth.login
        initialized: state.app.initialized
    }
}
const mapDispatchToProps: MapDispatchToPropsAppType = {
    //getAuth: getAuthThunkCreator,
    //deleteLogin: deleteLoginThunkCreator,
    initializeApp: initializeAppThunkCreator
}

export class App extends React.Component<AppPropsType> {

    componentDidMount() {
        this.props.initializeApp();
    }

    render() {

        if (!this.props.initialized) {
            return <Preloader/>
        } else {

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
    }
}

export const AppContainer = compose<React.ComponentType>
    (connect(mapStateToProps, mapDispatchToProps), withRouter)(App);

