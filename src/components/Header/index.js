// imports packages for react application
import React from "react";
import { Link } from "react-router-dom";

// import the logo
import woofsUpLogo from "..//../assets/images/LOGO.jpg";

function Header() {
  return (
    <header className="col-12 d-inline-flex pb-3">
      <div>
        <Link to="/">
          <h1 id="navheader" className="d-inline-flex w-100 justify-content-center ms-5">
            Woof's Up!
          </h1>
        </Link>

        <div id="nav" className="ms-5 mt-1">
          <nav className="text-center d-inline-flex flex-row">
            <>
              <Link className="navlinks m-2" to="/">
                Home
              </Link>
              <Link className="navlinks m-2" to="/travel">
                Travel
              </Link>
              <Link className="navlinks m-2" to="/AllTravel">
                Plains, Trains, and Automobiles
              </Link>
              <Link className="navlinks m-2" to="/Boarding">
                Boarding
              </Link>
            </>
          </nav>
          {/*woofs up logo image */}
<img
        src={woofsUpLogo}
        style={{ width: "20%", height: "20%" }}
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
