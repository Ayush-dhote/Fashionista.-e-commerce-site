import React from 'react'
import '../footer.css'

const Footer = () => {
  return (
    <div className='footer'>
      <div className='sec'>
        <p>Fashionista<span>.</span></p>
      </div>
      <div className='sec'>
        <h4 id='head'>Connect Us</h4>
          <div id='cicon'>
            <div class="icon"><i class="ri-facebook-fill"></i></div>
            <div class="icon"><i class="ri-twitter-line"></i></div>
            <div class="icon"><i class="ri-linkedin-fill"></i></div>
            <div class="icon"><i class="ri-instagram-line"></i></div>
          </div>
      </div>
      <div id='con' className='sec'>
          <input id='mailed' type="text" placeholder='subscribe us'/>
          <input id='subs' type="submit"/>
      </div>

    </div>
  )
}

export default Footer