import React from 'react'

import './VideoRow.css'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
const VideoRow = ({ image, title, channel, views, timestamp, channelImage}) => {
  return (
    
    <div className='videoRow'>
        <img className="videoRow_thumbnail" src={image} alt="" />
        <div className='videoRow__info'>
        <AccountCircleIcon className='videoRow__avatar'
        alt={channel}

        src={channelImage}
        />
        <div className='videoRow__text'>
            <h4>
            {title}
            </h4>
            <p>{channel}</p>
            <p >{views} {timestamp}</p>
        </div>
        </div>
    </div>
    
  )
}

export default VideoRow