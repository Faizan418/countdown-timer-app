import React from 'react'

export default function Hero() {
  return (
    <div className='main-hero-page'>
      
      <div className='hero-heading'>
        <h1>CountDown Timer</h1>
      </div>

      <div className="time-box">
                  <div className="s-h" id='set-h'>
                    00
                  </div>
                    <span className="dubble-dots">:</span>
                  <div className="s-m" id='set-m'>
                    00
                  </div>
                    <span className="dubble-dots">:</span>
                  <div className="s-s" id='set-s'>
                    00
                  </div>
 
                  <div className="set-time-box">
                         <button className="set-time" type="button">Set Time</button>
                    </div>

                    <div className="main-time">
                        <div className="w-h">
                            00
                        </div>
                        <span className="dubble-dot"> " </span>
                        <div className="w-m">
                            00
                        </div>
                        <span className="dubble-dot"> " </span>
                        <div className="w-s">
                            00
                        </div>
                      </div>
                    </div>
                    <div className="buttonss">
                <button className="btn-other" type="submit">Start</button>
                <button className="btn-other" type="submit">Puse</button>
                <button className="btn-other" type="submit">Reset</button>
            </div>
    </div>
  )
}


