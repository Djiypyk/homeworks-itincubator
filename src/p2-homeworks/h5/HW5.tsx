import React from 'react'
import {HashRouter} from 'react-router-dom'
import Header from './Header'
import Navigation from "./Navigation";


function HW5() {
    return (
        <div>
            <HashRouter>

                <Header/>

                <Navigation/>

            </HashRouter>
        </div>
    )
}

export default HW5
