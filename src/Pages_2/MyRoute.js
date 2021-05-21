import React, { Component } from 'react'
import { Route, Switch } from 'react-router'
import Home_1 from './Home_1'
import About_1 from './About_1'
import Blog_1 from './Blog_1'
import Contact_1 from './Contact_1'
import NotFound from './NotFound'



export class MyRoute extends Component {
    render() {
        return (
            <div>
                <Switch>
                    <Route exact path="/" component={Home_1}></Route>
                    <Route exact path="/About_1" component={About_1}></Route>
                    <Route exact path="/Blog_1" component={Blog_1}></Route>
                    <Route exact path="/Contact_1" component={Contact_1}></Route>
                    <Route component={NotFound}></Route>
                </Switch>
                
            </div>
        )
    }
}

export default MyRoute
