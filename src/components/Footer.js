import './Footerstyles.css'

import React from 'react'
import {FaHome, FaInstagram, FaLinkedin, FaMailBulk, FaWhatsapp} from 'react-icons/fa'

const Footer = () => {
  return (
    <div className="footer">
        <div className="footer-container">
            <div className="left">
                <div className="location">
                    <FaHome size={20} style={{color:"#fff", marginRight:"2rem"}}/>
                    <div>
                        <p>IIT Kanpur</p>
                    </div>
                </div>
                <div className="email">
                <h4><FaMailBulk size={20} style={{color:"#fff", marginRight:"2rem"}}/>
                nimmalarithikareddy@gmail.com</h4>
                </div>
            </div>
            {/* <div className="right">
                <h4>Contact Me:</h4>
                <div className="social">
                <FaWhatsapp size={30} style={{color:"#fff", marginRight:"1rem"}}/>
                <FaLinkedin size={30} style={{color:"#fff", marginRight:"1rem"}}/>
                <FaInstagram size={30} style={{color:"#fff", marginRight:"1rem"}}/>
                </div>
            </div> */}
        </div>
    </div>
  )
}

export default Footer