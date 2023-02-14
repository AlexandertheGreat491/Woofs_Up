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

        <div id="nav" className="ms-5 mt-3">
          <nav className="text-center d-inline-flex flex-row">
            <>
              <Link className="navlinks me-3 ms-4 mb-2" to="/">
                Home
              </Link>
              <FaPaw className="mt-3" />
              <Link className="navlinks me-3 ms-4 mb-2" to="/travel">
                Travel
              </Link>
              <FaPaw className="mt-3" />
              <Link className="navlinks me-3 ms-4 mb-2" to="/AllTravel">
                Plains, Trains, and Automobiles
              </Link>
              <FaPaw className="mt-3" />
              <Link className="navlinks ms-4 mb-2" to="/Boarding">
                Boarding
              </Link>
            </>
          </nav>
          {/*woofs up logo image */}
          <img
            src={woofsUpLogo}
            style={{ width: "15%", height: "15%" }}
            alt="logo"
            className="img-fluid rounded mx-auto d-block"
            id="woof"
          />
        </div>
      </div>
    </header>
  );
}

// exports the Header component so that it can be used by the app
export default Header;
