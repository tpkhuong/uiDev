import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";
import { fetchPopularRepos } from "../../../build-utils/api";
import {
  FaUser,
  FaStar,
  FaCodeBranch,
  FaExclamationTriangle,
} from "react-icons/fa";

/* using function component */

function LanguagesNav({ selected, onUpdateLanguage }) {
  var languages = ["All", "JavaScript", "Ruby", "Java", "CSS", "Python"];

  return (
    <ul className="flex-center">
      {languages.map((language, index) => (
        <li key={language}>
          <button
            className="btn-clear nav-link"
            style={language === selected ? { color: "rgb(187,46,31)" } : null}
            onClick={() => onUpdateLanguage(language)}
          >
            {language}
          </button>
        </li>
      ))}
    </ul>
  );
}

LanguagesNav.propTypes = {
  selected: PropTypes.string.isRequired,
  onUpdateLanguage: PropTypes.func.isRequired,
};

function ReposGrid({ repos }) {
  console.log(repos);
  return (
    <ul className="grid space-around">
      {repos.map((eachRepo, index) => {
        var { name, owner, html_url, stargazers_count, forks, open_issues } =
          eachRepo;
        var { login, avatar_url } = owner;

        return (
          <li key={html_url} className="repo bg-light">
            <h3 className="header-lg center-text">#{index + 1}</h3>
            <img
              className={"avatar"}
              src={avatar_url}
              alt={`Avatar for ${login}`}
            />
            <h4 className="center-text">
              <a className="link" href={html_url}>
                {login}
              </a>
            </h4>
            <ul className="card-list">
              <li>
                <FaUser color="rgb(255,191,116)" size={22} />
                <a href={`https://github.com/${login}`}>{login}</a>
              </li>
              <li>
                <FaStar color="rgb(255,215,0)" size={22} />
                {stargazers_count.toLocaleString()} stars
              </li>
              <li>
                <FaCodeBranch color="rgb(129,195,245)" size={22} />
                {forks.toLocaleString()} forks
              </li>
              <li>
                <FaExclamationTriangle color="rgb(241,138,147)" size={22} />
                {open_issues.toLocaleString()} open
              </li>
            </ul>
          </li>
        );
      })}
    </ul>
  );
}

ReposGrid.propTypes = {
  repos: PropTypes.array.isRequired,
};

class Popular extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedLanguage: "All",
      repos: {},
      error: null,
    };
    this.updateLanguage = this.updateLanguage.bind(this);
    this.isLoading = this.isLoading.bind(this);
  }

  componentDidMount() {
    this.updateLanguage(this.state.selectedLanguage);
  }

  updateLanguage(selectedLanguage) {
    this.setState({ selectedLanguage, error: null });

    // only want to fetch repos if !this.state.repos[selectedLanguage] is falsy
    if (!this.state.repos[selectedLanguage]) {
      //use arrow functions so we have lexical this

      fetchPopularRepos(selectedLanguage)
        .then((data) => {
          this.setState(({ repos }) => ({
            repos: {
              ...repos,
              [selectedLanguage]: data,
            },
          }));
        })
        .catch((error) => {
          console.log("Error fetching repos: ", error);

          this.setState({
            error: "There was an eror fetching the repositories",
          });
        });
      //use arrow functions so we have lexical this
    }
  }

  //since we are not passing updateLanguage to another component we dont need this.updateLanguage = this.updateLanguage.bind(this).
  //we dont need to bind updateLanguage to the current context using the this keyword.
  isLoading() {
    var { selectedLanguage, repos, error } = this.state;

    return !repos[selectedLanguage] && error === null;
  }

  render() {
    //   variable goes here
    /* code from previous exercise */
    // var languages = ["All", "JavaScript", "Ruby", "Java", "CSS", "Python"];
    var { selectedLanguage, repos, error } = this.state;

    return (
      <React.Fragment>
        <LanguagesNav
          selected={selectedLanguage}
          onUpdateLanguage={this.updateLanguage}
        ></LanguagesNav>

        {this.isLoading() && <p>LOADING</p>}
        {error && <p>{error}</p>}
        {repos[selectedLanguage] && (
          <ReposGrid repos={repos[selectedLanguage]} />
        )}
      </React.Fragment>
    );
    /* code from previous exercise */
    // return (
    //   <ul className="flex-center">
    //     {languages.map((language, index) => (
    //       <li key={language}>
    //         <button
    //           className="btn-clear nav-link"
    //           style={
    //             language === this.state.selectedLanguage
    //               ? { color: "rgb(187,46,31)" }
    //               : null
    //           }
    //           onClick={() => this.updateLanguage(language)}
    //         >
    //           {language}
    //         </button>
    //       </li>
    //     ))}
    //   </ul>
    // );
  }
}
export default Popular;
