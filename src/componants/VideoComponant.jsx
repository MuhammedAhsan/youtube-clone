import React from 'react'

const VideoComponant = ({thumbnail, channelImg, title, channelName, views, publishTimeAgo}) => {
    const thumbnailStyle = {
        width:"200px",
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

  return (
    <div>
        <img src={thumbnail} alt="thumbnail" style={thumbnailStyle} />

        <div className="videoDetail" style={videoDetailStyle}>
            <a href='#'><img src={channelImg} alt="channelImg" style={channelImgStyle} /></a>

            <div className="titleNChannel" style={titleNChannelStyle}>
                <h3><a href='#'>{title}</a></h3>
                <p><a href='#'>{channelName}</a></p>
                <p>{views} views • {publishTimeAgo} ago</p>
            </div>
        </div>
    </div>
  )
}

export default VideoComponant