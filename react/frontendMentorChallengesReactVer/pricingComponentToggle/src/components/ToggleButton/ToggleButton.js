import React from "react";

// class version

// class ToggleButton extends React.Component {
//   constructor(props) {
//     super(props);
//   }
//   render() {
//     return <div></div>;
//   }
// }

export function ToggleButton(props) {
  return (
    <div className="toggle-container">
      <span>Annually</span>
      <button
        className="toggle-container__button"
        // get this to work with props
        aria-pressed={props.isPressed}
        aria-label="toggle between monthly or annually pricing"
        role="button"
      >
        <span className="toggle-container__button__circle"></span>
      </button>
      <span>Monthly</span>
    </div>
  );
}

export class SayStuff extends React.Component {
  render() {
    return <div>Hello React</div>;
  }
}
