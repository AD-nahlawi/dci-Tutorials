import React, { Component } from 'react'
import {
    BrowserRouter, Router,Switch, Route, Link
  } from 'react-router-dom' ;
export default class Navigator extends Component {
    render() {
        return (
            <div>
                <h2>React Navigator</h2>
                <ul>
                    <li>
                        <Link to = {'/about'}>about us</Link>
                    </li>
                    <li>
                        <Link to = {'/'}>Home</Link>
                    </li>
                </ul>
            </div>
        )
    }
}
