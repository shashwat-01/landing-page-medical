import React from 'react'
import hospital from '../Assets/hospital.jpg'

const Home = () => {
  return (
    <div className="HomePage">
      <header>
        <h1>Book <span style={{color:'#bd2f00',fontWeight:'bold'}}>Free Appointments</span> With Our
            <br></br>Expert Doctors </h1>
      </header>
      <main>
        <p>Get full medical assistance and consulatation for diseases<br/>Hassle-free experience throughout your treatment</p>
        <div className="button-group">
          <button className="button-appointment">
            Book Appointment
          </button>
          <button className="button-phone">
            Call Agent
          </button>
        </div>
      </main>
      <img src={hospital} className="image" alt='banner'></img>
    </div>
  )
}

export default Home
