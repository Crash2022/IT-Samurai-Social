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
//import {Welcome} from './components/Welcome/Welcome';

import {
    ActionType,
    ActionChangeType,
    RootDataStateType,
    store,
    ActionSendMessageType,
    ActionUpdateMessageType
} from "./redux/datastate";

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
    /*addPost: () => void
    updateNewPostText: (newText: string) => void*/
    dispatch: (action: ActionType | ActionChangeType | ActionSendMessageType | ActionUpdateMessageType) => void
}

export const App:FC<AppPropsType> = ({state, dispatch}) => {
    return (
            <div className="wrapper">
                <Header/>
                <Navbar/>
                <div className="right__main">
                    {/*<Route path={"/"} render={ () => <Welcome /> }/>*/}
                    <Route path={"/profile"} render={ () => <Profile
                        myposts={state.myPostPage.user1}
                        /*addPost={addPost}
                        updateNewPostText={updateNewPostText}*/
                        dispatch={dispatch}
                        newPostText={state.newPostText} /> }/>
                    <Route path={"/messages"} render={ () => <Messages
                        mydialogs={state.dialogsPage.dialogsData}
                        mymessages={state.dialogsPage.messagesData}
                        newMessageTextForDialog={state.dialogsPage.newMessageTextForDialog}
                        dispatch={dispatch}/> }/>
                    <Route path={"/news"} render={ () => <News/> }/>
                    <Route path={"/music"} render={ () => <Music/> }/>
                    <Route path={"/settings"} render={ () => <Settings/> }/>
                </div>
                <Footer />
            </div>
    );
}