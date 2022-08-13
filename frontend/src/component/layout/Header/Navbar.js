import React, { Component } from "react";
import "./Navbar.css";
import logo from "../../../images/logo.webp"
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass , faCartShopping, faUser} from '@fortawesome/free-solid-svg-icons'

class Navbar extends Component {
  state = { clicked: false }

  
  handleClick = (e) => {
    this.setState({ clicked: !this.state.clicked });
  };


  render(event) {
    return (
      
        <nav className="NavbarItems">
        <img className="navbar-logo" alt="Logo" src={logo}/>
        <div className="menu-icon" onClick={this.handleClick}>
          <i
            className={
              this.state.clicked ? "fa-solid fa-xmark" : "fa-solid fa-bars"
            }
          ></i>
        </div>
        <ul className={this.state.clicked ? "nav-menu active" : "nav-menu"}>
          <NavLink to="/" className="nav-links" onClick={this.handleClick} >
            <h4>Home</h4>
          </NavLink>
          <NavLink to="/products" className="nav-links" onClick={this.handleClick}>
            <h4>Products</h4>
          </NavLink>
          <NavLink to="/contact" className="nav-links" onClick={this.handleClick}>
            <h4>Contact</h4>
          </NavLink>
          <NavLink to="/about" className="nav-links" onClick={this.handleClick} >
            <h4>About</h4>
          </NavLink>
        </ul>
        <ul className="icon-nav">
          <NavLink to="/Search" className="search-icon" >
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </NavLink>
          <NavLink to="/cart" className="cart-icon" >
            <FontAwesomeIcon icon={faCartShopping} />
          </NavLink>
          <NavLink to="/login" className="login-icon" >
            <FontAwesomeIcon icon={faUser} />
          </NavLink>
        </ul>
      </nav>
      
    );
  }
}


export default Navbar;
