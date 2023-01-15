import Property from "../components/Property";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import TaxiRank from "../assets/Chosen3edit.jpg"

function Home() {
  return (
    <>
      <Navbar/>
      <Hero
        cName="hero"
        heroImg={TaxiRank}
        title="Stay Informed About Your Daily Commute Service"
        text="Dedicated To Serving Our Community Transport Needs."
        buttonText="Book Now"
        url="/contact"
        btnClass="show"
      />
      <Property/>
      <Footer/>
    </>
  );
}

export default Home;
