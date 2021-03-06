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
import Card from "../../components/Card/Card";
import Loading from "../../components/Loading/Loading";
import Tooltip from "../../components/Tooltip/Tooltip";

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
          <li key={html_url}>
            <Card
              header={`#${index + 1}`}
              avatar={avatar_url}
              href={html_url}
              name={login}
            >
              <ul className="card-list">
                <li>
                  {/* in order to see what Tooltip render or is, first look at what we are importing when we use <Tooltip/>  */}
                  {/* we are importing whatever is coming from Tooltip.js which is the invocation of withHover() passing it the Tooltip component as a value/argument */}
                  {/* then we look at what withHover() is returning */}
                  {/* whatever withHover returns is imported in this file. */}
                  {/* that is what being render right below this */}
                  {/* withHover is returning another Component */}
                  <Tooltip text="Github username">
                    {/* we are not directly rendering our Tooltip we rendering the WithHover component */}
                    {/* any props we pass to <Tooltip/> is being passed as props to WithHover.js */}
                    <FaUser color="rgb(255,191,116)" size={22} />
                    <a href={`https://github.com/${login}`}>{login}</a>
                  </Tooltip>
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
            </Card>
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
      console.log("state", this.state);
      fetchPopularRepos(selectedLanguage)
        .then((data) => {
          // when we pass a function into setState, react will invoke the function passing it the current state(this.state)
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
        {this.isLoading() && <Loading text="Fetching Repos" />}
        {error && <p className="center-text error">{error}</p>}
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
