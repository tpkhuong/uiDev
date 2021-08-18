import React from "react";
import { ThemeConsumer } from "../../../context/theme";
import { NavLink } from "react-router-dom";

var activeStyle = {
  color: "rgb(187,46,31)",
};

function Nav() {
  return (
    <ThemeConsumer>
      {({ theme, toggleTheme }) => (
        <nav className="row space-between">
          <ul className="row nav">
            {/* we will use NavLink instead of Link to pass extra props */}
            {/* <li>
              <Link to="/" className="nav-link">
                Popular
              </Link>
            </li>
            <li>
              <Link to="/battle" className="nav-link">
                Battle
              </Link>
            </li> */}
            {/* using exact so that when we click on the link it will apply the red color to that link */}
            <li>
              <NavLink
                exact
                to="/"
                className="nav-link"
                activeStyle={activeStyle}
              >
                Popular
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/battle"
                className="nav-link"
                activeStyle={activeStyle}
              >
                Battle
              </NavLink>
            </li>
          </ul>
          <button
            style={{ fontSize: 30 }}
            className="btn-clear"
            onClick={toggleTheme}
          >
            {theme == "light" ? "🔦" : "💡"}
          </button>
        </nav>
      )}
    </ThemeConsumer>
  );
}

export default Nav;
