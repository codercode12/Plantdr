import React, { useState } from 'react'
import './Contactus.css'
import contact from '../Assest/herobg.jpg'
import  { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contactus = () => {
 
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_11uxpbm', 'template_ha9kzre', form.current, {
        publicKey: 'uP39v3EUv2uM4OhL_',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };



  return (
    <section className="main-contact">
        <h1>Contact Us</h1>
        <section className="contact">
        <div className="left">
            <img src={contact} alt="" />
        </div>
        <div className="right">
            <form ref={form} onSubmit={sendEmail}>
                <div className="name">
                   <div className='n1'>
                   <p>FirstName</p>
                    <input type="text"  name='name' />
                   </div>
                   <div className='n2'>
                   <p>SecondName</p>
                    <input type="text"   name='name' />
                   </div>
                </div>
                <p>E-mail</p>
                <input type="email" name="email"  />
                <p>Message</p>
                <textarea name="message"  cols="30" rows="10" ></textarea>
                <button type="submit">Send</button>
            </form>
        </div>
    </section>
    </section>
  )
}

export default Contactus