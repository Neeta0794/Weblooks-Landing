import React, { Component } from "react";
import Logo from "../assets/img/logo.png";

class Navbar extends Component {
  render() {
    return (
      <div className="menu my-3">
          <nav className="navbar navbar-expand-md">
              <div className="col-md-4">
                <a className="navbar-brand logo d-inline-block" href="/">
                  <img src={Logo} alt="Logo" className="w-100" />
                </a>
                <button
                  className="navbar-toggler border-0 float-end"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="navbar-toggler-icon">
                    <i className="fa-solid fa-bars"></i>
                  </span>
                </button>
              </div>

              <div className="col-md-8">
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                  <ul className="navbar-nav ms-auto mt-2">
                    <li className="nav-item ms-2">
                      <a className="nav-link px-3 py-3 rounded hoverLine position-relative" aria-current="page" href="/">
                        Home
                      </a>
                    </li>
                    <li className="nav-item ms-2">
                      <a className="nav-link px-3 py-3 rounded hoverLine position-relative" href="/">
                        Services
                      </a>
                    </li>
                    <li className="nav-item ms-2">
                      <a className="nav-link px-3 py-3 rounded hoverLine position-relative" href="/">
                        Why Us
                      </a>
                    </li>
                    <li className="nav-item ms-2">
                      <a className="nav-link px-3 py-3 rounded hoverLine position-relative" href="/">
                        Hosting
                      </a>
                    </li>
                    <li className="nav-item ms-2">
                      <a className="nav-link px-3 py-3 rounded hoverLine position-relative" href="/">
                        Portfolio
                      </a>
                    </li>
                    <li className="nav-item ms-2">
                      <a className="nav-link px-3 py-3 rounded hoverLine position-relative" href="/">
                        Contact Us
                      </a>
                    </li>
                    <li className="nav-item ms-3">
                      <button className="nav-link text-uppercase webBtnBlue text-white rounded px-3 mt-2">
                        Request a quote
                      </button>
                    </li>
                  </ul>
              </div>
            </div>
          </nav>
      </div>
    );
  }
}
export default Navbar;
