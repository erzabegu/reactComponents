import React from "react";
import { HashLink as Link } from "react-router-hash-link";
import Logo from "../logo.jpg";

const Navbar = () => {
  return (
    <nav
      class="navbar navbar-expand-lg navbar-light pt-5 pb-5 sticky-top"
      style={{
        backgroundColor: "#ffc038",
        fontWeight: "bold",
        zIndex: "999",
      }}
    >
      <div class="container">
        <a class="navbar-brand" href="#">
          <h4>
            <span id="name">MARKET</span> TECH
          </h4>
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse text-right" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li class="nav-item">
              <Link
                smooth
                duration={9000}
                offset={-70}
                spy={true}
                to="#section1"
                className="nav-link"
              >
                HOME
              </Link>
            </li>
            <li class="nav-item ">
              <Link
                smooth
                duration={9000}
                offset={-70}
                spy={true}
                to="#section2"
                className="nav-link"
              >
                ABOUT
              </Link>
            </li>
            <li class="nav-item">
              <Link
                smooth
                duration={9000}
                offset={-70}
                spy={true}
                to="#section3"
                className="nav-link"
              >
                SERVICES
              </Link>
            </li>
            <li class="nav-item">
              <Link
                className="nav-link"
                smooth
                duration={9000}
                offset={-70}
                spy={true}
                to="#footer"
              >
                CONTACT US
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
