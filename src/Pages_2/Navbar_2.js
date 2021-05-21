import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

export class Navbar_2 extends Component {
    render() {
        return (
            <div>
                <ul>
                    <li><NavLink exact activeStyle={{color:"green"}} to="/">Home_1</NavLink></li>
                    <li><NavLink exact activeStyle={{color:"green"}} to="/About_1">About_1</NavLink></li>
                    <li><NavLink exact activeStyle={{color:"green"}} to="/Blog_1">Blog_1</NavLink></li>
                    <li><NavLink exact activeStyle={{color:"green"}} to="/Contact_1">Contact_1</NavLink></li>
                    
                </ul>
            </div>
        )
    }
}

export default Navbar_2
