import React from 'react';
import './App.css';
/* import PageTitle from "./components/PageTitle";
import Accordion from "./components/Accordion"; */

import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Profile from "./components/Profile";
import Footer from "./components/Footer";

function App(props: any) {
  return (
    <div className="wrapper">
    
        {/* <PageTitle title={"Main"}/>
        <Accordion titleValue={"menu 1"} menuCollapsed={false}/>
        <PageTitle title={"Gallery"}/>
        <Accordion titleValue={"menu 2"} menuCollapsed={true}/> */}

        <Header />
        <Navbar />
        <Profile />
        <Footer />
        
    </div>
  );
}

export default App;
