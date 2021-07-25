import React from "react";
import ReactDOM from "react-dom";

class Popular extends React.Component {
  render() {
    //   variable goes here
    var languages = ["All", "JavaScript", "Ruby", "Java", "CSS", "Python"];
    return (
      <ul className="flex-center">
        {languages.map((language, index) => (
          <li key={language}>
            <button className="btn-clear nav-link">{language}</button>
          </li>
        ))}
      </ul>
    );
  }
}

export default Popular;
