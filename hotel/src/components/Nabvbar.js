import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/hotel-logo.png';

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg" style={{ backgroundColor: "#181717" }}>
      <div className="container-fluid">

        {/* Logo */}
        <Link className="navbar-brand d-flex align-items-center text-warning" to="/">
          <img src={logo} alt="HotelEase" width="80" height="80" className="me-2" />
         <div className="hotel-name fs-2 fst-italic">HotelEase</div> 
        </Link>

        {/* Toggle */}
        <button className="navbar-toggler bg-warning" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Links */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">

            <li className="nav-item">
              <Link className="nav-link text-light" to="/">Home</Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link text-light" to="/rooms">Rooms</Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link text-light" to="/booking">Booking</Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link text-light" to="/about">About</Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link text-light" to="/contact">Contact</Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link text-warning" to="/login">Login</Link>
            </li>

          </ul>
        </div>
      </div>
    </nav>
  );
}