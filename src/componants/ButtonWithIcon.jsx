import React from 'react'
import '../index.css'

const ButtonWithIcon = ({Icon, pageName}) => {
    const sideBtn = {
        display:"flex",
        alignItems:"center",
        justifyContent:"left",
        gap:"16px",
        padding:"8px 16px",
        borderRadius:"12px",
        cursor:"pointer",
        marginBottom:"4px",
    }

  return (
    <div style={sideBtn} className='btnWithIcon'>
        <Icon size={22} />
        <span style={{fontSize:"0.9em"}}>{pageName}</span>
    </div>
  )
}

export default ButtonWithIcon