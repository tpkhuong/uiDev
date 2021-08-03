import React from "react";
import { FaUserFriends, FaFighterJet, FaTrophy } from "react-icons/fa";
import PropTypes from "prop-types";

function Instructions() {
  return (
    <div className="instructions-container">
      <h1 className="center-text header-lg">Instructions</h1>
      <ol className="container-sm grid center-text battle-instructions">
        <li>
          <h2 className="header-sm">Enter two Github users</h2>
          <FaUserFriends
            className="bg-light"
            color="rgb(255,191,116)"
            size={140}
          />
        </li>
        <li>
          <h2 className="header-sm">Battle</h2>
          <FaFighterJet className="bg-light" color="#727272" size={140} />
        </li>
        <li>
          <h2 className="header-sm">See the winners</h2>
          <FaTrophy className="bg-light" color="rgb(255,215,0)" size={140} />
        </li>
      </ol>
    </div>
  );
}

class PlayerInput extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();

    this.props.onSubmit(this.state.username);
  }

  handleChange(event) {
    this.setState({
      username: event.target.value,
    });
  }
  render() {
    return (
      <form className="column player" onSubmit={this.handleSubmit}>
        <label htmlFor="username" className="player-label">
          {this.props.label}
        </label>
        <div className="row player-inputs">
          <input
            type="text"
            id="username"
            className="input-light"
            placeholder="github username"
            autoComplete="off"
            value={this.state.username}
            onChange={this.handleChange}
          />
          {/* in the button element the disabled based on our this.state.username. when this.state.username has no value diabled will be true because we are using
          ! on this.state.username !undefined will be true. when this.state.username has a value which means user enter a username or text in the input
          disabled will false because this.state.username will be truthy => !true will be false
          look at dark-btn and dark-btn:disabled css code. dark-btn is applied when user enter data to input
          dark-btn:disabled is applied when input has no data
          */}
          <button
            className="btn dark-btn"
            type="submit"
            disabled={!this.state.username}
          >
            Submit
          </button>
        </div>
      </form>
    );
  }
}

PlayerInput.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
};

class Battle extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      playerOne: null,
      playerTwo: null,
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(id, player) {
    this.setState({
      [id]: player,
    });
  }

  render() {
    var { playerOne, playerTwo } = this.state;
    return (
      <React.Fragment>
        <Instructions />
        {/* <PlayerInput
          label="Labels!"
          onSubmit={(value) => console.log("value", value)}
        /> */}
        <div className="players-container">
          <h2 className="center-text header-lg">Players</h2>
          <div className="row space-around">
            {playerOne === null && (
              <PlayerInput
                label="Player One"
                onSubmit={(player) => this.handleSubmit("playerOne", player)}
              />
            )}
            {playerTwo === null && (
              <PlayerInput
                label="Player Two"
                onSubmit={(player) => this.handleSubmit("playerTwo", player)}
              />
            )}
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Battle;
