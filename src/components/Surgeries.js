import React from 'react'
import surgery from'../Assets/surgery.jpg'

function Surgeries() {
  return (
    <div className="surgeries">
      <header className="surgeries__header">
        <h1>Surgeries We Provide</h1>
      </header>
      <main className="surgeries__main">
        <div className="surgeries__cards">
          <div className="surgeries__card">
            <img src={surgery} alt="Surgery 1" />
            <h2>Cardiac Surgery</h2>
            <p>Our expert surgeons provide advanced surgical techniques for the treatment of heart conditions.</p>
          </div>
          <div className="surgeries__card">
            <img src={surgery} alt="Surgery 2" />
            <h2>Neurosurgery</h2>
            <p>We offer cutting-edge neurosurgical treatments for patients with complex brain and spine disorders.</p>
          </div>
          <div className="surgeries__card">
            <img src={surgery} alt="Surgery 3" />
            <h2>Orthopedic</h2>
            <p>Our orthopedic surgeons specialize in the diagnosis and treatment of injuries and disorders of the musculoskeletal system.</p>
          </div>
          <div className="surgeries__card">
            <img src={surgery} alt="Surgery 4" />
            <h2>Plastic Surgery</h2>
            <p>We offer a wide range of cosmetic and reconstructive surgical procedures to help you look and feel your best.</p>
          </div>
          <div className="surgeries__card">
            <img src={surgery} alt="Surgery 5" />
            <h2>Urologic Surgery</h2>
            <p>Our urologic surgeons provide comprehensive care for patients with disorders of the urinary tract and male reproductive system.</p>
          </div>
        </div>
        <div className="vertical-center">
            <button className='view-btn'>View All</button>
        </div>
      </main>
    </div>
  )
}

export default Surgeries
