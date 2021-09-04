import React from "react";
import Hamburger from "../../../public/images/fromInsureDir/images/icon-hamburger.svg";
import Close from "../../../public/images/fromInsureDir/images/icon-close.svg";
import NavModal from "../NavModal/NavModal";
import HomepageMobileNav from "../HomepageMobileNav/HomepageMobileNav";
import HomepageDesktopNav from "../HomepageDesktopNav/HomepageDesktopNav";
import { ourSelectors } from "../../selectors";

alert("work on focus modal feature");

class Navbar extends React.Component {
  /***** ourSelectors() will work in handleClick which will bind to this component using this.handleClick.bind(this) *****/
  /***** ourSelectors() will work in componentDidMount(){} *****/
  /************/
  /************/
  /***** ourSelectors() will not work in constructor or render() method of this component unless  *****/
  /***** we assign a property in this.state obj of this compoent. the value we assign to that property will be  *****/
  /***** a reference to ourSelectors()  *****/
  constructor(props) {
    super(props);
    this.handleOpenNavMenu = this.handleOpenNavMenu.bind(this);
    this.handleCloseNavMenu = this.handleCloseNavMenu.bind(this);
    this.handleTouchEvent = this.handleTouchEvent.bind(this);
    this.handleKeyDownEvent = this.handleKeyDownEvent.bind(this);
    this.testingStuff = this.testingStuff.bind(this);
    /***** *****/
    this.state = { selector: ourSelectors };
    console.log(this.state.selector);
    this.testing = ourSelectors.bind(this);
    console.log("constructor", ourSelectors()); //openBtn and closeBtn are null
  }

  handleTouchEvent(event) {
    const { openBtn, closeBtn, lastItemOfModal } = ourSelectors();
    console.log("lastItemOfModal", lastItemOfModal);
    if (event.target.parentElement == openBtn) {
      openBtn.setAttribute("aria-pressed", "true");
      closeBtn.setAttribute("aria-pressed", "false");
    }

    if (event.target.parentElement == closeBtn) {
      closeBtn.attributes["aria-pressed"].value = "true";
      openBtn.attributes["aria-pressed"].value = "false";
    }
  }

  handleOpenNavMenu(event) {
    // let ourElements = ourSelectors();
    // let { openBtn, closeBtn } = ourElements;
    // console.log(
    //   "from NavBar inside handleClick. openBtn from selectors.js",
    //   ourElements.openbtn
    // );
    // let { openBtn } = this.state.selector();
    // var { openBtn, closeBtn } = anotherObj;
    const { openBtn, closeBtn } = ourSelectors();
    console.log("openbtn", openBtn);
    // console.log("openBtn", openBtn);
    // console.log("closeBtn", closeBtn);
    // console.log(this.state.openBtn);
    // console.log(event.target.parentElement);
    // if (event.target.parentElement == this.state.openBtn) {
    //   console.log("here");
    // }
    console.log(event.target.parentElement);
    if (event.target.parentElement == openBtn) {
      // when user click on hamburger btn we want to see hamburger btn aria-pressed to true
      //set close btn aria-pressed to false
      /***** works *****/
      // openBtn.attributes["aria-pressed"].value = "true";
      // closeBtn.attributes["aria-pressed"].value = "false";
      openBtn.setAttribute("aria-pressed", "true");
      closeBtn.setAttribute("aria-pressed", "false");
    }
  }

  handleCloseNavMenu(event) {
    const { openBtn, closeBtn } = ourSelectors();
    if (event.target.parentElement == closeBtn) {
      //when user click on closeBtn we will set closeBtn aria-pressed to true
      //set openBtn aria-pressed to false
      closeBtn.attributes["aria-pressed"].value = "true";
      openBtn.attributes["aria-pressed"].value = "false";
    }
  }

  handleKeyDownEvent(event) {
    console.log("handleKeyDownEvent", event.target);
  }

  componentDidMount() {
    console.log("componentDidMount", ourSelectors());
    var { openBtn, closeBtn } = ourSelectors();
    console.log("openBtn", openBtn);
    console.log("closeBtn", closeBtn);
    openBtn.addEventListener("click", this.testingStuff); //this work our openBtn will have click event added to it
    /***** we can either declare ourSelectors func in componentDidMount for each component *****/
    /***** or a better approach will be to have a js file in our build-utils or in our src dir *****/
    /***** the function we export from the js file in build-utils will return an obj with our element selectors *****/
    /***** depend on the component we will import the functions that has our element selectors when we need to interact with an element *****/
    // const ourEles = ourSelectors();
    // console.log(ourEles.openbtn);
    // const openBtn = document.querySelector(".open-btn");
    // const closeBtn = document.querySelector(".close-btn");
    // our this.state.testArr will be an array with our openBtn in it [button.open-btn]
    // console.log("this is in componentDidMount", this.state);
    // function ourSelectors() {
    //   //open btn
    //   var openBtn = document.querySelector(".open-btn");
    //   //close btn
    //   var closeBtn = document.querySelector(".close-btn");
    //   return {
    //     openBtn,
    //     closeBtn,
    //   };
    // }
  }

  testingStuff(event) {
    console.log(event);
    // function thankYouJosh() {
    //   var joshIsGreatPerson = true;
    //   while (joshIsGreatPerson) {
    //     console.log("Thank you Josh");
    //   }
    // }
  }

  render() {
    // we are able to call the func ourSelectors in the render method because we assign the func reference to ourSelector as a value to the obj property
    //selector in the obj (this.state) of this component
    console.log("render method", this.state.selector); //this will be our function from selectors.js that we export as ourSelectors
    console.log("render method not referencing this.state", ourSelectors()); //openBtn and closeBtn are null
    console.log(this.testing);
    return (
      <article
        className="navbar-container"
        // onTouchStart={this.handleTouchEvent}
        // onKeyDown={this.handleKeyDownEvent}
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="112" height="18">
          <desc>Insure Company logo</desc>
          <path
            fill="#2C2830"
            d="M0 .224h3.578v17.53H0V.223zm8.086 0h3.555l10.923 5.72V.224h3.556v17.53h-3.556V9.711L11.641 4.026v13.727H8.086V.224zm23.81 12.314c.635.36 1.28.683 1.934.97.654.288 1.333.531 2.035.73.703.198 1.442.349 2.215.454.774.104 1.599.157 2.473.157 1.054 0 1.952-.07 2.692-.208.74-.138 1.344-.329 1.811-.572.467-.243.808-.533 1.02-.869.214-.336.32-.703.32-1.1 0-.635-.265-1.137-.796-1.507-.53-.37-1.35-.556-2.456-.556-.486 0-.998.032-1.537.096l-.811.1-.82.107a97.03 97.03 0 01-1.626.208c-.535.063-1.038.095-1.509.095-.785 0-1.538-.1-2.26-.303a5.98 5.98 0 01-1.917-.908 4.5 4.5 0 01-1.33-1.514c-.328-.606-.493-1.312-.493-2.12 0-.478.066-.953.196-1.424.131-.471.34-.922.628-1.352.288-.43.66-.83 1.116-1.2a6.682 6.682 0 011.655-.958c.646-.27 1.394-.48 2.243-.634.848-.153 1.814-.23 2.899-.23.785 0 1.573.043 2.366.129.792.086 1.564.207 2.316.364.751.157 1.475.346 2.17.567.695.22 1.342.465 1.94.734l-1.559 2.871a16.689 16.689 0 00-1.592-.6 18.789 18.789 0 00-1.783-.476 20.428 20.428 0 00-1.924-.32 17.169 17.169 0 00-2.024-.118c-.98 0-1.785.071-2.417.213-.632.143-1.135.324-1.508.544-.374.221-.634.468-.78.74a1.714 1.714 0 00-.219.814c0 .523.236.951.707 1.284.471.333 1.189.499 2.153.499.39 0 .836-.028 1.34-.084l.777-.089.816-.096a72.218 72.218 0 011.705-.185c.58-.056 1.142-.084 1.688-.084 1.031 0 1.945.115 2.742.347.796.232 1.463.563 2.001.993.539.43.946.95 1.223 1.559.277.609.415 1.291.415 2.046 0 1.01-.234 1.909-.701 2.698-.467.788-1.133 1.454-1.996 1.996-.864.542-1.905.953-3.124 1.233-1.218.28-2.575.421-4.07.421-.988 0-1.952-.062-2.894-.185a21.57 21.57 0 01-2.709-.527 20.3 20.3 0 01-2.467-.819A17.998 17.998 0 0130 15.421l1.895-2.883zM53.382.224h3.555V9.88c0 .793.109 1.498.326 2.114.216.617.54 1.139.97 1.565.43.426.962.75 1.598.97.635.22 1.375.33 2.22.33.838 0 1.576-.11 2.215-.33.64-.22 1.174-.544 1.604-.97.43-.426.753-.948.97-1.565.217-.616.325-1.321.325-2.114V.224h3.555v10.083c0 1.15-.194 2.198-.583 3.14a6.668 6.668 0 01-1.693 2.422c-.74.673-1.647 1.193-2.72 1.559-1.073.366-2.297.55-3.673.55-1.375 0-2.6-.184-3.673-.55-1.072-.366-1.979-.886-2.72-1.559a6.668 6.668 0 01-1.693-2.422c-.388-.942-.583-1.99-.583-3.14V.224zm21.667 0h8.916c1.346 0 2.513.14 3.5.42.986.281 1.805.687 2.455 1.218a4.907 4.907 0 011.453 1.94c.318.762.476 1.626.476 2.59 0 .651-.078 1.27-.235 1.857a5.512 5.512 0 01-.723 1.62 5.526 5.526 0 01-1.228 1.318 6.677 6.677 0 01-1.739.959l3.813 5.607h-4.351l-3.297-4.98-5.484-.01v4.99H75.05V.224zm9.006 9.466c.673 0 1.262-.079 1.766-.236.505-.157.928-.377 1.268-.661.34-.285.594-.63.762-1.038a3.54 3.54 0 00.253-1.362c0-.98-.337-1.737-1.01-2.272-.673-.534-1.686-.801-3.039-.801h-5.45v6.37h5.45zm12-9.466h14.927v3.118H99.611v3.5h10.071v2.926h-10.07v4.879h11.607v3.106H96.056V.224z"
          />
        </svg>
        {/* nav will have display:none at mobile layout and display: static at desktop layout */}
        <HomepageDesktopNav />
        <button
          aria-label="open navbar menu"
          className="open-btn"
          aria-pressed="false"
          /***** ****/
          // onTouchStart={this.handleOpenNavMenu}
        >
          <img src={Hamburger} alt="the horizontal lines" />
        </button>
        <button
          aria-label="close navbar menu"
          className="close-btn"
          aria-pressed="true"
          /***** ****/
          // onTouchStart={this.handleCloseNavMenu}
        >
          <img src={Close} alt="" />
        </button>
        {/* items={this.state.testArr[0]} we changed our this.state to this.state.openBtn instead of this.state.testArr */}
        <NavModal>{/* <HomepageNav /> */}</NavModal>
      </article>
    );
  }
}

export default Navbar;
