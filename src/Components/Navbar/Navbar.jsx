import React from 'react'
import "./Navbar.css";
import Logo from "./Logo";
import NavContent from './NavContent';
// import Dropdowwn from "./DropdownBtn";
import Button from "./Button";

const Navbar = () => {
  return (
    <nav className="navbar">
        <Logo />
        <NavContent />
        {/* <Dropdowwn title="USDC Ethereum" trigger="click" /> */}
        <Button children="Connect Wallet" />
    </nav>
  )
}

export default Navbar;
