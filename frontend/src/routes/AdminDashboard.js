import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Footer from '../components/Footer';
import axios from 'axios';
import '../components/AdminDashboard.css';

function AdminDashboard() {
  const [driversfeedback, setDriversfeedback] = useState([]);
  const [commutersfeedback, setCommutersfeedback] = useState([]);
  const [complains, setComplains] = useState([]);
  const [staffbookings, setStaffbookings] = useState([]);
  const [tripbookings, setTripbookings] = useState([]);
  
  useEffect(() => {
    const token = localStorage.getItem('token');
    axios.get('http://localhost:8000/api/driversfeedback', {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }).then(response => setDriversfeedback(response.data))
      .catch(err => console.log(err));
  
    axios.get('http://localhost:8000/api/commutersfeedback', {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }).then(response => setCommutersfeedback(response.data))
      .catch(err => console.log(err));
  
    axios.get('http://localhost:8000/api/complains', {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }).then(response => setComplains(response.data))
      .catch(err => console.log(err));
  
    axios.get('http://localhost:8000/api/staffbookings', {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }).then(response => setStaffbookings(response.data))
      .catch(err => console.log(err));
  
    axios.get('http://localhost:8000/api/tripbookings', {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }).then(response => setTripbookings(response.data))
      .catch(err => console.log(err));
  }, []);  

  const TripBookingsTable = (data) => {
    return (
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Number</th>
            <th>Trip Type</th>
            <th>Destination</th>
            <th>Date</th>
            <th>Message</th>
          </tr>
        </thead>
        <tbody>
          {data.map(item => (
            <tr key={item._id}>
              <td>{item.name}</td>
              <td>{item.number}</td>
              <td>{item.triptype}</td>
              <td>{item.destination}</td>
              <td>{item.date}</td>
              <td>{item.message}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
  
  const StaffBookingsTable = (data) => {
    return (
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Number</th>
            <th>Email</th>
            <th>No of Passengers</th>
            <th>Message</th>
          </tr>
        </thead>
        <tbody>
          {data.map(item => (
            <tr key={item._id}>
              <td>{item.name}</td>
              <td>{item.number}</td>
              <td>{item.email}</td>
              <td>{item.passengers}</td>
              <td>{item.message}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  } 

  const DriversFeedbackTable = (data) => {
    return (
      <table>
        <thead>
          <tr>
            <th>Topic</th>
            <th>Message</th>
          </tr>
        </thead>
        <tbody>
          {data.map(item => (
            <tr key={item._id}>
              <td>{item.subject}</td>
              <td>{item.message}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  } 

  const CommutersFeedbackTable = (data) => {
    return (
      <table>
        <thead>
          <tr>
            <th>Topic</th>
            <th>Message</th>
          </tr>
        </thead>
        <tbody>
          {data.map(item => (
            <tr key={item._id}>
              <td>{item.subject}</td>
              <td>{item.message}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  } 

  const ComplainsTable = (data) => {
    return (
      <table>
        <thead>
          <tr>
            <th>Topic</th>
            <th>Message</th>
          </tr>
        </thead>
        <tbody>
          {data.map(item => (
            <tr key={item._id}>
              <td>{item.subject}</td>
              <td>{item.message}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  } 
  return (
    <>
      <Navbar/>
      <Hero
        cName="hero-contact"
        heroImg={"https://s.inyourpocket.com/gallery/218272.jpg"}
        title="Admin Dashboard"
        btnClass="hide"
      />
      <div className="admin-dashboard-container">
        <h2>Drivers Feedback</h2>
        {DriversFeedbackTable(driversfeedback)}
        <h2>Commuters Feedback</h2>
        {CommutersFeedbackTable(commutersfeedback)}
        <h2>Complains</h2>
        {ComplainsTable(complains)}
        <h2>Staff bookings</h2>
        {StaffBookingsTable(staffbookings)}
        <h2>Trip bookings</h2>
        {TripBookingsTable(tripbookings)}
      </div>
      <Footer/>
    </>
  );
}

export default AdminDashboard;