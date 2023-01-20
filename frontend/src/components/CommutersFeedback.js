import React, { useRef } from 'react';
import axios from 'axios';
import "./ContactFormStyles.css";

function CommutersFeedback() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    axios.post('http://localhost:8000/api/commutersfeedback', {
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
      <h1>Do you have any feedback that would help improve our service to you as a customer?</h1>
      <form ref={form} onSubmit={sendEmail}>
        <label>Subject</label>
        <input name="subject" placeholder="What is the subject or topic of your feedback/suggestion?"/>
        <label>Message</label>
        <textarea name="message" placeholder="Please type out your feedback/suggestion here for the relevant department" rows={4}/>
        <button>Send Feedback</button>
      </form>
    </div>
  );
}

export default CommutersFeedback;