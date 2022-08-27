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
import {Welcome} from './components/Welcome/Welcome';

import {RootDataStateType} from "./redux/datastate";


{/*<Router>
    <Routes>
        <Route path="*" element={<Navigate to='/profile'/>}/>
    </Routes>
    <Routes>
         <Route path="*" element={<Navigate to='/messages'/>}/>
    </Routes>
</Router>*/}

export type AppPropsType = {
    state: RootDataStateType
    addPost: (newPostMessage: string) => void
}

export const App:FC<AppPropsType> = ({state, addPost}) => {
    return (
            <div className="wrapper">
                <Header/>
                <Navbar/>
                <div className="right__main">
                    {/*<Route path={"/"} render={ () => <Welcome /> }/>*/}
                    <Route path={"/profile"} render={ () => <Profile myposts={state.myPostPage.user1} addPost={addPost}/> }/>
                    <Route path={"/messages"} render={ () => <Messages mydialogs={state.dialogsPage.dialogsData} mymessages={state.dialogsPage.messagesData}/> }/>
                    <Route path={"/news"} render={ () => <News/> }/>
                    <Route path={"/music"} render={ () => <Music/> }/>
                    <Route path={"/settings"} render={ () => <Settings/> }/>
                </div>
                <Footer />
            </div>
    );
}