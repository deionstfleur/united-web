import React from 'react'
import '../src/FrontPage.css'
import {Link} from 'react-router-dom'
import Button from 'react-bootstrap/Button';



function FontPage() {
    return (
        <div style={{backgroundColor: '#000'}}>
            <div style={{display: 'flex'}}>
                <div className="picture">
                    <img src="https://images.unsplash.com/photo-1617146361993-dfec68d62c43?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80" />      
                </div>
              
                <div style={{color: "#fff", fontSize: 40, margin: 120}}>
                    <h1 >LinkMe</h1>
                    <Link to="/" style={{textDecoration: 'none', color: 'white'}}>
                    <div style={{backgroundColor: "blue", borderRadius: 30}} >
                         <p style={{justifyContent: 'center', alignItems: 'center'}}>Explore</p>
                    </div>
                    </Link>
                </div>
            

            </div>
            
      
        </div>
    )
}

export default FontPage
