import React from 'react';
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

{/*<Router>
    <Routes>
        <Route path="*" element={<Navigate to='/profile'/>}/>
    </Routes>
    <Routes>
         <Route path="*" element={<Navigate to='/messages'/>}/>
    </Routes>
</Router>*/}

function App() {
    return (
        <BrowserRouter>
            <div className="wrapper">
                <Header/>
                <Navbar/>
                <div className="main">
                    <Route path={"/profile"} component={Profile}/>
                    <Route path={"/messages"} component={Messages}/>
                    <Route path={"/news"} component={News}/>
                    <Route path={"/music"} component={Music}/>
                    <Route path={"/settings"} component={Settings}/>
                </div>
                {/* <Profile /> */}
                <Footer />
            </div>
        </BrowserRouter>
    );
}

export default App;