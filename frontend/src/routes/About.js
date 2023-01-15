import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import AboutUs from "../components/AboutUs";
import HeroImage from "../assets/Chosen5edit.jpg";

function About() {
  return (
    <>
      <Navbar/>
      <Hero
        cName="hero-about"
        heroImg={HeroImage}
        title="About Us"
        btnClass="hide"
      />
      <AboutUs/>
      <Footer/>
    </>
  );
}

export default About;
