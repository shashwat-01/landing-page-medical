import React from 'react'

function Numbers() {
  return (
    <div className="company-stats">
      <h2>BurlyCare in Numbers</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce et aliquam mauris. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt</p>
      <div className="stats-icons">
        <div className="stats-icon">
            <div className='rectangle-icon'></div>
          <p>300+ <br/><span className='icon_text'>Customers</span></p>
        </div>
        <div className="stats-icon">
            <div className='rectangle-icon'></div>
          <p>100+ <br/><span className='icon_text'>Hospitals</span></p>
        </div>
        <div className="stats-icon">
        <div className='rectangle-icon'></div>
          <p>200+ <br/><span className='icon_text'>Doctors</span></p>
        </div>
        <div className="stats-icon">
        <div className='rectangle-icon'></div>
          <p>3+ <br/><span className='icon_text'>Cities</span></p>
        </div>
      </div>
    </div>
  )
}

export default Numbers
