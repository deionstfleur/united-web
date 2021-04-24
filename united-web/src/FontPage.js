import React from 'react'
import '../src/FrontPage.css'
import {Link} from 'react-router-dom'


function FontPage() {
    return (
        <div className="home">
            <div className="picture">
                <img src="https://images.unsplash.com/photo-1617146361993-dfec68d62c43?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80" alt="" />
                {/* <h1>Link Me (United)</h1> */}
                <span>Link Me</span>
                
            </div>
            {/* <div className="title">
            </div> */}
           
        </div>
    )
}

export default FontPage
