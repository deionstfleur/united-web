import React from 'react'
import Sidebar from './Sidebar';
import './App.css'



function Friends() {
    return (
        <div className="app">
            <Sidebar />
            <div className="feed">
                <div className="title">
                  <h1 style={{fontWeight: 700}}>Connections</h1>
                    <div className="search_input">
                    <input placeholder="search events" type="text" />
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default Friends
