import React, { useRef } from 'react';
import axios from 'axios';
import "./ContactFormStyles.css";

function CommutersFeedback() {
  const form = useRef();
  const [message, setMessage] = React.useState('');

  const sendEmail = (e) => {
    e.preventDefault();

    axios.post('https://mdtas.onrender.com/api/commutersfeedback', {
        subject: e.target.subject.value,
        message: e.target.message.value,
    })
    .then(response => {
      setMessage('Feedback Successfully Submited');
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
      {message && <p>{message}</p>}
    </div>
  );
}

export default CommutersFeedback;