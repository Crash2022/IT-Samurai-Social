import React, {Suspense} from 'react';
import './App.css';
import {Route, /*Switch, withRouter,*/ Routes, Navigate} from 'react-router-dom';
import {Navbar} from "../Navbar/Navbar";
import {News} from "../News/News";
import {Music} from "../Music/Music";
import {Settings} from "../Settings/Settings";
import {LoginContainer} from "../Login/Login";
import {Footer} from "../Footer/Footer";
// import {MessagesContainer} from "./components/Messages/MessagesContainer";
// import {UsersContainer} from "./components/Users/UsersContainer";
// import {ProfileContainer} from "./components/Profile/ProfileMain/ProfileContainer";
import {HeaderContainer} from "../Header/HeaderContainer";
import {connect} from "react-redux";
import {RootStateType} from "../../redux/redux-store";
import {compose} from "redux";
import {initializeAppTC} from "../../redux/app-reducer";
import {Preloader} from "../../common/UI/Preloader/Preloader";
import {NotFound} from "../../common/components/NotFound/NotFound";
import {Welcome} from "../Welcome/Welcome";
import {Users} from "../Users/Users";
// import {ProfileContainerWithHooks} from "./components/Profile/ProfileMain/ProfileContainerWithHooks";
import {Profile} from "../Profile/ProfileMain/Profile";

// "react-router-dom": "5.3.0", // была эта версия до 6.4.3

// loadable не работает
/*import {loadable} from 'react-lazily/loadable';
const { MessagesContainer } = loadable(() => import('./components/Messages/MessagesContainer'),
    {fallback: <>Загрузка...</>,})*/

// lazily не работает
/*import {lazily} from 'react-lazily';
const {MessagesContainer} = lazily(() => import ("./components/Messages/MessagesContainer"));*/

// реализация lazy loading вместо обычного импорта
const MessagesContainer = React.lazy(() => import('../Messages/MessagesContainer')
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
                            <Route path={'/'} element={<Welcome/>} />
                            {/*<Route path={'/profile/:userId?'} element={() => <ProfileContainer/>} />*/}
                            {/*<Route path={'/profile/:userId?'} element={<Profile/>} />*/}
                            <Route path={'/profile/*'} element={<Profile/>}>
                                <Route path={':userId'} element={<Profile/>}/>
                            </Route>
                            <Route path={'/messages'}
                                   element={
                                       <Suspense fallback={<div style={{textAlign: 'center'}}>Загрузка...</div>}>
                                           <MessagesContainer/>
                                       </Suspense>
                                   }
                            />
                            <Route path={'/news'} element={<News/>} />
                            <Route path={'/music'} element={<Music/>} />
                            {/*замена классовой компоненты на функциональную Users*/}
                            {/*<Route path={'/users'} element={() => <UsersContainer/>} />*/}
                            <Route path={'/users'} element={<Users/>} />
                            <Route path={'/settings'} element={<Settings/>} />
                            <Route path={'/login'} element={<LoginContainer/>} />
                            <Route path={'/error404'} element={<NotFound/>} />
                            <Route path={'*'} element={<Navigate to={'error404'} />} />
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