import React from 'react'
import '../src/Sidebar.css'
import FilterDramaIcon from '@material-ui/icons/FilterDrama';
import SidebarOption from './SidebarOption'
import HomeIcon from '@material-ui/icons/Home'
import SearchIcon from '@material-ui/icons/Search'
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone'
import {Button} from '@material-ui/core'
import Explore from '../src/Explore'
import {Link} from 'react-router-dom'
function Sidebar() {
    return (
        <div className="sidebar">
            <Link to="/">
                <FilterDramaIcon className='icon' />
            </Link>
            <Link to="/">
                <SidebarOption active Icon={HomeIcon} text="Home" />
            </Link>
            <Link to="/Explore">
                 <SidebarOption Icon={SearchIcon} text="Explore" />
            </Link>
            <SidebarOption Icon={NotificationsNoneIcon} text="Sign Up" />
            <Button variant="outline" className="sidebar_tweet" fullWidth>Create Event</Button>
        </div>

     
    )
}

export default Sidebar;
