import React from "react";
import ReactDOM from "react-dom";
import "../public/styles.css";
import Popular from "./components/PopularNavbar/PopularNavbar";
import Battle from "./components/Battle/Battle";
import Results from "./components/Results/Results";
import { ThemeProvider } from "../context/theme";
import Nav from "../src/components/Nav/Nav";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

class App extends React.Component {
  constructor(props) {
    super(props);

    // whenever we want the UI to update based on some value in our app updating we will stick that value in our state

    this.state = {
      theme: "light",
      toggleTheme: () => {
        this.setState(({ theme }) => ({
          theme: theme == "light" ? "dark" : "light",
        }));
      },
    };
  }
  render() {
    return (
      // <ThemeProvider> will take in a prop called value. whatever we passed to value prop
      //will be available to any component inside of our application that use the <ThemeConsumer>(the consumer)
      <Router>
        <ThemeProvider value={this.state}>
          <div className={this.state.theme}>
            <div className="container">
              <Nav />
              {/* using Router to render Popular and Battle component */}
              {/* <Popular /> */}
              {/* <Battle /> */}
              <Route exact path="/" component={Popular} />
              <Route exact path="/battle" component={Battle} />
              <Route path="/battle/results" component={Results} />
              {/* modify webpack.config.js file. the devServer part */}
            </div>
          </div>
        </ThemeProvider>
      </Router>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
