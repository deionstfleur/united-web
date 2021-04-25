import React from 'react'
import '../src/Sidebar.css'
import FilterDramaIcon from '@material-ui/icons/FilterDrama';
import SidebarOption from './SidebarOption'
import HomeIcon from '@material-ui/icons/Home'
import SearchIcon from '@material-ui/icons/Search'
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone'
import AccountBalanceIcon from '@material-ui/icons/AccountBalance';
import GroupIcon from '@material-ui/icons/Group';
import {Button} from '@material-ui/core'
import Explore from '../src/Explore'
import {Link} from 'react-router-dom'

function Sidebar() {
    return (
        <div className="sidebar">
            <Link to="/front" style={{textDecoration: 'none', color: 'black'}}>
                <FilterDramaIcon className='icon'  />
            </Link>
            <Link to="/" style={{textDecoration: 'none'}}>
                <SidebarOption active Icon={HomeIcon} text="Home" />
            </Link>
            <Link to="/Explore" style={{textDecoration: 'none', color: 'black'}}>
                 <SidebarOption Icon={SearchIcon} text="Explore" />
            </Link>
            {/* <SidebarOption Icon={NotificationsNoneIcon} text="Sign Up" /> */}
            <Link to="/Friends" style={{textDecoration: 'none', color: 'black'}}>
                 <SidebarOption Icon={GroupIcon} text="Friends" />
            </Link>
            <Link to="/Communities" style={{textDecoration: 'none', color: 'black'}}>
                <SidebarOption Icon={AccountBalanceIcon} text="Communities" />
            </Link>
            <Button variant="outline" className="sidebar_tweet" fullWidth>Create Event</Button>
        </div>

     
    )
}

export default Sidebar;
