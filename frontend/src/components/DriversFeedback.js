import "./ContactFormStyles.css";
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

function DriversFeedbacks() {
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
      <h1>Do you have any feedback that would help improve our service for drivers?</h1>
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

export default DriversFeedbacks;