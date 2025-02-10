import React from "react";
import { FiMenu } from "react-icons/fi";
import { CiSearch } from "react-icons/ci";
import { IoIosMic } from "react-icons/io";
import { IoAddSharp } from "react-icons/io5";
import { FaRegBell } from "react-icons/fa6";
import { FaRegUserCircle } from "react-icons/fa";

const Header = () => {
  const style = {
    display: "flex",
    justifyContent: "space-between",
    alignItems:"center",
    marginBottom: "5px",
    padding: "12px 1.2em",
    borderRadius: "4px",
    color: "#fefefe",
    height:"4vh",
  };

  const image = {
    maxWidth: "auto",
    height: "1.3em",
    marginLeft: "1em",
  };

  const logo = {
    display: "flex",
    justifyContent: "center",
    alignItems:"center",
    gap:"5px",
  };

  const inputStyle = {
    fontSize:"1rem",
    backgroundColor: "#0f0f0f",
    width:"30vw",
    padding:"10px 20px",
    border:"1px solid #262626",
    borderRadius:"25px 0px 0px 25px",
  };

  const searchStyle = {
    display:"flex",
    alignItems:"center",
    justifyContent:"center",
    gap:"10px",
    borderRadius:"25px",
    backgroundColor:"#262626",
    paddingRight:"15px"
  };

  const midDiv = {
    display:"flex",
    alignItems:"center",
    gap:"10px",
  };

  const mic = {
    display:"flex",
    padding:"12px",
    borderRadius:"25px",
    backgroundColor:"#262626",
    cursor:"pointer",
  };

  const create = {
    display:"flex",
    alignItems:"center",
    justifyContent:"center",
    gap:"4px",
    padding:"8px 12px 8px 8px",
    borderRadius:"25px",
    backgroundColor:"#262626",
    cursor:"pointer",
  };

  const settings = {
    display:"flex",
    alignItems:"center",
    gap:"8px"
  }

  return (
    <div style={style}>
      {/* Logo and Side Menu */}
      <div className="IconMenu" style={logo}>
        <FiMenu size={24} />
        <img style={image} src="src/assets/youtube-logos-twc.png" alt="YouTube Logo"/>
      </div>

      {/* Search Bar */}
      <div style={midDiv}>
        <div className="SearchBar" style={searchStyle}>
          <input type="text" style={inputStyle} placeholder="Search" />
          <CiSearch size={24} cursor="pointer"/>
        </div>

        <div style={mic}><IoIosMic size={22}/></div>
      </div>

      {/* Create, Notifications & Settings */}
      <div style={settings}>
        <div style={create}><IoAddSharp size={24}/> <span style={{fontSize:"0.8em"}}>Create</span></div>

        <div style={mic}><FaRegBell  size={20}/></div>

        <div style={mic}><FaRegUserCircle  size={20}/></div>

      </div>
    </div>
  );
};

export default Header;
