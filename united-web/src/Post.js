import React, {forwardRef} from 'react'
import '../src/Post.css'
import {Avatar} from '@material-ui/core'
import ChatBubbleIcon from '@material-ui/icons/ChatBubbleOutline'
import RepeatIcon from '@material-ui/icons/Repeat'
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder'
import PublishIcon from '@material-ui/icons/Publish'



const Post = forwardRef(({
    displayName,
    username,
    verified,
    text,
    image,
    avatar
}, ref) => { 
    return (
        <div className='post' ref={ref}>
            <div className='post_avatar'>
                  <Avatar src={avatar} />
            </div>
            <div className='post_body'>
                <div className='post_header'>
                    <div className='post_headerText'>
                        <h3>
                            {displayName} <span></span>
                        </h3>
                        <div className="post_headerDescription">
                                <p>{text}</p>
                        </div>
                    </div>
                </div>
                <img src={image} alt="" />
                <div className='post_footer'>
                      <ChatBubbleIcon fontsize='small' />
                      <RepeatIcon fontsize='small'/>
                      <FavoriteBorderIcon  fontsize='small' />
                      <PublishIcon  fontsize='small' />
                </div>
            </div>
        </div>
    );
});

export default Post
