import axios from 'axios';
import React, { useRef } from 'react';
import "./ContactFormStyles.css";

function ContactForm() {
  const form = useRef();
  const [message, setMessage] = React.useState('');

  const sendEmail = (e) => {
    e.preventDefault();

    axios.post('http://44.203.139.39:8000/api/tripbookings', {
        name: e.target.name.value,
        number: e.target.number.value,
        triptype: e.target.triptype.value,
        destination: e.target.destination.value,
        date: e.target.date.value,
        message: e.target.message.value,
    })
    .then(response => {
        setMessage("Booking Submitted Successfully")
        console.log("booking sent");
    })
    .catch(error => {
        console.log(error);
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
        <input name="number" placeholder="What is your prefered contact number?"/>
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
        <button>Send Booking</button>
        <a href="/bookingform">Booking for Staff Transport instead? Click Here</a>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
}

export default ContactForm;