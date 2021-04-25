import React from 'react'
import Sidebar from './Sidebar';
import './App.css'
import '../src/Communities.css'

function Communities() {
    return (
        <div className="app">
        <Sidebar />
        <div className="feed">
            <div className="title">
              <h1 style={{fontWeight: 700}}>Communities</h1>
                <div className="search_input">
                <input placeholder="search events" type="text" />
                </div>
            </div>
        </div>
        
    </div>
    )
}

export default Communities
