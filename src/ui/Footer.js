import React from "react";
import '../css/Footer.css';

function Footer() {
    return (
        <footer className="footer-section bg-dark text-light py-4" id="footer">
            <div className="container text-center">
                <div className="row">
                    {/* Quick Links */}
                    <div className="col-md-4 mb-3">
                        <h5>Quick Links</h5>
                        <ul className="list-unstyled">
                            <li><a href="#about" className="text-light text-decoration-none">About</a></li>
                            <li><a href="#ready-projects" className="text-light text-decoration-none">Projects</a></li>
                            <li><a href="#contact" className="text-light text-decoration-none">Contact</a></li>
                        </ul>
                    </div>

                    {/* Social Media */}
                    {/* <div className="col-md-4 mb-3">
                        <h5>Follow Us</h5>
                        <div className="d-flex justify-content-center">
                            <a href="#" className="me-3 text-light"><i className="fab fa-facebook"></i></a>
                            <a href="#" className="me-3 text-light"><i className="fab fa-twitter"></i></a>
                            <a href="#" className="me-3 text-light"><i className="fab fa-instagram"></i></a>
                            <a href="#" className="text-light"><i className="fab fa-linkedin"></i></a>
                        </div>
                    </div> */}

                    <div className="col-md-4">
                        <h5>&copy; 2025 Coding Journey</h5>
                        <p>All rights reserved.</p>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
