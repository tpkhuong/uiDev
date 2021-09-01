import React from "react";

class HomepageDesktopnav extends React.Component {
  render() {
    return (
      <nav
        role="navigation"
        aria-labelledby="homepage-desktop-navigation"
        id="homepage-desktop-navbar"
      >
        <h2 className="visually-hidden" id="homepage-desktop-navigation">
          Desktop Navigation
        </h2>
        <ul className="navlist" role="menu">
          <li className="navlist" role="none">
            <a href="#" className="navlink" role="menuitem">
              How we work
            </a>
          </li>
          <li className="navlist" role="none">
            <a href="#" className="navlink" role="menuitem">
              Blog
            </a>
          </li>
          <li className="navlist" role="none">
            <a href="#" className="navlink" role="menuitem">
              Account
            </a>
          </li>
          <li className="navlist" role="none">
            <button className="desktop-btn" role="menuitem">
              View Plans
            </button>
          </li>
        </ul>
      </nav>
    );
  }
}

export default HomepageDesktopnav;
