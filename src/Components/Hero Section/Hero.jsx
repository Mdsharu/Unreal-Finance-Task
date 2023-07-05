import React from 'react';
import "./Hero.css";
import Img from "../../assets/UnrealFin_Image.jpg";
import { HiExternalLink } from "react-icons/hi";

const Hero = () => {
  return (
    <div className='hero'> 
        <div class="Content">
            <img src={Img} height={55} alt="Ethereum" />
            <h1 class="token-pair__names heading heading--emphasized text-color--1">USDC <span class="divider"> | </span><span class="ethereum"> Ethereum</span></h1>
        </div>
        <div class="sub-content"><label class="label">0xc3d688B66703497DAA19211EEdff47f25384cdc3 </label>
            <a href="https://etherscan.io/address/0xc3d688B66703497DAA19211EEdff47f25384cdc3" target="_blank" rel="noreferrer" class="line-icon"><HiExternalLink color='#7A8A99' size="16px"/></a>
        </div>
        <div className='graphContent'>
          <div class="content_1">
            <label class="content_text1">Total Collateral</label>
            <h1 class="content_value1">$523.92M</h1>
          </div>
          <div class="content_2">
            <label class="content_text2">Total Borrowing</label>
            <h1 class="content_value2">$241.70M</h1>
          </div>
        </div>
    </div>
  )
}

export default Hero;
