import './footer.css';
import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
const emailRegex = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-]+.)+[a-zA-Z]{2,}))$/;
const Footer = () => {


  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [showPopup, setShowPopup] = useState(false);
  const [hasErrors, setHasErrors] = useState(false);
  const [emailError, setEmailError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const serviceId = 'service_msoee1r';
    const templateId = 'template_mpbzr4i';
    const publicKey = 'PFRblJJch7E9fW5sd';
    
    const templateParams = {
      from_name: name,
      from_email: email,
      to_name: 'Web Wizard',
      message: message,
    };
    if (!name || !email || !message) {
      setHasErrors(true);
      return;
    }
    if (!emailRegex.test(email)) {
      setEmailError(true);
      setHasErrors(true);
      return;
    }
    emailjs.send(serviceId, templateId, templateParams, publicKey)
      .then((response) => {
        console.log('Email sent successfully!', response);
        setName('');
        setEmail('');
        setMessage('');
        setShowPopup(true);
        setEmailError(false); // Clear email error
        setHasErrors(false);
      })
      .catch((error) => {
        console.error('Error sending email:', error);
      });
  }
    return (
        <footer class="footer-section">
        <div class="container">
            <div class="footer-cta pt-5 pb-5">
                <div class="row">
                    <div class="col-xl-4 col-md-4 mb-30">
                        <div class="single-cta">
                            <i class="fa fa-map-marker"></i>
                            <div class="cta-text">
                                <h4>Find us</h4>
                                <span>296/794, Gobi Main Road, Near Police Station, Nambiyur - 638458</span>
                            </div>
                        </div>
                    </div> 
                    <div class="col-xl-4 col-md-4 mb-30">
                        <div class="single-cta">
                            <i class="fa fa-phone"></i>
                            <div class="cta-text">
                                <h4>Call us</h4>
                                <span>8220150811</span>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-4 col-md-4 mb-30">
                        <div class="single-cta">
                            <i class="fa fa-envelope-open"></i>
                            <div class="cta-text">
                                <h4>Mail us</h4>
                                <span>ganapathytraders2022rv@gmail.com</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="footer-content pt-5 pb-5">
                <div class="row">
                    <div class="col-xl-4 col-lg-4 mb-50">
                        <div class="footer-widget">
                            <div class="footer-logo">
                                <a href="index.html"><img src="https://res.cloudinary.com/duhcntqom/image/upload/v1708941834/logoGT.jpg" class="img-fluid" alt="logo"/></a>
                            </div>
                            <div class="footer-text">
                                <p>Ganapathy Traders is a leading player in the PVC product industry, renowned for its high-quality offerings and exceptional customer service. With a diverse range of PVC products, they cater to various sectors including construction, plumbing, and electrical industries, solidifying their position as a trusted supplier in the market. Ganapathy Traders' commitment to innovation and reliability makes them a preferred choice for businesses seeking top-notch PVC solutions.</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-4 col-lg-4 col-md-6 mb-30">
                        <div class="footer-widget">
                            <div class="footer-widget-heading">
                                <h3>Useful Links</h3>
                            </div>
                            <ul>
                                <li><a href="/">Home</a></li>
                                <li><a href="/productspro">Products</a></li>
                                <li><a href="/gallery">Gallery</a></li>
                                <li><a href="/contact">Contact</a></li>
                                <li><a href="/cart">Cart</a></li>
                                <li><a href="/login">Login</a></li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-xl-4 col-lg-4 col-md-6 mb-50">
                        <div class="footer-widget">
                            <div class="footer-widget-heading">
                                <h3>Feedback</h3>
                            </div>
                            <div class="footer-text mb-25">
                                <p>Don’t miss to give Feedback for uis, kindly fill the form below.</p>
                            </div>
                            <div class="subscribe-form">
                            <form onSubmit={handleSubmit}>
                                    <input type="text"
        placeholder="Your Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required/>
        <input type="text" placeholder="Email Address"
       value={email}
       onChange={(e) => setEmail(e.target.value)}
        required/>
        {hasErrors && emailError && <p className="error">Invalid email format</p>}
        {hasErrors && !emailError && <p className="error">Email is required</p>}
                                    <input
        cols="5"
        rows="3"
        placeholder="Your Message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        required
      />
      <div className='start'>
      <button><i class="fa fa-telegram-plane"></i></button></div>
                                </form>
                                {showPopup && (
        <div className="popup-message">
          <p>Your message has been sent!</p>
          {<button onClick={() => setShowPopup(false)}>Close</button>}
        </div>
      )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="copyright-area">
            <div class="container">
                <div class="row">
                    <div class="col-xl-6 col-lg-6 text-center text-lg-left">
                        <div class="copyright-text">
                            <p>Copyright &copy; 2024, All Right Reserved <a>Ganapathy Traders</a></p>
                        </div>
                    </div>
                    <div class="col-xl-6 col-lg-6 d-none d-lg-block text-right">
                        <div class="footer-menu">
                            {/* <ul>
                                <li><a href="#">Home</a></li>
                                <li><a href="#">Terms</a></li>
                                <li><a href="#">Privacy</a></li>
                                <li><a href="#">Policy</a></li>
                                <li><a href="#">Contact</a></li>
                            </ul> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </footer>
    )
}
export default Footer