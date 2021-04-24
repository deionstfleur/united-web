import React from 'react'
import '../src/Card.css'

function Card({src, title, location, ranking, description}) {
    return (
        <div className='cards'>
            <img src={src} alt="" />
            <div className="card_info">
                <h2>{title}</h2>
                <h2>{location}</h2>
                <h3>{ranking}</h3>
                <h4>{description}</h4>      
            </div>
        </div>
    )
}

export default Card
