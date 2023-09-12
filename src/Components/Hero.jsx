import React from 'react'
import './Hero.css'
import circle from '../assets/round.png';

const Hero = () => {
  return (
    <div>
     <div class="flex justify-center flex-container">
        <div className="flex-container-1">
          <div className="flex-container-2">
              <div className="cont">
                <h1>
                  Best customer management <span>system for Insurance</span> Businesses
                </h1>
                <p>Streamline Your Insurance Business with VITSE.</p>
               <div className="circle">
               <img src={circle} alt="" />
               </div>
              </div>
          </div>
        </div>
    </div>

    </div>
  )
}

export default Hero
