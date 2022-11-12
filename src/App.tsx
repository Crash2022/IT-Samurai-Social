import React, {Suspense} from 'react';
import './App.css';
import {Route, Switch, withRouter} from 'react-router-dom';
import {Navbar} from "./components/Navbar/Navbar";
import {News} from "./components/News/News";
import {Music} from "./components/Music/Music";
import {Settings} from "./components/Settings/Settings";
import {LoginContainer} from "./components/Login/Login";
import {Footer} from "./components/Footer/Footer";
//import {MessagesContainer} from "./components/Messages/MessagesContainer";
import {UsersContainer} from "./components/Users/UsersContainer";
import {ProfileContainer} from "./components/Profile/ProfileMain/ProfileContainer";
import {HeaderContainer} from "./components/Header/HeaderContainer";
import {connect} from "react-redux";
import {RootStateType} from "./redux/redux-store";
import {compose} from "redux";
import {initializeAppTC} from "./redux/app-reducer";
import {Preloader} from "./UI/Preloader/Preloader";
import {NotFound} from "./components/NotFound/NotFound";
import {Welcome} from "./components/Welcome/Welcome";

// loadable не работает
/*import {loadable} from 'react-lazily/loadable';
const { MessagesContainer } = loadable(() => import('./components/Messages/MessagesContainer'),
    {fallback: <>Загрузка...</>,})*/

// lazily не работает
/*import {lazily} from 'react-lazily';
const {MessagesContainer} = lazily(() => import ("./components/Messages/MessagesContainer"));*/

// реализация lazy loading вместо обычного импорта
const MessagesContainer = React.lazy(() => import('./components/Messages/MessagesContainer')
    .then((module) => ({default: module.MessagesContainer})));


export type AppPropsType = MapStateToPropsAppType & MapDispatchToPropsAppType;

type MapStateToPropsAppType = {
    initialized: boolean
}
type MapDispatchToPropsAppType = {
    initializeApp: () => void
}

const mapStateToProps = (state: RootStateType): MapStateToPropsAppType => {
    return {
        initialized: state.app.initialized
    }
}
const mapDispatchToProps: MapDispatchToPropsAppType = {
    initializeApp: initializeAppTC
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
                        <Switch>
                            <Route exact path={"/"} render={() => <Welcome/>} />
                            <Route path={"/profile/:userId?"} render={() => <ProfileContainer/>} />
                            <Route path={"/messages"}
                                   render={() => {
                                       return <Suspense fallback={<div style={{textAlign: 'center'}}>Загрузка...</div>}>
                                           <MessagesContainer/>
                                       </Suspense>
                                   }}
                            />
                            <Route path={"/news"} render={() => <News/>} />
                            <Route path={"/music"} render={() => <Music/>} />
                            <Route path={"/users"} render={() => <UsersContainer/>} />
                            <Route path={"/settings"} render={() => <Settings/>} />
                            <Route path={"/login"} render={() => <LoginContainer/>} />
                            <Route path="*" render={() => <NotFound/>} />
                        </Switch>
                    </div>
                    <Footer/>
                </div>
            );
        }
    }
}

export const AppContainer = compose<React.ComponentType>
(connect(mapStateToProps, mapDispatchToProps), withRouter)(App);