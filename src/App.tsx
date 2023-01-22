import React, {Suspense} from 'react';
import './App.css';
import {Route, /*Switch, withRouter,*/ Routes} from 'react-router-dom';
import {Navbar} from "./components/Navbar/Navbar";
import {News} from "./components/News/News";
import {Music} from "./components/Music/Music";
import {Settings} from "./components/Settings/Settings";
import {LoginContainer} from "./components/Login/Login";
import {Footer} from "./components/Footer/Footer";
// import {MessagesContainer} from "./components/Messages/MessagesContainer";
// import {UsersContainer} from "./components/Users/UsersContainer";
// import {ProfileContainer} from "./components/Profile/ProfileMain/ProfileContainer";
import {HeaderContainer} from "./components/Header/HeaderContainer";
import {connect} from "react-redux";
import {RootStateType} from "./redux/redux-store";
import {compose} from "redux";
import {initializeAppTC} from "./redux/app-reducer";
import {Preloader} from "./common/UI/Preloader/Preloader";
import {NotFound} from "./common/components/NotFound/NotFound";
import {Welcome} from "./components/Welcome/Welcome";
import {Users} from "./components/Users/Users";
// import {ProfileContainerWithHooks} from "./components/Profile/ProfileMain/ProfileContainerWithHooks";
import {Profile} from "./components/Profile/ProfileMain/Profile";

// "react-router-dom": "5.3.0", // была эта версия до 6.4.3

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

    // обработка всех rejected промисов
    /*catchAllUnhandledErrors = (promiseRejectionEvent: any) => {
        // alert('Произошла ошибка');
    }*/

    // аналог useEffect
    componentDidMount() {
        this.props.initializeApp();

        // обработка всех rejected промисов
        // window.addEventListener('unhandledrejection', this.catchAllUnhandledErrors);
    }
    // аналог clearup в useEffect
    componentWillUnmount() {
        // window.removeEventListener('unhandledrejection', this.catchAllUnhandledErrors);
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
                        <Routes>
                            <Route path={'/'} element={() => <Welcome/>} />
                            {/*<Route path={'/profile/:userId?'} element={() => <ProfileContainer/>} />*/}
                            <Route path={'/profile/:userId?'} element={() => <Profile/>} />
                            <Route path={'/messages'}
                                   element={() => {
                                       return <Suspense fallback={<div style={{textAlign: 'center'}}>Загрузка...</div>}>
                                           <MessagesContainer/>
                                       </Suspense>
                                   }}
                            />
                            <Route path={'/news'} element={() => <News/>} />
                            <Route path={'/music'} element={() => <Music/>} />
                            {/*замена классовой компоненты на функциональную UsersPage*/}
                            {/*<Route path={'/users'} element={() => <UsersContainer/>} />*/}
                            <Route path={'/users'} element={() => <Users/>} />
                            <Route path={'/settings'} element={() => <Settings/>} />
                            <Route path={'/login'} element={() => <LoginContainer/>} />
                            <Route path='*' element={() => <NotFound/>} />
                        </Routes>
                    </div>
                    <Footer/>
                </div>
            );
        }
    }
}

export const AppContainer = compose<React.ComponentType>
(connect(mapStateToProps, mapDispatchToProps)/*, withRouter*/)(App);