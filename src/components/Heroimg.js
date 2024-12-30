import './Heroimgstyles.css'

import React from 'react'

import Portfoliocoverimg from "../assets/portfolio cover 1.webp"
import {Link} from 'react-router-dom'

const Heroimg = () => {
  return (
    <div className="hero">
      <div className="mask">
        <img className="into-img" src={Portfoliocoverimg} alt="Portfoliocoverimg"/>
      </div>
      <div className="content">
        <p>HI, THIS IS</p>
        <h1>Rithika</h1>
        <div>
            <Link to="/about" className="btn">ABOUT</Link>
            <Link to="/projects" className="btn btn-light">Projects</Link>
        </div>
      </div>
    </div>
  )
}

export default Heroimg