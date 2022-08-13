
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import logo  from "../../../images/logo.webp"
import { useAlert } from "react-alert";
import "./Contact.css"
import {Helmet} from "react-helmet";

const Contact = () =>{

    const alert = useAlert(); 
    const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_8jtxt55', 'template_51ncp0a', form.current, 'RdhS27PkKOyzZFdko')
      .then(() => {
        alert.success("Email Sent Successfully");
        document.getElementById("emailForm").reset();
      }, (error) => {
        alert.error(error);
        alert.error("Email not sent, Try again later.");
      });
  };
    return (
        <>
        <Helmet>
              <title>Myartworld/conatact</title>
              <meta name="description" content={`Myartworld.in We sell • Alphabet Keychain • Couple Name Keychain • Phone case • Resin jewellery items • Resin Bookmark.`} />
              <meta name="keywords" content={`Myartworld.in, Alphabet Keychain, Couple Name Keychain, Phone case, Resin jewellery items, Resin Bookmark, Resin Art, Home decor, Myartworld, Myartworlld`} /
              >
        </Helmet>
        <div>
        <div id="contact-details" className="div-p1">
        <div className="details">
            <span>GET IN TOUCH</span>
            <h2>Visit one of our location or contact us today.</h2>
            <h3>Head Office / Our Home</h3>
            <div>
                <li>
                    <i className="fa-solid fa-map"></i>
                    <p>R.no 402, 4th floor, Zaitoon Heights, Ramdev Park Road, Queens Park Road, Mira Bhayandar Road, Mira Road East, Thane-401107</p>
                </li>
                <li>
                    <i className="fa-solid fa-envelope"></i>
                    <p>myartworld18@gmail.com</p>
                </li>
                <li>
                    <i className="fa-solid fa-phone"></i>
                    <p> +91 88505 70868 | +91 84337 86704</p>
                </li>
                <li>
                    <i className="fa-solid fa-clock"></i>
                    <p>10:00 AM - 6:00 PM | Mon-Sat</p>
                </li>
            </div>
        </div>
        <div className="map">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d457.3256755217335!2d72.86520786190464!3d19.29060341807666!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b047892750c5%3A0xa39510c4ca5d79a4!2sZaitoon%20Heights%2C%20near%20Reliance%20Petrol%20Pump%2C%20Shivar%20Garden%2C%20Mira%20Road%2C%20Thane%2C%20Maharashtra%20401107!5e0!3m2!1sen!2sin!4v1646578044464!5m2!1sen!2sin"  title="myFrame" width="600" height="450" style={{border:0 }} allowFullScreen="" loading="lazy"></iframe>
        </div>
    </div>

    <div id="form-details">
        <form ref={form} id="emailForm" onSubmit={sendEmail}>
            <span>LEAVE A MESSAGE</span>
            <h2>We love to hear from you.</h2>
            <input type="text"  name="name" className='input' placeholder="Your Name"/>
            <input type="email" name="email"className='input' placeholder="Your E-mail"/>
            <input type="text" name="subject" className='input' placeholder="Subject"/>
            <textarea name="message" id="" className='textarea' cols="30" rows="10" placeholder="Your Message"></textarea>
            <input  type="submit" className="button" value="Send" />
        </form>
        <div id="people">

            <div className="people">
                <img src={logo} alt="logo"/>
                <p><span>Iqra Memon</span>
                    Phone: +91 88505 70868 <br/>E-mail: iqra.memon982@gmail.com</p>
                    
                </div>
                <br/><br/>
                <div className="people">
                    <img src="https://res.cloudinary.com/myartworld/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_5px_solid_red,b_rgb:262c35/v1659024159/products/WhatsApp_Image_2022-07-28_at_9.30.44_PM_yq5gqr.jpg" alt="Mohammad"/>
                    <p><span>Mohammad Memon</span> Web Developer & Webite Manager<br/>
                        Phone: +91 843378 6704 <br/>E-mail: Mohammad.78600@outlook.com</p>
                    </div>
                    
                </div>
    </div>
    </div>
    </>
    )

}

export default Contact
    