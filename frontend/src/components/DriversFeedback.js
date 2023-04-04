import React, { useRef } from 'react';
import axios from 'axios';
import "./ContactFormStyles.css";

function DriversFeedbacks() {
  const form = useRef();

  const sendFeedback = (e) => {
    e.preventDefault();

    axios.post('https://mdtas.onrender.com/api/driversfeedback', {
        subject: e.target.subject.value,
        message: e.target.message.value,
    })
    .then(response => {
        console.log("feedback sent");
    })
    .catch(error => {
        console.log(error);
    });
    e.target.reset()
  };

  return (
    <div className="form-container">
      <h1>Do you have any feedback that would help improve our service for drivers?</h1>
      <form ref={form} onSubmit={sendFeedback}>
        <label>Subject</label>
        <input name="subject" placeholder="What is the subject or topic of your feedback/suggestion?"/>
        <label>Message</label>
        <textarea name="message" placeholder="Please type out your feedback/suggestion here for the relevant department" rows={4}/>
        <button>Send Feedback</button>
      </form>
    </div>
  );
}

export default DriversFeedbacks;