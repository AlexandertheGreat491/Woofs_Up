// imports packages for react application
import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="col-12 d-inline-flex pb-3">
      <div>
        <Link to="/">
          <h1 id="navheader" className="d-inline-flex w-100 text-center">
            Woof's Up!
          </h1>
        </Link>

        <div id="nav" className="ms-4 mt-1">
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
        </div>
      </div>
    </header>
  );
}

// exports the Header component so that it can be used by the app
export default Header;
