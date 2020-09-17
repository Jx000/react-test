import React, { Component } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'

import About from '../pages/about'
import Home from '../pages/home'
import MyNavLink from './myNavLink'

export default class App extends Component {

    render() {
        return (
            <div>
                <div>React-router</div>
                <div>
                    <div>
                        <MyNavLink to='/about'>About</MyNavLink>
                    </div>
                    <div>
                        <MyNavLink to='/home' >Home</MyNavLink>
                    </div>
                </div>
                <div>
                    <Switch>
                        <Route path='/about' component={About}/>
                        <Route path='/home' component={Home}/>
                        <Redirect to='/about'/>
                    </Switch>
                </div>
            </div>
        )
    }
}
