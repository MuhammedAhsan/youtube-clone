import React from 'react'
import { Link } from 'react-router'

const VideoComponant = ({thumbnail, channelImg, title, channelName, views, publishTimeAgo}) => {
    const thumbnailStyle = {
        width:"250px",
        height:"auto",
    }

    const channelImgStyle = {
        width:"30px",
        height:"30px",
        borderRadius:"25px",
        border:"1px solid red"
    }

    const videoDetailStyle = {
        display:"flex",
        justifyContent:"center",
    }

    const titleNChannelStyle = {
        padding:"0px"
    }

    const videoCard = {
        
    }

  return (
    <div style={videoCard}>
        <Link to="/video">
            <Link to="/video"><img src={thumbnail} alt="thumbnail" style={thumbnailStyle} /></Link>

            <div className="videoDetail" style={videoDetailStyle}>
            <Link to="/channel"><img src={channelImg} alt="channelImg" style={channelImgStyle} /></Link>

                <div className="titleNChannel" style={titleNChannelStyle}>
                    <Link to="/video"><h3>{title}</h3></Link>
                    <Link to="/channel"><p>{channelName}</p></Link>
                    <p>{views} views • {publishTimeAgo} ago</p>
                </div>
            </div>
        </Link>
    </div>
  )
}

export default VideoComponant