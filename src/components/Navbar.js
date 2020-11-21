import React from "react";

export default function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark" style={{backgroundColor : 'white'}}>
        <div className="container">
          <a className="navbar-brand" href="/">
            Simons
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
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
              </ul>
            <a className="nav-link " href="/" style={{color : "white"}}>
              Home
            </a>
            <a className="nav-link " href="/simonsays/" style={{color : "white"}}>
              Simon Says
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
}
