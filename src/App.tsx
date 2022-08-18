import React from 'react';
import './App.css';

import {BrowserRouter, Route} from 'react-router-dom';

import {Header} from "./components/Header/Header";
import {Navbar} from "./components/Navbar/Navbar";
import {Messages} from "./components/Messages/Messages";
import {Profile} from "./components/Profile/Profile";
import {Footer} from "./components/Footer/Footer";

{/*<Router>
    <Routes>
        <Route path="*" element={<Navigate to='/profile'/>}/>
    </Routes>
    <Routes>
         <Route path="*" element={<Navigate to='/messages'/>}/>
    </Routes>
</Router>*/}

function App(props: any) {
    return (
        <BrowserRouter>
            <div className="wrapper">
                <Header/>
                <Navbar/>
                <div className="main">
                    <Route path={"/profile"} component={Profile}/>
                    <Route path={"/messages"} component={Messages}/>
                </div>
                {/*<Footer />*/}
            </div>
        </BrowserRouter>
    );
}

export default App;
