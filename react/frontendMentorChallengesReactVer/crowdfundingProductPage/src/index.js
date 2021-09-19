import React from "react";
import ReactDOM from "react-dom";
import "../public/styles.css";
import { HeaderSection } from "./components/HeaderSection/HeaderSection";
import MainSection from "./components/MainSection/MainSection";
import FooterSection from "./components/FooterSection/FooterSection";

import { NavBar } from "./components/NavBar/NavBar.jsx";

class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <React.Fragment>
        <HeaderSection>
          <NavBar />
          {/* <nav>
            <ul>
              <li>
                <a href="">Hello</a>
              </li>
              <li>
                <a href="">React</a>
              </li>
              <li>
                <a href="">This is the navbar in header</a>
              </li>
            </ul>
          </nav> */}
        </HeaderSection>
        <MainSection aria-pressed="true">
          <h1>Crowd Funding Product Page</h1>
        </MainSection>
        <FooterSection>
          <nav>
            <ul>
              <li>
                <a href="">Hello</a>
              </li>
              <li>
                <a href="">React</a>
              </li>
              <li>
                <a href="">This is the navbar in footer</a>
              </li>
            </ul>
          </nav>
        </FooterSection>
      </React.Fragment>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app-wrapper"));
