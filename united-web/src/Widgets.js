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
           </div>
        </div>
    )
}

export default Widgets
