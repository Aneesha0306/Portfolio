import React,{ Fragment } from 'react'
import Routers from '../Routers/Routers'
import Header from '../components/Header'
import { BrowserRouter as Router } from 'react-router-dom'

function Layout() {
    return (
        <Router>
            <Fragment>
                <Header />
                <div>
                    <Routers />
                </div>
            </Fragment>
        </Router>
    )
}

export default Layout
