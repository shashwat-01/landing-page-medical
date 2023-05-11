import React from 'react'
import illustration from'../Assets/illustration.jpg'

function Description() {
  return (
    <div className='description_container'>
        <div className="text-image">
            <div className="text-image__text">
                <h2>Why Burlycare?</h2>
                <b>1. Prior safe for COVID 19</b>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                <b>2. Prime Surgery Experience</b>
                <p>
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                </p>
                <b>3. Medical Expertise with Best Technology</b>
                <p>labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            </div>
            <div className="text-image__image">
                <img src={illustration} alt={'HospitalImage'} />
            </div>
        </div>
    </div>
    
  )
}

export default Description
