import React from "react";
import ReactDOM from "react-dom";
import "../public/styles.css";
import Navbar from "./components/Navbar/Navbar";
import DataElement from "./components/DataElement/DataElement";
const dataobj = document.querySelector("#data-obj");
dataobj.dataElement = {
  name: "Hello",
};

// Component
// State
// lifecycle
// UI

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Deadpool",
    };
    console.log("App constructor", dataobj.dataElement);
  }
  render() {
    return (
      <React.Fragment>
        <DataElement />
        <Navbar></Navbar>
      </React.Fragment>
    );
  }
}

ReactDOM.render(
  // React element
  <App />,
  // where to render the element to
  document.getElementById("app-wrapper")
);
