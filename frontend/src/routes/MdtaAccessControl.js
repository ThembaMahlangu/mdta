import React, { useRef } from 'react';
import axios from 'axios';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import Navbar from '../components/Navbar';
import "../components/ContactFormStyles.css";

function MdtaAccessControl() {
  const form = useRef();
  const [message, setMessage] = React.useState('');

  const createUser = (e) => {
    e.preventDefault();
    axios.post('http://localhost:8000/api/users', {
        name: e.target.name.value,
        email: e.target.email.value,
        role: e.target.role.value,
        password: e.target.password.value
    })
    .then(response => {
        setMessage('User Created');
        console.log("User created");
    })
    .catch(error => {
        console.log(error);
    });
    e.target.reset()
  };

  return (
    <>
        <Navbar/>
        <Hero
            cName = "hero-about"
            heroImg = {"https://www.xtraspace.co.za/sites/default/files/the-leonardo.jpg"}
            title = "MDTA Access Control"
            text = "Please register an admin for dashboard access"
        />
        <div className="form-container">
        <h1>Create a new user</h1>
            <form ref={form} onSubmit={createUser}>
                <label>Name</label>
                <input name='name' placeholder="What is your Full Name?"/>
                <label>Email</label>
                <input name='email' placeholder="What is your Email?"/>
                <label>Role</label>
                <select name='role'>
                  <option>Select your role</option>
                  <option>main</option>
                  <option>bookings</option>
                  <option>complains</option>
                </select>
                <label>Password</label>
                <input name='password' type='password' placeholder="Enter a password"/>
                <button type='submit'>Create User</button>
            </form>
            {message && <p>{message}</p>}
        </div>
        <Footer/>
    </>
  )
}
export default MdtaAccessControl;