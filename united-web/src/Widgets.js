import React from 'react'
import '../src/Widgets.css'
import SearchIcon from '@material-ui/icons/Search'
import {TwitterTimelineEmbed, TwitterShareButton, TwitterTweetEmbed} from 'react-twitter-embed'
const Widgets = () => {
    return (
        <div className="widgets">
           <div className="widgets_input">  
            <SearchIcon className="widgets_searchIcon" />
            <input placeholder="Search" type="text" />
           </div>

           <div className="widgets_widgetContainer">
                <h2>Popular Events</h2>
                <div className="club">
                    <img src="https://images.unsplash.com/photo-1566737236500-c8ac43014a67?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" alt="" />
                    <h3>Late Night</h3>
                    <span>500</span>
                    <img src="https://images.unsplash.com/photo-1530649159659-c8beb2992433?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80" alt="" />
                    <h3>Outdoor Events</h3>
                    <span>1000</span>
                    <img src="https://images.unsplash.com/photo-1520881363902-a0ff4e722963?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80" alt="" />
                    <h3>Community</h3>
                    <span>365</span>
                </div>
           </div>
        </div>
    )
}

export default Widgets
