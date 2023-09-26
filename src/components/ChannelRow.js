import React from 'react'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import './ChannelRow.css'
const ChannelRow = ({image,channel,subs,noOfVideos,description,verified}) => {
  return (
    <div>
    <div className="channelRow">
    <AccountCircleIcon className="channelRow__logo" alt={channel} src={image}/>
    <div className="channelRow__text">
        <h4>{channel}{verified && <CheckCircleIcon/>}</h4>
        <p>{subs} subscribers • {noOfVideos} videos</p>
        <p>{description}</p>
    </div>
    </div>
    </div>      
          
  )
}

export default ChannelRow