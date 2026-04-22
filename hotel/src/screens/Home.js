import React from 'react';
import Navbar from '../components/Nabvbar';
import Footer from '../components/Footer';
import hero from '../images/hotel-hero.png';
import room1 from '../images/room1.png';
import room2 from '../images/room2.png';
import room3 from '../images/room3.png';

export default function Home() {
    return (
        <div style={{ backgroundColor: "#0F0F0F", color: "#F5F5F5" }}>

            <Navbar />

            {/* HERO SECTION */}
            <div
                style={{
                    backgroundImage: `url(${hero})`,
                    height: "90vh",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    position: "relative"
                }}
            >
                <div style={{
                    backgroundColor: "rgba(0,0,0,0.6)",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    textAlign: "center"
                }}>
                    <h1 style={{ fontSize: "3rem", color: "#D4AF37", fontWeight: "bold" }}>
                        Experience Luxury & Comfort
                    </h1>
                    <p style={{ maxWidth: "600px", marginTop: "10px" }}>
                        Discover premium rooms, seamless booking, and world-class hospitality with HotelEase.
                    </p>

                    <button className="btn mt-3" style={{ backgroundColor: "#D4AF37", color: "#000" }}>
                        Explore Rooms
                    </button>
                </div>
            </div>

            {/* BOOKING FILTER */}
            <div className="container mt-5">
                <div className="row p-4" style={{ backgroundColor: "#1A1A1A", borderRadius: "10px" }}>

                    <div className="col-md-4">
                        <label>Check-in</label>
                        <input type="date" className="form-control bg-dark text-light border-0" />
                    </div>

                    <div className="col-md-4">
                        <label>Check-out</label>
                        <input type="date" className="form-control bg-dark text-light border-0" />
                    </div>

                    <div className="col-md-4 d-flex align-items-end">
                        <button className="btn w-100" style={{ backgroundColor: "#D4AF37", color: "#000" }}>
                            Check Availability
                        </button>
                    </div>

                </div>
            </div>

            {/* FEATURED ROOMS */}
            <div className="container mt-5">
                <h2 className="text-center mb-4" style={{ color: "#D4AF37" }}>Featured Rooms</h2>

                <div className="row">

                    {/* Room 1 */}
                    <div className="col-md-4">
                        <div className="card bg-dark text-light border-0">
                            <img src={room1} className="card-img-top" alt="Room" width={160} height={180} />
                            <div className="card-body">
                                <h5>Deluxe Room</h5>
                                <p>Spacious room with premium amenities.</p>
                                <button className="btn btn-sm" style={{ backgroundColor: "#D4AF37" }}>
                                    View Details
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Room 2 */}
                    <div className="col-md-4">
                        <div className="card bg-dark text-light border-0">
                            <img src={room2} className="card-img-top" alt="Room" width={160} height={180} />
                            <div className="card-body">
                                <h5>Executive Suite</h5>
                                <p>Luxury suite with city view.</p>
                                <button className="btn btn-sm" style={{ backgroundColor: "#D4AF37" }}>
                                    View Details
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Room 3 */}
                    <div className="col-md-4">
                        <div className="card bg-dark text-light border-0">
                            <img src={room3} className="card-img-top" alt="Room" width={160} height={180} />
                            <div className="card-body">
                                <h5>Presidential Suite</h5>
                                <p>Top-tier experience with luxury service.</p>
                                <button className="btn btn-sm" style={{ backgroundColor: "#D4AF37" }}>
                                    View Details
                                </button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            {/* CTA */}
            <div className="container mt-5 text-center">
                <div className="p-5" style={{ backgroundColor: "#1A1A1A", borderRadius: "10px" }}>
                    <h2 style={{ color: "#D4AF37" }}>Book Your Stay Today</h2>
                    <p>Simple, fast, and reliable booking experience.</p>
                    <button className="btn" style={{ backgroundColor: "#D4AF37", color: "#000" }}>
                        Book Now
                    </button>
                </div>
            </div>

            <Footer />
        </div>
    );
}