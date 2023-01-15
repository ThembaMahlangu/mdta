import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Footer from '../components/Footer';

function BookingForm() {
    const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_mk5j6fc', 'template_tyl9ufr', form.current, 'alhwLOSp2yLNOem4D')
      .then((result) => {
          console.log(result.text);
          console.log("booking sent")
        }, (error) => {
            console.log(error.text);
        });
        e.target.reset()
  };
  
  return (
    <>
        <Navbar/>
        <Hero
            cName = "hero-about"
            heroImg = {"https://www.xtraspace.co.za/sites/default/files/the-leonardo.jpg"}
            title = "Book For Staff Transport"
            text = "We have packages to suit your staff needs"
        />
        <div className="form-container">
            <h1>Specify your Transport Needs</h1>
            <form ref={form} onSubmit={sendEmail}>
                <label>Name</label>
                <input name='name' placeholder="What is your Full Name?"/>
                <label>Contact Number</label>
                <input name='partner' placeholder="What is your prefered contact number?"/>
                <label>Email</label>
                <input name='email' placeholder="What is your Email?"/>
                <label>Number of passengers</label>
                <select>
                  <option>How many people will be transported per day?</option>
                  <option>15 or less</option>
                  <option>More than 15</option>
                </select>
                <label>Message</label>
                <textarea name='message' placeholder='Do you have any specifications we should keep in mind?' rows={4}/>
                <button type='submit'>Submit Booking</button>
                <a href='/contact'>Booking for a trip instead? Click Here</a>
            </form>
        </div>
        <Footer/>
    </>
  )
}

export default BookingForm;