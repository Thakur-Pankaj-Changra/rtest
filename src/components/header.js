import React, { Component } from "react";

function Header() {
  return (
    <React.Fragment>
      <header className="py-3">
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-right">
              <ul className="list-unstyled text-right mb-0">
                <li className="list-inline-item mr-2 mr-sm-4">
                  <img src={require("../images/phone.svg")} width="15px" />{" "}
                  <span className="ml-1">
                    <a href="tel:+91 254-5869-587" className="text-white">
                      +91 254-5869-587
                    </a>
                  </span>
                </li>
                <li className="list-inline-item mr-2 mr-sm-3">
                  <a href="https://www.facebook.com/" target="_blank">
                    <img width="18px" src={require("../images/facebook.svg")} />
                  </a>
                </li>
                <li className="list-inline-item mr-2 mr-sm-3">
                  <a href="https://twitter.com/" target="_blank">
                    <img width="18px" src={require("../images/twitter.svg")} />
                  </a>
                </li>
                <li className="list-inline-item mr-2 mr-sm-3">
                  <a href="https://www.google.com/" target="_blank">
                    <img
                      width="18px"
                      src={require("../images/google-plus.svg")}
                    />
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="https://www.linkedin.com/" target="_blank">
                    <img
                      width="18px"
                      src={require("../images/linkedin-logo.svg")}
                    />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </header>
      <Headline />
    </React.Fragment>
  );
}

function Headline() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12 pr-0">
          <nav className="navbar navbar-expand-lg navbar-light bg-transparent">
            <a className="navbar-brand" href="#">
              <img src={require("../images/logo.png")} />
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              {" "}
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav mr-auto mb-0">
                <li className="nav-item ">
                  {" "}
                  <a className="nav-link py-lg-4 py-2 pr-4 nav-link-text-white" href="#">
                    Home <span className="sr-only">(current)</span>
                  </a>
                </li>
                <li className="nav-item">
                  {" "}
                  <a className="nav-link py-lg-4 py-2 pr-4 nav-link-text-white" href="#">
                    About Us
                  </a>
                </li>
                <li className="nav-item">
                  {" "}
                  <a className="nav-link py-lg-4 py-2 pr-4 nav-link-text-white" href="#">
                    Portfolio
                  </a>
                </li>
                <li className="nav-item">
                  {" "}
                  <a className="nav-link py-lg-4 py-2 pr-4 nav-link-text-white" href="#">
                    Blog
                  </a>
                </li>
                <li className="nav-item">
                  {" "}
                  <a className="nav-link py-lg-4 py-2 nav-link-text-white" href="#">
                    Contact
                  </a>
                </li>
              </ul>
              <form className="form-inline my-2 my-lg-0">
                <button
                  className="btn btn-danger my-2 my-sm-0 px-4"
                >
                  Get In Touch
                </button>
              </form>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
}

export default Header;
