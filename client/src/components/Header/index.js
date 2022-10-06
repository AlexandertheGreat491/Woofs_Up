import React from "react";
import { Link } from "react-router-dom";
import Auth from "../../utils/auth";

function Header(props) {
  const { options = [], setOption } = props;

  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  }

  return (
    <header className="container">
      <h1>Woof's Up!</h1>
      
      <div>
        <nav>
          {Auth.loggedIn() ? (
            <>
              <a className="buttons p-1 m-1" href="/" onClick={logout}>
                Logout
              </a>

              {options.map((option) => (
                <button className="buttons m-1" key={option.name}>
                  <span onClick={() => setOption(option)}>{option.name}</span>
                </button>
              ))}
            </>
          ) : (
            <>
              <Link className="m-3 p-1 buttons" to="/login">
                Login
              </Link>
              <Link className="p-1 buttons" to="/signup">
                Signup
              </Link>
              <Link to="/travel">Travel</Link>
            </>
          )}
        </nav>
      </div>
    </header>
  );
}

// exports the Header component so that it can be used by the app
export default Header;
