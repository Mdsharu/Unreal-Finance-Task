import React from 'react';
import logo from "../../assets/UnrealLogo.png";
import "./Logo.css";

const Logo = () => {
    return (
        <div className='logo'>
            <img src={logo} width={120} alt="Logo" />
        </div>
      )
} 


export default Logo;
