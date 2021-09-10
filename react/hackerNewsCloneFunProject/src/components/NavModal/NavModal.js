import React from "react";
import HomepageMobileNav from "../HomepageMobileNav/HomepageMobileNav";
import "../../../public/styles.css";
import MobileNavBgImg from "../../../public/bg-pattern-mobile-nav.svg";
import NavBgImg from "../../images/bg-pattern-mobile-nav.svg";

console.log(
  "outside of NavModal class this component renders after HomepageDesktopNav in our NavBar component"
);

class NavModal extends React.Component {
  constructor(props) {
    super(props);
    console.log("constructor NavModal");
  }

  componentDidMount() {
    let openBtn = document.querySelector(".open-btn");
    console.log(
      "this is NavModal openBtn using document.querySelector() inside componentDidMount",
      openBtn
    );
  }
  render() {
    console.log("render method in NavModal ");
    return (
      <div
        role="dialog"
        aria-modal="true"
        className="dialog1 mobile-navbar-bg"
        aria-labelledby="dialog1"
        style={{
          backgroundImage: `url(${NavBgImg})`,
        }}
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
        {/* dont need to use div with class of img-wrapper with an <img> as its child because we will add our svg as a bg-img inline on div with dialog1 class using inline styling */}
        {/* <div className="img-wrapper">
          <img src={MobileNavBgImg} alt="" />
        </div> */}
      </div>
    );
  }
}

export default NavModal;
