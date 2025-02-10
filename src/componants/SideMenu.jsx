import React from 'react'
import ButtonWithIcon from './ButtonWithIcon'
import { Link } from 'react-router';
import { TiHome  } from 'react-icons/ti'
import { SiYoutubeshorts, SiYoutubemusic, SiYoutubestudio, SiYoutubekids } from "react-icons/si";
import { MdOutlineSubscriptions, MdOutlineOndemandVideo, MdOutlineWatchLater, MdOutlinedFlag } from "react-icons/md";
import { GoHistory, GoReport } from "react-icons/go";
import { CgPlayList } from "react-icons/cg";
import { SlGraduation, SlTrophy } from "react-icons/sl";
import { AiOutlineLike } from "react-icons/ai";
import { FaUserCircle, FaRegNewspaper } from "react-icons/fa";
import { HiFire } from "react-icons/hi";
import { IoMusicalNotesOutline, IoGameControllerOutline } from "react-icons/io5";
import { FaYoutube } from "react-icons/fa6";
import { CiSettings } from "react-icons/ci";
import { IoIosHelpCircleOutline } from "react-icons/io";

const SideMenu = () => {
    const background ={
        width:"220px",
        padding:"1em",
        color:"#fefefe",
        height:'90vh',
        overflow:'auto',
    }

  return (
    <div className='sidebar' style={background}>
      <Link to="/" ><ButtonWithIcon Icon={TiHome } pageName="Home"/></Link>
      <Link to="/shorts" ><ButtonWithIcon Icon={SiYoutubeshorts} pageName="Shorts"/></Link>
      <Link to="/subscriptions" ><ButtonWithIcon Icon={MdOutlineSubscriptions } pageName="Subscriptions"/></Link>

      <hr style={{border:'1px solid #3f3f3f', margin:'10px auto'}}/>

      <Link to="/#" ><ButtonWithIcon Icon={FaUserCircle} pageName=">"/></Link>
      <Link to="/#" ><ButtonWithIcon Icon={GoHistory} pageName="History"/></Link>
      <Link to="/#" ><ButtonWithIcon Icon={CgPlayList} pageName="Playlists"/></Link>
      <Link to="/#" ><ButtonWithIcon Icon={MdOutlineOndemandVideo} pageName="Your Videos"/></Link>
      <Link to="/#" ><ButtonWithIcon Icon={SlGraduation} pageName="Your Courses"/></Link>
      <Link to="/#" ><ButtonWithIcon Icon={MdOutlineWatchLater} pageName="Watch Later"/></Link>
      <Link to="/#" ><ButtonWithIcon Icon={AiOutlineLike} pageName="Liked Videos"/></Link>

      <hr style={{border:'1px solid #3f3f3f', margin:'10px auto'}}/>

      <h3 style={{fontSize:'1em', paddingLeft:'16px'}}>Subscriptions</h3>
      <Link to="/#" ><ButtonWithIcon Icon={FaUserCircle} pageName="Channel Name"/></Link>

      <hr style={{border:'1px solid #3f3f3f', margin:'10px auto'}}/>

      <h3 style={{fontSize:'1em', paddingLeft:'16px'}}>Explore</h3>
      <Link to="/#" ><ButtonWithIcon Icon={HiFire} pageName="Trending"/></Link>
      <Link to="/#" ><ButtonWithIcon Icon={IoMusicalNotesOutline} pageName="Music"/></Link>
      <Link to="/#" ><ButtonWithIcon Icon={IoGameControllerOutline} pageName="Gaming"/></Link>
      <Link to="/#" ><ButtonWithIcon Icon={FaRegNewspaper} pageName="News"/></Link>
      <Link to="/#" ><ButtonWithIcon Icon={SlTrophy} pageName="Sports"/></Link>
      
      <hr style={{border:'1px solid #3f3f3f', margin:'10px auto'}}/>

      <h3 style={{fontSize:'1em', paddingLeft:'16px'}}>More from YouTube</h3>
      <Link to="/#" ><ButtonWithIcon Icon={FaYoutube} pageName="YouTube Premium"/></Link>
      <Link to="/#" ><ButtonWithIcon Icon={SiYoutubestudio} pageName="YouTube Studio"/></Link>
      <Link to="/#" ><ButtonWithIcon Icon={SiYoutubemusic} pageName="YouTube Music"/></Link>
      <Link to="/#" ><ButtonWithIcon Icon={SiYoutubekids} pageName="YouTube Kids"/></Link>
      
      <hr style={{border:'1px solid #3f3f3f', margin:'10px auto'}}/>

      <Link to="/#" ><ButtonWithIcon Icon={CiSettings} pageName="Settings"/></Link>
      <Link to="/#" ><ButtonWithIcon Icon={MdOutlinedFlag} pageName="Report history"/></Link>
      <Link to="/#" ><ButtonWithIcon Icon={IoIosHelpCircleOutline} pageName="Help"/></Link>
      <Link to="/#" ><ButtonWithIcon Icon={GoReport} pageName="Send Feedback"/></Link>
    </div>
  )
}

export default SideMenu