import React from "react";
import ReactDOM from "react-dom";

class Popular extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedLanguage: "All",
    };
    this.updateLanguage = this.updateLanguage.bind(this);
  }

  updateLanguage(selectedLanguage) {
    this.setState({ selectedLanguage });
  }

  //since we are not passing updateLanguage to another component we dont need this.updateLanguage = this.updateLanguage.bind(this).
  //we dont need to bind updateLanguage to the current context using the this keyword.

  render() {
    //   variable goes here
    var languages = ["All", "JavaScript", "Ruby", "Java", "CSS", "Python"];
    return (
      <ul className="flex-center">
        {languages.map((language, index) => (
          <li key={language}>
            <button
              className="btn-clear nav-link"
              style={
                language === this.state.selectedLanguage
                  ? { color: "rgb(187,46,31)" }
                  : null
              }
              onClick={() => this.updateLanguage(language)}
            >
              {language}
            </button>
          </li>
        ))}
      </ul>
    );
  }
}
export default Popular;
