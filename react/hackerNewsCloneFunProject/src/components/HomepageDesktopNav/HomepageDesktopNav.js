import React from "react";
import { dataObj } from "../../ourData";

// our selectors at top of module
console.log("outside of HomepageDesktopNav class");
class HomepageDesktopNav extends React.Component {
  constructor(props) {
    super(props);
    console.log("constructor HomepageDesktopNav");
    console.log("ourData homepagedesktop", dataObj);
    this.state = {
      listOfNavbarText: ["How we work", "Blog", "Account", "View Plans"],
    };
  }
  render() {
    console.log("render method HomepageDesktopnav");
    console.log("this.state", this.state.listOfNavbarText);
    console.log("ourData homepagedesktop render", dataObj);
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
          {dataObj.arrayOfLinkText.map(function TODO(strName, index, list) {
            const lastItem = list.length - 1;

            return (
              <li key={index} role="none" className="navlist">
                {index == lastItem ? (
                  <button className="desktop-btn" role="menuitem">
                    {strName}
                  </button>
                ) : (
                  <a role="menuitem" className="navlink">
                    {strName}
                  </a>
                )}
              </li>
            );
          })}
        </ul>
      </nav>
      // <nav
      //   role="navigation"
      //   aria-labelledby="homepage-desktop-navigation"
      //   id="homepage-desktop-navbar"
      // >
      //   <h2 className="visually-hidden" id="homepage-desktop-navigation">
      //     Desktop Navigation
      //   </h2>
      //   <ul className="navlist" role="menu">
      //     <li className="navlist" role="none">
      //       <a href="#" className="navlink" role="menuitem">
      //         How we work
      //       </a>
      //     </li>
      //     <li className="navlist" role="none">
      //       <a href="#" className="navlink" role="menuitem">
      //         Blog
      //       </a>
      //     </li>
      //     <li className="navlist" role="none">
      //       <a href="#" className="navlink" role="menuitem">
      //         Account
      //       </a>
      //     </li>
      //     <li className="navlist" role="none">
      //       <button className="desktop-btn" role="menuitem">
      //         View Plans
      //       </button>
      //     </li>
      //   </ul>
      // </nav>
    );
  }
}

export default HomepageDesktopNav;
