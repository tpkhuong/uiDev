import React from "react";
import ReactDOM from "react-dom";
import "../public/styles.css";
import MainSection from "./components/MainSection/MainSection";
import PricingComponentSection from "./components/PricingComponentSection/PricingComponentSection";
import { ToggleButton, SayStuff } from "./components/ToggleButton/ToggleButton";
import PlanCards from "./components/PlanCards/PlanCards";
import { ourSelectors } from "./selectors";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.ourObj = {};
    this.state = {
      isPressed: "false",
    };
    this.handleClickOnBtn = this.handleClickOnBtn.bind(this);
  }

  componentDidMount() {
    const { toggleBtn } = ourSelectors();
    this.ourObj.btn = toggleBtn;
    console.log(toggleBtn);
    toggleBtn.addEventListener("click", this.handleClickOnBtn);
  }

  handleClickOnBtn(event) {
    console.log(this.state);
    const ariaPressed = this.ourObj.btn.getAttribute("aria-pressed");
    //   initial state of isPressed will be string "false"
    //when user click on toggleBtn we will call setState and change isPressed to "true" if aria-pressed is false
    //we will pass this state of isPressed to <PlanCards> component when isPressed is "false" we will use "annually"

    // if (ariaPressed == "false") {
    //   //   this.ourObj.btn.setAttribute("aria-pressed", "true");
    //   this.setState({
    //     isPressed: "true",
    //   });
    // } else {
    //   //   this.ourObj.btn.setAttribute("aria-pressed", "false");
    //   //when user click on toggleBtn we will call setState and change isPressed to "false" if aria-pressed is "true"
    //   //we will pass this state of isPressed to <PlanCards> component when isPressed is "true" we will use "monthly"
    //   this.setState({
    //     isPressed: "false",
    //   });
    // }
    //ternary operator
    ariaPressed == "false"
      ? this.setState({ isPressed: "true" })
      : this.setState({ isPressed: "false" });
  }

  render() {
    return (
      <MainSection>
        <PricingComponentSection>
          {/* render toggleButton and card container here as PricingComponentSection children */}
          <ToggleButton isPressed={this.state.isPressed} />
          <PlanCards pricePlan={this.state.isPressed} />
          {/* <SayStuff /> another component(class) from ToggleButton js file*/}
          {/* toggle button container */}
          {/* cards container */}
        </PricingComponentSection>
      </MainSection>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app-wrapper"));
