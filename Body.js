import React from 'react';
import './Body.css'; // Optional: CSS file for custom styling

// Import your images
// Import your images
import Childimage from '../../assets/Childimage.jpg';
import person1 from '../../assets/Person 1.jpg';
import person2 from '../../assets/Person 2.jpg';
import person3 from '../../assets/Person 3.jpg';
import doctorIcon from '../../assets/Doctor2.jpg';
// import calmIcon from '../../assets/Doctor3.jpg';

const Body = () => {
  return (
    <div className="body-container">
      {/* Main Header Section */}
      <section className="header-section">
        <h1>Mental health is wealth</h1>
        <p>To live your life to the fullest, we’re continuing to find ways to prevent mental health problems.</p>
        <div className="people-images">
          <div className="person">
            <img src={person1} alt="Happier person" style={{width:"100px"}}/>
            <span>Happier</span>
          </div>
          <div className="person">
            <img src={person2} alt="Calm person" style={{width:"100px"}}/>
            <span>Calm</span>
          </div>
          <div className="person">
            <img src={person3} alt="Happy" style={{width:"100px"}}/>
            <span>Happy</span>
          </div>
        </div>
      </section>

      {/* Help Section */}
      <section className="help-section">
        <h2>How can we help you?</h2>
        <p>We work with world-class experts to create wellbeing human-centered tools and courses to unite sustainable growth.</p>
        <p>We take data-driven decisions around your wellbeing strategy.</p>
        <img src={doctorIcon} alt="Helping children grow confidence" />
        <hr style={{color:"transparent"}}/>
        <button className="get-help-button">Get Help</button>
      </section>

      {/* Confidence Section */}
      <section className="confidence-section">
        <h2>We help you to grow confidence at any age</h2>
        <p>Caring is always free</p>
        <p>Taking regular practice can induce structural changes in the brain which help reduce stress and enhance sleep quality.</p>
        <img src={Childimage} alt="Helping children grow confidence" />
        {/* <img src={doctorIcon} alt="Helping children grow confidence" />
        <img src={calmIcon} alt="Helping children grow confidence" /> */}
      </section>
    </div>
  );
};

export default Body;
