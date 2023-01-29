import React, { useRef } from 'react';
import axios from 'axios';
import "./ContactFormStyles.css";

function ComplainsForm() {
  const form = useRef();
  const [message, setMessage] = React.useState('');

  const sendComplain = (e) => {
    e.preventDefault();

    axios.post('https://server.mdtas.co.za:8000/api/complains', {
        subject: e.target.subject.value,
        message: e.target.message.value,
    })
    .then(response => {
        setMessage("Complain Sent Successfully")
        console.log("complain sent");
    })
    .catch(error => {
        console.log(error);
    });
    e.target.reset()
  };

  return (
    <div className="form-container">
      <h1>Do you have any complains that you would like addressed?</h1>
      <form ref={form} onSubmit={sendComplain}>
        <label>Subject</label>
        <input name="subject" placeholder="What is the subject ot topic of your complain?"/>
        <label>Message</label>
        <textarea name="message" placeholder="Please type out your complain here for the relevant department" rows={4}/>
        <button>Send Complain</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
}

export default ComplainsForm;