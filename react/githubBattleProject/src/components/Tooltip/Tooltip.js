import React from "react";
import PropTypes from "prop-types";
import withHover from "../withHover/withHover";

const styles = {
  container: {
    position: "relative",
    display: "flex",
  },
  tooltip: {
    boxSizing: "border-box",
    position: "absolute",
    width: "160px",
    bottom: "100%",
    left: "50%",
    marginLeft: "-80px",
    borderRadius: "3px",
    backgroundColor: "hsla(0, 0%, 20%, 0.9)",
    padding: "7px",
    marginBottom: "5px",
    color: "#fff",
    textAlign: "center",
    fontSize: "14px",
  },
};

/* going to use higher order component */

// class Tooltip extends React.Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       hovering: false,
//     };

//     this.mouseOver = this.mouseOver.bind(this);
//     this.mouseOut = this.mouseOut.bind(this);
//   }
//   mouseOver() {
//     this.setState({
//       hovering: true,
//     });
//   }

//   mouseOut() {
//     this.setState({
//       hovering: false,
//     });
//   }
//   render() {
//     var { text, children } = this.props;
//     var { hovering } = this.state;
//     return (
//       <div
//         onMouseOver={this.mouseOver}
//         onMouseOut={this.mouseOut}
//         style={styles.container}
//       >
//         {hovering === true && <div style={styles.tooltip}>{text}</div>}
//         {children}
//       </div>
//     );
//   }
// }

// decouple our Tooltip component

function Tooltip({ text, children, hovering }) {
  return (
    // don't need onMouseOver or onMouseOut because we are passing in hovering.
    <div style={styles.container}>
      {hovering === true && <div style={styles.tooltip}>{text}</div>}
      {children}
    </div>
  );
}

Tooltip.propTypes = {
  text: PropTypes.string.isRequired,
  hovering: PropTypes.bool.isRequired,
};

//export invocation of withHover passing in Tooltip component. withHover(Tooltip)
//withHover has to return a component so that our Tooltip component still works
// one way to avoid naming collisions. pass in another agrument to invocation of withHover
//change the class WithHover definition
//withHover(Tooltip, "hovering"); dont need to pass in "hovering" because in our withHover definition we are using default paremeter. that parameter is "hovering"
export default withHover(Tooltip, "hovering");

// export default Tooltip;
