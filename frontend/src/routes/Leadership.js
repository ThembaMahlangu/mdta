import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HeroImage from '../assets/Chosen5.jpg';
import Leaders from "../components/Leaders";

function Leadership() {
    return (
      <>
        <Navbar/>
        <Hero
          cName="hero-accomodation"
          heroImg={'https://sataxi.co.za/wp-content/uploads/2022/05/SA-Taxi-Exploring-Minibus-Taxi-to-improve-public-transport.jpg'}
          title="MDTA Leadership Structure" 
          btnClass="hide"
        />
        <Leaders/>
        <Footer/>
      </>
    );
  }

export default Leadership;