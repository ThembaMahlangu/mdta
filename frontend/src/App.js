import "./styles.css";
import { Route, Routes } from "react-router-dom";
import Home from "./routes/Home";
import About from "./routes/About";
import Leadership from "./routes/Leadership";
import Contact from "./routes/Contact";
import PartnerRegister from "./routes/PartnerRegister";
import PartnerLogin from "./routes/PartnerLogin";
import PartnerDashboard from "./routes/PartnerDashboard";
import AdminDashboard from "./routes/AdminDashboard";
import AdminLogin from "./routes/AdminLogin";
import Addp from "./routes/Addp";
import BookingForm from "./routes/BookingForm";

export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/leadership" element={<Leadership/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/partnerregister" element={<PartnerRegister/>}/>
        <Route path="/partnerlogin" element={<PartnerLogin/>}/>
        <Route path="/partnerdashboard" element={<PartnerDashboard/>}/>
        <Route path="/admindashboard" element={<AdminDashboard/>}/>
        <Route path="/adminlogin" element={<AdminLogin/>}/>
        <Route path="/addp" element={<Addp/>}/>
        <Route path="/bookingform" element={<BookingForm/>}/>
      </Routes>
    </div>
  );
}
