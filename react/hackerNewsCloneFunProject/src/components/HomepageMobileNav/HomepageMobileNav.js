import React from "react";
import { ourSelectors } from "../../selectors";
import { dataObj } from "../../ourData";
/**
 * passing dataObj selector from NavModal the component that renders this component
 * **/
// const dataobj = document.querySelector("#data-obj");
// dataobj.dataElement = {
//   name: "Hello",
// };
class HomepageMobileNav extends React.Component {
  constructor(props) {
    super(props);
    console.log(
      "homepagemobilenav constructor",
      document.querySelector("#homepage-desktop-navbar")
    );
    const ourData = props.ourObj;
    ourData.dataElement["lastName"] = "Deadpool";
    console.log(
      "props.ourObj assigned to ourData identifier",
      ourData.dataElement
    );
    // console.log("homepageMobileNav", dataobj);
    console.log(dataObj, "dataobj");
    console.log(ourSelectors()); //all properties are null
    console.log("props", props.selectorObj()); //passing ourSelector func as props to this component all properties still null
    // var arrOfListName = props.
    console.log("props", props.ourArray.arrOfText);
  }

  render() {
    return (
      <ul role="menu" className="navlist">
        {/* using arrow function */}
        {/* {this.props.ourArray.arrOfText.map((eachText, index, list) => {
          const lastItem = list.length - 1;
          return (
            <li key={index} role="none" className="navlist">
              {index == lastItem ? (
                <button
                  role="button"
                  className="navbar-btn"
                  id="homepage-navbtn"
                >
                  {eachText}
                </button>
              ) : (
                <a href="#" role="menuitem" className="navlink">
                  {eachText}
                </a>
              )}
            </li>
          );
        })} */}
        {/* using regular function */}
        {this.props.ourArray.arrOfText.map(function ourListItems(
          eachVal,
          index,
          list
        ) {
          const lastItem = list.length - 1;
          return (
            <li key={index} role="none" className="navlist">
              {index == lastItem ? (
                <button
                  role="button"
                  className="navbar-btn"
                  id="homepage-navbar"
                >
                  {eachVal}
                </button>
              ) : (
                <a role="menuitem" className="navlink" href="#">
                  {eachVal}
                </a>
              )}
            </li>
          );
        })}
      </ul>
    );
  }
  // render() {
  //   return (
  //     <ul role="menu" className="navlist">
  //       <li role="none" className="navlist">
  //         <a href="#" role="menuitem" className="navlink">
  //           How it work
  //         </a>
  //       </li>
  //       <li role="none" className="navlist">
  //         <a href="#" role="menuitem" className="navlink">
  //           Blog
  //         </a>
  //       </li>
  //       <li role="none" className="navlist">
  //         <a href="#" role="menuitem" className="navlink">
  //           Account
  //         </a>
  //       </li>
  //       <li role="menuitem" className="navlist">
  //         <button role="button" className="navbar-btn" id="homepage-navbtn">
  //           View Plans
  //         </button>
  //       </li>
  //     </ul>
  //   );
  // }
}

export default HomepageMobileNav;
