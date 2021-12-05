import React from "react";
import PropTypes from "prop-types";

var styles = {
  content: {
    fontSize: "2.1875rem",
    position: "absolute",
    left: "0",
    right: "0",
    marginTop: "20px",
    textAlign: "center",
  },
};

class Loading extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      content: props.text,
    };
  }

  componentDidMount() {
    var { speed, text } = this.props;
    this.interval = window.setInterval(() => {
      this.state.content == text + "..."
        ? this.setState({ content: text })
        : //since we are passing a function into setState it means we are changing/updating piece of state of the previous state
          //when we pass a function into this.setState(), it means we want to change the previous state to the new state
          //the obj that is assigned to this.state will be pass in as the value/arugment to the func that we pass into this.setState()
          //we can use obj destructuring
          this.setState(({ content }) => ({
            content: content + ".",
          }));
    }, speed);
  }

  componentWillUnmount() {
    window.clearInterval(this.interval);
  }
  render() {
    return <p style={styles.content}>{this.state.content}</p>;
  }
}

Loading.propTypes = {
  text: PropTypes.string.isRequired,
  speed: PropTypes.number.isRequired,
};

Loading.defaultProps = {
  text: "Loading",
  speed: 300,
};

// default props for function component is like this
// function Loading({ content, text }) {
//   return (
//     {

//     }
//   )
// }

export default Loading;

function testingIdea({ name, profession }) {
  console.log(`Hello ${name}. I am a ${profession}`);
}

var objOfStuff = {
  name: "Deadpool",
  profession: "Cooldude",
};

testingIdea(objOfStuff);
