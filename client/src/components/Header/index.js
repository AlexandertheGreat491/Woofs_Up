import React from "react";
import { Link } from "react-router-dom";
import Auth from "../../utils/auth";

import dogCar from "../../assets/images/dog_car.jpg";

function Header(props) {
  const { options = [], setOption } = props;

  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };

  return (
    <header className="col-12 d-inline-flex pb-3">
      
      <div>
        <Link to="/">
        <h1 className="d-inline-flex w-100">Woof's Up!</h1>
        </Link>

        <div id="nav">
          <nav className="text-center d-inline-flex flex-row">
            {Auth.loggedIn() ? (
              <>
                <a className="p-1 m-1" href="/" onClick={logout}>
                  Logout
                </a>

                {options.map((option) => (
                  <button className="m-1" key={option.name}>
                    <span onClick={() => setOption(option)}>{option.name}</span>
                  </button>
                ))}
              </>
            ) : (
              <>
                <Link className="navlinks" to="/about">
                  About
                </Link>
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
            )}
          </nav>
        </div>
      </div>
    </header>
  );
}

// exports the Header component so that it can be used by the app
export default Header;
