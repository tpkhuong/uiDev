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

export default Loading;
