import React from 'react';
import './AboutUs.css'; 
import Navbar from '../../components/Navbar/Navbar'
import aboutUsImage from '../Aboutus/impimg.jpg'; 

const AboutUs = () => {
  return (
    <>
    <Navbar/>
    <div className="about-us-container">
    <div className="about-us-photo">
        <img src={aboutUsImage} alt="About Us" />
      </div>
      <div className="about-us-text">
        <h1>About Us</h1>
        <p>
          Welcome to Fruit.ai! We are dedicated to providing the best fruit-related information and services. Our team of experts is passionate about helping you make informed choices about the fruits you consume. With our advanced technology and user-friendly interface, we strive to make fruit information easily accessible and engaging for everyone.
        </p>
        <p>
          Our mission is to promote healthier lifestyles through better knowledge about fruits. We believe that with the right information, you can make choices that contribute to your overall well-being. Thank you for choosing Fruit.ai!
        </p>
      </div>
    </div>
    </>
  );
};

export default AboutUs;
