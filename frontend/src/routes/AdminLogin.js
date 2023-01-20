import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Footer from '../components/Footer';

function AdminLogin() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post('http://localhost:8000/api/users/login', { email, password })
      .then(response => {
        localStorage.setItem('token', response.data.token);
        navigate('/admindashboard');
      })
      .catch(err => {
        setError(err.response.data.error);
      });
  }
  return (
    <>
      <Navbar/>
      <Hero
        cName = "hero-about"
        heroImg = {"https://www.xtraspace.co.za/sites/default/files/the-leonardo.jpg"}
        title = "Admin Login"
        text = "Welcome back! Please login below"
      />
      <div className="form-container">
        {error && <p className="error-message">{error}</p>}
        <form onSubmit={handleSubmit}>
          <input placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)}/>
          <input placeholder="Enter Your Password" type="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
          <button>Login</button>
        </form>
      </div>
      <Footer/>
    </>
  )
}

export default AdminLogin;