import React from "react";
import { Link } from "react-router-dom";


function Header() {
  return (
    <header className="col-12 d-inline-flex pb-3">
      <div>
        <Link to="/">
          <h1 className="d-inline-flex w-100">Woof's Up!</h1>
        </Link>

        <div id="nav">
          <nav className="text-center d-inline-flex flex-row">
            <>
              <Link className="navlinks" to="/login">
                Login
              </Link>
              <Link className="navlinks" to="/signup">
                Signup
              </Link>
              <Link className="navlinks" to="/travel">
                Travel
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
