import Image from "next/image";
import React from "react";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-black">
      <div className="container">
        {/* Logo */}
        <Image src="/assets/logo.png" width={100} height={100} />

        {/* Toggler for Mobile View */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navbar Items */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link  text-white text-white" href="#home">
                <h6>HOME</h6>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link  text-white" href="#service">
                <h6>SERVICES</h6>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link  text-white" href="#about">
                <h6>ABOUT</h6>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link  text-white" href="#tasklist">
                <h6>TASK LIST</h6>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link  text-white" href="#testimonials">
                <h6>TESTIMONIALS</h6>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link  text-white" href="#contactus">
                <h6>CONTACT US</h6>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
