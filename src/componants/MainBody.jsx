import React from 'react'
import VideoComponant from './VideoComponant'

const MainBody = () => {
  const videos = {
    thumbnail:"src/assets/thumbnail.jpg",
    channelImg:"src/assets/ghost.jpg",
    title:"This is my first video",
    channelName:"Irfan Junejo",
    views:45000,
    publishTimeAgo:"2 hr",
  }

  const background ={
    display:"flex",
    gridTemplateColumn:"1fr 1fr 1fr",
    gap:"20px",
    color:"#fefefe",
    padding:"1.2em",
    overflow:'auto',
  }

  return (
    <div style={background}>
      <VideoComponant thumbnail={videos.thumbnail} channelImg={videos.channelImg} title={videos.title} channelName={videos.channelName} views={videos.views} publishTimeAgo={videos.publishTimeAgo} />

      <VideoComponant thumbnail={videos.thumbnail} channelImg={videos.channelImg} title={videos.title} channelName={videos.channelName} views={videos.views} publishTimeAgo={videos.publishTimeAgo} />

      <VideoComponant thumbnail={videos.thumbnail} channelImg={videos.channelImg} title={videos.title} channelName={videos.channelName} views={videos.views} publishTimeAgo={videos.publishTimeAgo} />

    </div>
  )
}

export default MainBody