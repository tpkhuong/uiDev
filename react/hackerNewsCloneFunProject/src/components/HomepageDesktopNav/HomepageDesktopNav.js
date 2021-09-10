import React from "react";

// our selectors at top of module
console.log("outside of HomepageDesktopNav class");
class HomepageDesktopNav extends React.Component {
  constructor(props) {
    super(props);
    console.log("constructor HomepageDesktopNav");
  }
  render() {
    console.log("render method HomepageDesktopnav");
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

export default HomepageDesktopNav;
