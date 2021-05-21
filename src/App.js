import React from 'react';
import './App.css';
import styles from './Mycss.module.css'
import './My.scss'
import Navigations from "./Navigations"
import Navbar_2 from './Pages_2/Navbar_2';
import { MyRoute } from './Pages_2/MyRoute';
import { BrowserRouter } from 'react-router-dom';




function App() {
  return (
    <div className="App">
     <h1 className={styles.MyStyle}>Home page</h1>
     <h2 className="TexrStyle">sass css</h2>
     <Navigations />
    <BrowserRouter>
    <Navbar_2 />
     <MyRoute />
    </BrowserRouter>
    </div>
  );
}

export default App;
