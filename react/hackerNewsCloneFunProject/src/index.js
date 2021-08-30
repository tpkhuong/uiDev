import React from "react";
import ReactDOM from "react-dom";
import "../public/styles.css";
import Navbar from "./components/Navbar/Navbar";
// Component
// State
// lifecycle
// UI
class App extends React.Component {
  render() {
    return <Navbar></Navbar>;
  }
}

ReactDOM.render(
  // React element
  <App />,
  // where to render the element to
  document.getElementById("app-wrapper")
);
