import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons'
import './Footer.css'
import  { useRef,useState } from 'react';
import emailjs from '@emailjs/browser';

const Footer = () => {
  
  let [semail,setSemail]=useState("")

  function reset(){
    setSemail("")
  }



  const form = useRef();

  const newsLetter = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_u4fzm1k', 'template_k60i2kt', form.current, {
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
    <footer>
         <div className="top">
                <div className="contentfo">
                <h1>NewsLetter</h1>
                <form ref={form} onSubmit={newsLetter} className="input">
                <input type="email" name="email"  placeholder='Enter Your Email' />
                              <button type="submit"><FontAwesomeIcon className="icon"icon={faPaperPlane} onClick={reset}/></button>
                </form>
                </div>
            </div>
        <div className="footer">
           
           <ul className='footer-links'>
            <li className='footer-link'>Home</li>
            <li className='footer-link'>About</li>
            <li className='footer-link'>Contact</li>
            <li className='footer-link'>Blog</li>
            <li className='footer-link'>Location</li>
            <li className='footer-link'>Privacy Policy</li>
            <li className='footer-link'>Terms of Service</li>
           </ul>
            
        </div>

    </footer>
  )
}

export default Footer