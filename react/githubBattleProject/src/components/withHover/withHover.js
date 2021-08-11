import React from "react";
import { render } from "react-dom";

function withHover(Component, propName = "hovering") {
  return class WithHover extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
        hovering: false,
      };

      this.mouseOver = this.mouseOver.bind(this);
      this.mouseOut = this.mouseOut.bind(this);
    }
    mouseOver() {
      this.setState({
        hovering: true,
      });
    }

    mouseOut() {
      this.setState({
        hovering: false,
      });
    }
    //what will this component render what will the UI look like
    render() {
      var props = {
        [propName]: this.state.hovering,
        ...this.props,
      };
      return (
        <div onMouseOut={this.mouseOut} onMouseOver={this.mouseOver}>
          {/* we will render Tooltip and pass it hovering prop */}
          {/* withHover will render whatever is passed to it in this case Tooltip. look at the component we are exporting in Tooltip */}
          {/* which is coming in as Component */}
          <Component
            //   the props that are passed into <Tooltip/> are being passed to WithHover component in this file
            //   Tooltip is be used in PopularNavbar.js and Tooltip.js
            //remember Tooltip is the component that is returned when withHover(tooltip) is invoked
            //the props beig passed to withHover in this file from PopularNavbar.js or Result.js is not being passed
            //to the Component that is passed into the invocation of withHover
            //   solution. take all the props being passed into withHover pass them through the <Component> here using {...obj spread operator}
            //changing code below to {...props}. look at props obj outside of this return statement
            /*hovering prop will be whatever propName will be
                    still spreading the other props using ...this.props*/
            //         hovering={this.state.hovering}
            // {...this.props}
            {...props}
          />
        </div>
      );
    }
  };
}

export default withHover;
