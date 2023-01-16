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
          heroImg={HeroImage}
          title="MDTA Leadership Structure" 
          btnClass="hide"
        />
        <Leaders/>
        <Footer/>
      </>
    );
  }

export default Leadership;