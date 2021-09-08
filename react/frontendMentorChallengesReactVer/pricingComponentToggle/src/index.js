import React from "react";
import ReactDOM from "react-dom";
import "../public/styles.css";

class App extends React.Component {
  render() {
    return <div>Hello React</div>;
  }
}

ReactDOM.render(<App />, document.getElementById("app-wrapper"));
