import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import About from './Pages/About'
import Blog from './Pages/Blog'
import Protfolio from './Pages/Protfolio'
import Contact from './Pages/Contact'
import {Route, NavLink, BrowserRouter as Router} from "../node_modules/react-router-dom";



const MyRouter=(
    
<Router>
  <div>
      <ul>
          <NavLink exact activeStyle={{color:"red"}} className ="navbar_2" to ="/" >Home</NavLink>
          <NavLink exact activeStyle={{color:"red"}} className ="navbar_2" to ="/About" >About</NavLink>
          <NavLink exact activeStyle={{color:"red"}} className ="navbar_2" to ="/Protfolio" >Protfolio</NavLink>
          <NavLink exact activeStyle={{color:"red"}} className ="navbar_2" to ="/Blog" >Blog</NavLink>
          <NavLink exact activeStyle={{color:"red"}} className ="navbar_2" to ="/Contact" >Contact</NavLink>

      </ul>
      <Route exact path="/" component={App} /> 
      <Route path="/About" component={About} /> 
      <Route path="/Protfolio" component={Protfolio} />
      <Route path="/Blog" component={Blog} /> 
      <Route path="/Contact" component={Contact} /> 
  </div>
</Router>



)


ReactDOM.render( MyRouter, document.getElementById('root')
);

