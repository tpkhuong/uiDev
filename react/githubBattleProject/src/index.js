import React from "react";
import ReactDOM from "react-dom";
import "../public/styles.css";
import Popular from "./components/PopularNavbar/PopularNavbar";
import Battle from "./components/Battle/Battle";

class App extends React.Component {
  render() {
    return (
      <div className="container">
        {/* <Popular /> */}
        <Battle />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
