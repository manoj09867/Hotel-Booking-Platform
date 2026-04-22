import React from 'react'
import { Link } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';


export default function Footer() {
    return (
        <footer className="text-center text-lg-start text-light mt-5" style={{ backgroundColor: "#0F0F0F" }}>

            {/* Top section */}
            <section className="d-flex justify-content-between p-4" style={{ backgroundColor: "#D4AF37" }}>
                <div className="text-dark">
                    <span>Connect with HotelEase</span>
                </div>

                <div>
                    <Link to="/" className="text-dark me-4">
                        <FaFacebook size={24} />
                    </Link>
                    <Link to="/" className="text-dark me-4">
                        <FaTwitter size={24} />
                    </Link>
                    <Link to="/" className="text-dark me-4">
                        <FaInstagram size={24} />
                    </Link>
                    <Link to="/" className="text-dark me-4">
                        <FaLinkedin size={24} />
                    </Link>
                </div>
            </section>

            {/* Main content */}
            <section>
                <div className="container text-md-start mt-5">
                    <div className="row mt-3">

                        {/* About */}
                        <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                            <h6 className="text-uppercase fw-bold text-warning">HotelEase</h6>
                            <hr style={{ width: "60px", backgroundColor: "#D4AF37", height: "2px" }} />
                            <p>
                                Experience luxury and comfort with HotelEase. Book premium rooms with ease and enjoy world-class hospitality.
                            </p>
                        </div>

                        {/* Pages */}
                        <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                            <h6 className="text-uppercase fw-bold text-warning">Pages</h6>
                            <hr style={{ width: "60px", backgroundColor: "#D4AF37", height: "2px" }} />
                            <p>Home</p>
                            <p>Rooms</p>
                            <p>Booking</p>
                            <p>Contact</p>
                        </div>

                        {/* Useful */}
                        <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                            <h6 className="text-uppercase fw-bold text-warning">Useful Links</h6>
                            <hr style={{ width: "60px", backgroundColor: "#D4AF37", height: "2px" }} />
                            <p>Privacy Policy</p>
                            <p>Terms & Conditions</p>
                            <p>Support</p>
                        </div>

                        {/* Contact */}
                        <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                            <h6 className="text-uppercase fw-bold text-warning">Contact</h6>
                            <hr style={{ width: "60px", backgroundColor: "#D4AF37", height: "2px" }} />
                            <p>Kathmandu, Nepal</p>
                            <p>support@hotelease.com</p>
                            <p>+977 9800000000</p>
                        </div>

                    </div>
                </div>
            </section>

            {/* Bottom */}
            <div className="text-center p-3" style={{ backgroundColor: "#1A1A1A" }}>
                © 2026 HotelEase All Rights Reserved
            </div>
        </footer>
    );
}
