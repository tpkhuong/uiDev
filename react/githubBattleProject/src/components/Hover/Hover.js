import React from "react";

// withHover will be a component instead of function / Higher Order Component

class Hover extends React.Component {
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
    //   we can get rid of the props object we created below because we don't need to decide what the prop name going to be, our consumer of our Hover component
    // can decide to pass anything they want in the prop/parameter in the Tooltip js in the <Hover> component in the function that is passing in as <Hover> children

    /*var props = {
      [propName]: this.state.hovering,*/
    // we dont need to pass the props through the <Hover> component because when Tooltip is render it is the Tooltip components
    //instead of the withHover component that we had before.
    //withHover component was inside a function component(it was called withHover) it was the component that was returned by the function component(it was called withHover)
    /*  ...this.props,
    };*/
    //   what are we going to render, look at what props are being passed to Hover.js and look at its children
    //<Hover> children is a function being used in Tooltip js file
    return (
      // previous code is in the comments below, we removed it in this Hover component for Render props video
      <div onMouseOut={this.mouseOut} onMouseOver={this.mouseOver}>
        {/* function below expects to receive the hovering state. we can use the state of this component in this.state */}
        {this.props.children(this.state.hovering)}
      </div>
    );
  }
}

export default Hover;

/*
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
        <div onMouseOut={this.mouseOut} onMouseOver={this.mouseOver}>*/
{
  /* we will render Tooltip and pass it hovering prop */
}
{
  /* withHover will render whatever is passed to it in this case Tooltip. look at the component we are exporting in Tooltip */
}
{
  /* which is coming in as Component */
}
/*<Component
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
/* {...props}
          />
        </div>
      );
    }
  };
}*/
