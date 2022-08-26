import React, {FC} from 'react';
import './App.css';

import {BrowserRouter, Route} from 'react-router-dom';

import {Header} from "./components/Header/Header";
import {Navbar} from "./components/Navbar/Navbar";
import {Messages} from "./components/Messages/Messages";
import {Profile} from "./components/Profile/Profile";
import {News} from "./components/News/News";
import {Music} from "./components/Music/Music";
import {Settings} from "./components/Settings/Settings";
import {Footer} from "./components/Footer/Footer";

import {RootDataStateType} from "./redux/datastate";

{/*<Router>
    <Routes>
        <Route path="*" element={<Navigate to='/profile'/>}/>
    </Routes>
    <Routes>
         <Route path="*" element={<Navigate to='/messages'/>}/>
    </Routes>
</Router>*/}

type AppPropsType = {
    state: RootDataStateType
    addPost: (newPostMessage: string)=>void
}

export const App:FC<AppPropsType> = ({state, addPost}) => {
    return (
        <BrowserRouter>
            <div className="wrapper">
                <Header/>
                <Navbar/>
                {/* <Profile /> */}
                <div className="right__main">
                    <Route path={"/profile"} render={ () => <Profile myposts={state.myPostPage.user1} addPost={addPost}/> }/>
                    <Route path={"/messages"} render={ () => <Messages mydialogs={state.dialogsPage.dialogsData} mymessages={state.dialogsPage.messagesData}/> }/>
                    <Route path={"/news"} render={ () => <News/> }/>
                    <Route path={"/music"} render={ () => <Music/> }/>
                    <Route path={"/settings"} render={ () => <Settings/> }/>
                </div>
                <Footer />
            </div>
        </BrowserRouter>
    );
}
