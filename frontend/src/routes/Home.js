import Property from "../components/Property";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import TaxiRank from "../assets/Chosen7.jpg"
import CommutersFeedback from "../components/CommutersFeedback";
import ComplainsForm from "../components/ComplainsForm";

function Home() {
  return (
    <>
      <Navbar/>
      <Hero
        cName="hero"
        heroImg={TaxiRank}
        title="Middelburg and District Taxi Association"
        text="Together As One."
        buttonText="Book Now"
        url="/contact"
        btnClass="show"
      />
      <Property/>
      <CommutersFeedback/>
      <ComplainsForm/>
      <Footer/>
    </>
  );
}

export default Home;
