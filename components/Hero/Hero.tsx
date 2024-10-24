'use client'
import React from "react"

export default function Hero() {
  
  return (
    <div className='main-hero-page'>
      
      <div className='hero-heading'>
        <h1>Count Down Timer</h1>
      </div>

        <div className="time-box">

            <div className="s-h" id="hours">00</div>
            <span className="double-dots">:</span>
            <div className="s-m" id="minutes">00</div>
            <span className="double-dots">:</span>
            <div className="s-s" id="seconds">00</div>
    
            <div className="set-time-box">
                <button className="set-time" type="button">Set Time</button>
            </div>   
        </div>
        <div className="buttons">
            <button className="btn-other" type="button">Start</button>
            <button className="btn-other" type="button">Pause</button>
            <button className="btn-other" type="button">Reset</button>
        </div>
    </div>
  )
}


