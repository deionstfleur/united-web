import React, {useState} from 'react'
import { Avatar ,Button } from '@material-ui/core'
import db from './firebase'
import '../src/TweetBox.css'

function TweetBox() {
    const [tweetMessage, setTweetMessage] = useState([])
    const [tweetImage, setTweetImage] = useState([]) 

    const sendTweet = e => {
        e.preventDefault();

        db.collection('posts').add({
            displayName: 'Deion St.Fleur',
            username: 'dst',
            verified: true,
            text: tweetMessage,
            image: tweetImage,
            avatar: 
            "https://images.vexels.com/media/users/3/129616/isolated/preview/fb517f8913bd99cd48ef00facb4a67c0-businessman-avatar-silhouette-by-vexels.png"
        });
        setTweetMessage("");
        setTweetImage("");
    }


    return (
        <div className="tweetBox">
            <form>
                <div className="tweetBox__input">
                    <Avatar src="https://images.vexels.com/media/users/3/129616/isolated/preview/fb517f8913bd99cd48ef00facb4a67c0-businessman-avatar-silhouette-by-vexels.png" />
                    <input
                    value={tweetImage}
                    onChange={e => setTweetMessage(e.target.value)}
                     value={tweetMessage} 
                     placeholder='Hello'
                     />
                </div>
                    <input
                     value={tweetImage}
                    onChange={e => setTweetImage(e.target.value)}
                     className="tweetBox_imageInput" 
                     placeholder='Optional: Enter image' 
                     type="text" />
                <Button type="submit" onClick={sendTweet} className='tweetBox_tweetButton'>Post</Button>
            </form>
        </div>
    )
}

export default TweetBox
