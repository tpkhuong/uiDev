import React from "react";
/***** order of execution of code *****/

//code in this module outside of class or code outside of the component that current component renders

//in the NavBar component it renders <HomepageDesktopNav> then <NavModal>
//code outside NavModal class component will run first then code outside of <HomepageDesktopNav>
//constructor - of current component module file
//render method - of current component module file

//then the component the current component will render
//example: <HomeDesktopNav> is render inside <NavBar>
//code in HomeDesktopNav constructor will run
//then code in componentDidMount of HomeDesktopNav
//then code in render method of HomeDesktopNav
//then next component rendered in <NavBar> which is <NavModal>
//<NavModal> is render inside <NavBar>
//code in NavModal constructor will run
//then code in render method of NavModal will run
//then componentDidMount of NavModal
//
//componentDidMount
//when we activate a event click, touch, keydown etc

class PricingComponentSection extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <section className="pricing-component" role="region">
        <h2 className="visually-hidden">Pricing Component Section</h2>
        <h2 className="pricing-component__title">Our Pricing</h2>
        {this.props.children}
        {/* toggle button and cards container will be passed in as props.children in the index.js file where PricingComponentSection is rendered */}
        {/* toggle button container */}
        {/* cards container */}
      </section>
    );
  }
}

export default PricingComponentSection;
