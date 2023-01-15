import "./ContactFormStyles.css";
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

function ContactForm() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_mk5j6fc', 'template_u43pxkb', form.current, 'alhwLOSp2yLNOem4D')
      .then((result) => {
          console.log(result.text);
          console.log("booking sent")
        }, (error) => {
            console.log(error.text);
        });
        e.target.reset()
  };

  return (
    <div className="form-container">
      <h1>Specify your Booking Needs and Let Us Handle the rest</h1>
      <form ref={form} onSubmit={sendEmail}>
        <label>Full Name</label>
        <input name="name" placeholder="Name"/>
        <label>Contact Number</label>
        <input name="contact" placeholder="What is your prefered contact number?"/>
        <label>Trip Type</label>
        <select name="triptype">
          <option>Is this a single trip or return trip?</option>
          <option>Single Trip</option>
          <option>Return Trip</option>
        </select>
        <label>Destination</label>
        <input name="destination" placeholder="Travel Destination"/>
        <label>Travel Date</label>
        <input name="date" placeholder="Which date will you be travelling?"/>
        <label>Message</label>
        <textarea name="message" placeholder="Type Any Details We must keep in mind when handling your booking" rows={4}/>
        <button>Send Message</button>
        <a href="/">Booking for Staff Transport instead? Click Here</a>
      </form>
    </div>
  );
}

export default ContactForm;
