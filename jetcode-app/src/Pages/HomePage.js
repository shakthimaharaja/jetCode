import React from 'react';
import styles from '../Styles/Styles.css';


function HomePage (){
   return(
    <div>
      <div style={styles.container}>
        {/* Header Section */}
        <div className='background'></div>
        <div className='text'>
        <header className='header'>
        </header>
  
        {/* Main Content Section */}
        <main className='mainContent'>
          <h1 className='heading'>Welcome to Wingcodes</h1>
          <p className='description'>
            At Wingcodes, we deliver innovative IT products that empower businesses
            to streamline operations and enhance user experiences. Our solutions
            are built with cutting-edge technologies to meet the evolving needs of
            your industry.
          </p>
          {/* <Link to="/services" style={styles.button}>Explore Our Services</Link> */}
        </main>
        
         {/* Footer Section */}
      </div>  
      </div>
      <footer className='footer'>
          <p classname='footerText'>© 2025 Wingcodes. All rights reserved.</p>
        </footer>
    </div>
      
    );
    
};

export default HomePage;