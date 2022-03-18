import React from 'react'
import { Route, BrowserRouter as Router } from 'react-router-dom'
import Login from './usermanagement/login.component'
export default function route() {
    return (
        <div>
            <Router>
            <Route exact path="/" component={Login} />
            </Router>
        </div>
    )
}
