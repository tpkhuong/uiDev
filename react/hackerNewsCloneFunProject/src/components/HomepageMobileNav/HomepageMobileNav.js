import React from "react";

class HomepageMobileNav extends React.Component {
  render() {
    return (
      <ul role="menu" className="navlist">
        <li role="none" className="navlist">
          <a href="#" role="menuitem" className="navlink">
            How it work
          </a>
        </li>
        <li role="none" className="navlist">
          <a href="#" role="menuitem" className="navlink">
            Blog
          </a>
        </li>
        <li role="none" className="navlist">
          <a href="#" role="menuitem" className="navlink">
            Account
          </a>
        </li>
        <li role="menuitem" className="navlist">
          <button role="button" className="navbar-btn" id="homepage-navbtn">
            View Plans
          </button>
        </li>
      </ul>
    );
  }
}

export default HomepageMobileNav;
