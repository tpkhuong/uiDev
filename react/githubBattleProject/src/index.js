import React from "react";
import ReactDOM from "react-dom";
import "../public/styles.css";
import Popular from "./components/PopularNavbar/PopularNavbar";
import Battle from "./components/Battle/Battle";
import { ThemeProvider } from "../context/theme";
import Nav from "../src/components/Nav/Nav";

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
      <ThemeProvider value={this.state}>
        <div className={this.state.theme}>
          <div className="container">
            <Nav />
            {/* <Popular /> */}
            <Battle />
          </div>
        </div>
      </ThemeProvider>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
