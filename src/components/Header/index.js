// imports packages for react application
import React from "react";
import { Link } from "react-router-dom";

// imports the logo
import woofsUpLogo from "..//../assets/images/LOGO.jpg";
// imports the paw icon
import { FaPaw } from "react-icons/fa";

function Header() {
  return (
    <header className="col-12 d-inline-flex pb-3">
      <div>
        <Link to="/">
          <h1
            id="navheader"
            className="d-inline-flex w-100 justify-content-center ms-4"
          >
            Woof's Up!
          </h1>
        </Link>

        <div id="nav" className="mt-3">
          <nav className="justify-content-center d-inline-flex flex-row">
            {/*woofs up logo image */}
            <img
              src={woofsUpLogo}
              style={{ width: "15%", height: "15%" }}
              alt="logo"
              className="img-fluid rounded"
              id="woof"
            />
            <>
              <Link
                className="navlinks me-3 ms-4 mb-2"
                to="/"
                style={{ width: "5%", height: "15%" }}
              >
                Home
              </Link>
              <FaPaw id="paw" className="ms-1 mt-3" />
              <Link
                className="navlinks me-3 ms-4 mb-2"
                to="/travel"
                style={{ width: "5%", height: "15%" }}
              >
                Travel
              </Link>
              <FaPaw id="paw" className="mt-3" />
            </>
          </nav>
        </div>
      </div>
    </header>
  );
}

// exports the Header component so that it can be used by the app
export default Header;
