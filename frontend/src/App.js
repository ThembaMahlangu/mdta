import "./styles.css";
import { Route, Routes } from "react-router-dom";
import Home from "./routes/Home";
import About from "./routes/About";
import Leadership from "./routes/Leadership";
import Contact from "./routes/Contact";
import AdminDashboard from "./routes/AdminDashboard";
import AdminLogin from "./routes/AdminLogin";
import BookingForm from "./routes/BookingForm";
import ScrollToTop from "./components/ScrollToTop";
import DriversFeedback from "./routes/DriversFeedback";

export default function App() {
  return (
    <div className="App">
    <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/driversfeedback" element={<DriversFeedback/>}/>
        <Route path="/leadership" element={<Leadership/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/admindashboard" element={<AdminDashboard/>}/>
        <Route path="/adminlogin" element={<AdminLogin/>}/>
        <Route path="/bookingform" element={<BookingForm/>}/>
      </Routes>
    </div>
  );
}
