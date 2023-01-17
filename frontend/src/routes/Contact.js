import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import AboutImg from "../assets/Chosen5.jpg";
import Footer from "../components/Footer";
import ContactForm from "../components/ContactForm";

function Contact() {
  return (
    <>
      <Navbar/>
      <Hero
        cName="hero-contact"
        heroImg={AboutImg}
        title="Book A Trip"
<<<<<<< HEAD
        buttonText="Staff Transport"
=======
        buttonText="Staff Transport Here"
>>>>>>> eab0c2a (fixing it back)
        btnClass="show"
        url="/bookingform"
      />
      <ContactForm/>
      <Footer/>
    </>
  );
}

export default Contact;
