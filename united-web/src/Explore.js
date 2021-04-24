import React from 'react'
import Sidebar from './Sidebar';
import Feed from './Feed'
import Card from '../src/Card'
import './App.css'
import '../src/Explore.css'




function Explore() {
    return (
        <div className="app">
            <Sidebar />
            <div class="feed">
                <div className="title">
                    <h1>Top Events</h1>
                    <div className="search_input">
                    <input placeholder="search events" type="text" />
                    </div>

                    <div className="cards_section">
                        <Card
                        src="https://images.unsplash.com/photo-1502014822147-1aedfb0676e0?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjV8fGJhc2tldGJhbGx8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1400&q=60"
                        title="Outdoor Games"
                        location="Boston,Ma"
                        ranking="none"
                        description="Exciting outdoor activities for all ages. From basketball..."
                        />
                        <Card
                        src="https://images.unsplash.com/photo-1566737236500-c8ac43014a67?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                        title="Late Night Events"
                        location="Providence, RI"
                        ranking="none"
                        description="Exciting outdoor activities for all ages. From basketball..."
                        />
                        <Card 
                        src="https://images.unsplash.com/photo-1543007630-9710e4a00a20?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YmFyfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1400&q=60"
                        title="Bar Events"
                        location="Keene, NH"
                        ranking="none"
                        description="Exciting outdoor activities for all ages. From basketball..."
                        />
                    </div>

                    <div className="cards_section">
                    <Card
                        src="https://images.unsplash.com/photo-1520881363902-a0ff4e722963?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
                        title="University Meetups"
                        location="Cambridge,Ma"
                        ranking="none"
                        description="Exciting outdoor activities for all ages. From basketball..."
                        />
                        <Card
                        src="https://images.unsplash.com/photo-1566737236500-c8ac43014a67?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                        title="Late Night Events"
                        location="Providence, RI"
                        ranking="none"
                        description="Exciting outdoor activities for all ages. From basketball..."
                        />
                        <Card 
                        src="https://images.unsplash.com/photo-1543007630-9710e4a00a20?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YmFyfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1400&q=60"
                        title="Bar Events"
                        location="Keene, NH"
                        ranking="none"
                        description="Exciting outdoor activities for all ages. From basketball..."
                        />
                    </div>
                </div>

            </div>
            
            
        </div>
    )
}

export default Explore
