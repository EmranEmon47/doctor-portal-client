import { Routes, Route, Link } from "react-router-dom";
import './App.css';
import About from "./Pages/About/About";
import Appointment from "./Pages/Appointment/Appointment";
import Contact from "./Pages/Contact/Contact";
import { Home } from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import Reviews from "./Pages/Reviews/Reviews";
import Navbar from './Pages/Shared/Navbar';

function App() {
  return (
    <div >
     <Navbar></Navbar>
     <Routes>
        <Route path="/" element={<Home />} />
        <Route path="appointment" element={<Appointment />} />
        <Route path="reviews" element={<Reviews />} />
        <Route path="contact" element={<Contact />} />
        <Route path="about" element={<About />} />
        <Route path="login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
