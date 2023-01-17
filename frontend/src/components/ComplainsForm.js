import "./ContactFormStyles.css";
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

function ComplainsForm() {
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
      <h1>Do you have any complains that you would like addressed?</h1>
      <form ref={form} onSubmit={sendEmail}>
        <label>Subject</label>
        <input name="subject" placeholder="What is the subject ot topic of your complain?"/>
        <label>Message</label>
        <textarea name="message" placeholder="Please type out your complain here for the relevant department" rows={4}/>
        <button>Send Complain</button>
      </form>
    </div>
  );
}

export default ComplainsForm;