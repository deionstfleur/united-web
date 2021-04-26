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

            <div className="bar">
                <img src="https://images.unsplash.com/photo-1575444758702-4a6b9222336e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80" alt="" />
                <img src="https://images.unsplash.com/photo-1562866470-3774249bef10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjh8fG91dGRvb3IlMjBwYXJ0eXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60" alt="" />
                <img src="https://images.unsplash.com/photo-1511222138462-5d03818b409c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1866&q=80" alt="" />
            </div>

            <div className="bar">
                <img src="https://images.unsplash.com/photo-1501386761578-eac5c94b800a?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fGNvbmNlcnR8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60" alt="" />
                {/* <img src="https://images.unsplash.com/photo-1575444758702-4a6b9222336e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80" alt="" />
                <img src="https://images.unsplash.com/photo-1575444758702-4a6b9222336e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80" alt="" /> */}
            </div>
        </div>
        
    </div>
    )
}

export default Communities
