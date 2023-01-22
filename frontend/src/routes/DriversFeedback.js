import React from 'react'
import Hero from '../components/Hero'
import Navbar from '../components/Navbar'
import AboutImg from "../assets/Chosen5.jpg";
import DriversFeedbacks from "../components/DriversFeedback";
import Footer from '../components/Footer';

function DriversFeedback() {
  return (
    <>
        <Navbar/>
        <Hero
        cName="hero-contact"
        heroImg={AboutImg}
        title="Drivers Feedback"
        btnClass="hide"
        />
        <DriversFeedbacks/>
        <Footer/>
    </>
  )
}

export default DriversFeedback