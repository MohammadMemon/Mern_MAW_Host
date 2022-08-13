import React ,{useEffect}from 'react'
import { Link, useLocation } from "react-router-dom";
import "./Footer.css"
import logo  from "../../../images/logo.webp"
import razorpay  from "../../../images/pay.webp"
import ReactGA from "react-ga"

const Footer = () => {

    let location = useLocation();

    useEffect(() => {
        ReactGA.initialize('UA-222092579-1')
        ReactGA.pageview(location.pathname + location.search);
     }, [location])

  return (
      <>
        <footer id="footer" className="section-p1">
        <div className="col">
            <img className="logo" src={logo} alt="logo"/>
            <h4 className='h4'>Contact</h4>
            <p className='footerP'><strong>Address:</strong>R:402 Zaitoon Heights Mira Road Thane-401107</p>
            <p className='footerP'><strong>Phone:</strong> +91 88505 70868 / +91 84337 86704</p>
            <p className='footerP'><strong>Hours:</strong> 10:00 - 18:00 Mon-Sat</p>
            <h4 className='h4'>Follow Us</h4>
            <div className="follow ">
                <div className="social-links">
                    <a href="https://www.facebook.com/myartworlld/"><i className="fa-brands fa-facebook-f"></i></a>
                    <a href="https://www.instagram.com/MyArtWorlld"><i className="fa-brands fa-instagram"></i></a>
                    <a href="https://www.youtube.com/channel/UChCZwSyHTEVW8PtxxImLAHA"><i className="fa-brands fa-youtube"></i></a>
                </div>
            </div>
        </div>
        <div className="col">
            <h4 className='h4'>About</h4>
            <Link to="/about">About Us</Link>
            <Link to="/privacy">Privacy Policy</Link>
            <Link to="/return">Return Policy</Link>
            <Link to="/shippingpolicy">Shipping Policy</Link>
            <Link to="/terms" >Terms & Conditions</Link>
            <Link to="/contact">Contact Us</Link>
        </div>
        <div className="col">
            <h4 className='h4'>My Account</h4>
            <Link to="/login">Login</Link>
            <Link to="/cart">View Cart</Link>
            <Link to="/orders">Track My Order</Link>
            <Link to="/contact">Help</Link>
        </div>

        <div className="col pay">
            <h4 className='h4'>Secured Payment Gateway</h4>
            <img src={razorpay} alt="Services"/>
        </div>
        <div className="copyright">
            <p className='footerP'>&copy;2022, - Myartworld </p>
            
            <a href="https://www.instagram.com/mohammad.memon_/">  <p className='footerP'  > <strong>Designed & Developed By Mohammad Memon</strong> </p></a>
        </div>
    </footer>
    </>
  )
}

export default Footer