import React from 'react';
import One from '../one/One';
import What from '../what/What';
import Me from '../me/Me';
import Navbar from '../../components/navbar/Navbar';
import Footer from '../../components/footer/Footer';

const Home = ()=> {
  return (
    <>
      <Navbar />
      <One />
      <What />
      <Me />
      <Footer />
    </>


  )
}

export default Home