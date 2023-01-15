import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Leaders from '../assets/Chosen5.jpg';

function Leadership() {
    return (
      <>
        <Navbar/>
        <Hero
          cName="hero-accomodation"
          heroImg={Leaders}
          title="MDTA Leadership Structure" 
          btnClass="hide"
        />
        <Footer/>
      </>
    );
  }

export default Leadership;