import React from 'react'
import Navbar from './Navbar';
import Header from './Header';
import Works from './Works';
import AboutUs from './AboutUs';
import Services from './Services';
import ContactUs from './ContactUs';
import Footer from './Footer';

const Home = () => {
  return (
    <>
     <Navbar />
     <Header />
     <Works />
     <AboutUs />
     <Services />
     <ContactUs />
     <Footer /> 
    </>
  );
}

export default Home;