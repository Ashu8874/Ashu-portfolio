import React from "react";
import './Footer.css'

const Footer = () =>{
    return(
        <div className="footer">
            <hr/>
          <div className="footer-bottom">
          <p className="footer-left">@ 2024 Ashutosh Singh. All rights reserved.</p>
           <div className="footer-right">
            <p>Term of Services</p>
            <p>Privacy Policy</p>
            <p>Connect with me</p>
           </div>
          </div>
        </div>
    );
}

export default Footer;