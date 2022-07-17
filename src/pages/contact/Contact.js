import React from 'react';
import './Contact.css';
import { FaTelegramPlane, FaInstagram, FaWhatsapp } from 'react-icons/fa';
import Navbar from '../../components/navbar/Navbar';
const Contact = ()=> {
  return (
    <>
    <Navbar />
    <div className='contact' >
      <div className='contact2'>
        {/* <Barcode className={styles.barcode} /> */}
        <h1 className='contact-h1'>Contact Me :</h1>
        <p className='contact-p'>من درحال حاضر به صورت فریلنس کار میکنم با روش های زیر میتونید با من تماس بگیرید</p>
       </div>
      <div className='contact-bt'>
        <button className='contact-butt' href="https://t.me/afrainjast" >
          Telegram <FaTelegramPlane className='ca-ic' />
        </button>
        <button className='contact-buti' href="https://instagram.com/afrahimself" >
          InstaGram <FaInstagram className='ca-ic' />
        </button>
        <button className='contact-butw' href="https://wa.me/09137466593" >
          WhatsApp <FaWhatsapp className='ca-ic'  />
        </button>
       </div>
     </div>
    </>

    
  )
}

export default Contact;