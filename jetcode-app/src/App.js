import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./AppComponents/Navbar";
import HomePage from "./Pages/HomePage";
import AboutPage from "./Pages/AboutPage";
import CareersPage from "./Pages/CareersPage";
import ContactPage from "./Pages/ContactPage";
import ServicePage from "./Pages/ServicesPage";
import styles from './Styles/Styles.css';



const App = () => {
  return (<div>
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/services" element={<ServicePage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/careers" element={<CareersPage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </Router>
  
        </div>
  );
};

export default App;