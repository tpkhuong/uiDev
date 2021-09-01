import React from "react";
import HomepageMobileNav from "../HomepageMobileNav/HomepageMobileNav";
import "../../../public/styles.css";
import BgImage from "../../../public/images/fromInsureDir/images/bg-pattern-mobile-nav.svg";

class NavModal extends React.Component {
  render() {
    return (
      <div
        role="dialog"
        aria-modal="true"
        className="dialog1"
        aria-labelledby="dialog1"
      >
        <nav role="navigation" aria-labelledby="dialog1" id="mobile-navbar">
          <h2 className="visually-hidden" id="dialog1">
            Mobile Navigation
          </h2>
          <HomepageMobileNav></HomepageMobileNav>
          {/* {this.props.children} */}
          {/* make ul dynamic */}
          {/* <ul role="menu" className="navlist">
            <li role="none" className="navitems">
              <a href="#" role="menuitem" className="navlink">
                How to work
              </a>
            </li>
            <li role="none" className="navitems">
              <a href="#" role="menuitem" className="navlink">
                Blog
              </a>
            </li>
            <li role="none" className="navitems">
              <a href="#" role="menuitem" className="navlink">
                Account
              </a>
            </li>
            <li role="none" className="navitems">
              <button role="menuitem" className="navbar-btn">
                View Plans
              </button>
            </li>
          </ul> */}
          {/* make a class for dynamic navbar button */}
        </nav>
      </div>
    );
  }
}

export default NavModal;
