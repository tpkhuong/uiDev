import React from "react";
import ReactDOM from "react-dom";
import "../public/styles.css";
import Popular from "./components/PopularNavbar/PopularNavbar";

class App extends React.Component {
  render() {
    return (
      <div className="container">
        <Popular />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
