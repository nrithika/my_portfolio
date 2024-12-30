import './Heroimg3styles.css'

import React from 'react'

const Heroimg3 = () => {
  return (
    <div className="heroimg">
        <div className="heading">
            <h1>Let's Talk.</h1>
            <div className="form">
                <form>
                    <label>Your Name</label>
                    <input type="text"></input>
                    <label>Email</label>
                    <input type="email"></input>
                    <label>Subject</label>
                    <input type="text"></input>
                    <label>Message</label>
                    <textarea rows="1" placeholder='Type your message here'/>
                    <button className="btn">Submit</button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Heroimg3