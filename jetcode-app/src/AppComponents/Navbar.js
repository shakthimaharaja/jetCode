import React from "react";
import { Link } from "react-router-dom";
import logo from '../Images/logosvg.svg';

const Navbar = () => {
  return (
    <div>
      <Link to="/" style={styles.logo_container}><img src={logo} alt="Logo" style={styles.logo_image} /></Link>
    <nav style={styles.navbar}>
      <Link to="/" style={styles.link}>Home</Link>
      <Link to="/services" style={styles.link}>Services</Link>
      <Link to="/contact" style={styles.link}>Contact Us</Link>
      <Link to="/careers" style={styles.link}>Careers</Link>
      <Link to="/about" style={styles.link}>About</Link>
      
      
    </nav>
     
      </div>
  );
};

const styles = {
  navbar: {
    background: "#003366",
    padding: "10px 20px",
    display: "flex",
    alignItems: "center", /* Align items in a straight line */
    justifyContent: "left", /* Space between logo & links */
    height: "80px", /* Fixed navbar height */
    width: "100%", /* Full-width navbar */
    position: "fixed", /* Sticks to the top */
    top: 0,
    left: 150,
    zIndex: 1000,
  },
  link: {
    color: "white",
    textDecoration: "none",
    fontSize: "18px",
    padding: "8px",
  },
  logo_container: {
    display: "flex",
    alignItems: "center",
    position:"fixed",
    top:"0",
    
  },
  logo_image: {
    height: "120px", /* Logo height independent of navbar */
    width: "auto", /* Maintains aspect ratio */
    marginRight: "20px",
    
  }
};

export default Navbar;
