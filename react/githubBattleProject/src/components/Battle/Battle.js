import React from "react";
import {
  FaUserFriends,
  FaFighterJet,
  FaTrophy,
  FaTimesCircle,
} from "react-icons/fa";
import PropTypes from "prop-types";
import Results from "../Results/Results";

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

  // handleSubmit is invoked/called when the form is submitted when user click on the btn with type="submit"
  handleSubmit(event) {
    event.preventDefault();
    // the .onSubmit is coming from us passing in a prop called onSubmit in our <PlayerInput/> component
    //whatever is being entered in the input field(the username) will be passed into this.props.onSubmit
    //which will be passed into the func that is declared in <Battle/> compoent. as the "player" parameter
    //of the func this.handleSubmit in <Battle/> component
    this.props.onSubmit(this.state.username);
    console.log(this.props.onSubmit);
  }

  handleChange(event) {
    // whatever the user enter in <input> will be assigned to this.state.username in our state
    //whenever setState or ReactDOM.render is called it will trigger a reRender
    this.setState({
      username: event.target.value,
    });
  }

  render() {
    return (
      // the onSubmit attr in <form> element with the func/method this.handleSubmit will be invoked when the <button> with attr type="submit" is clicked
      /* we will render <PlayerIput> inside of <Battle> component pass a onSubmit prop. whenever <form> is submitted the prop(we will pass a function as prop) 
      onSubmit prop/func inside the <PlayerInput> component declaration which is inside the handleSubmit method will be invoked passing username
      */
      <form className="column player" onSubmit={this.handleSubmit}>
        <label htmlFor="username" className="player-label">
          {this.props.label}
        </label>
        <div className="row player-inputs">
          {/* Player Input video: controlled components. the value of the input will be whatever the value is assigned to this.state.username
          in the this.setState of the component in the constructor of the component. we are updating the local state using handleChange will call
          this.setState({username: event.target.value}) which will reRender. event.target.value will be whatever is typed into the input.
          */}
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

function PlayerPreview({ username, onReset, label }) {
  return (
    <div className="column player">
      <h2 className="player-label">{label}</h2>
      <div className="row bg-light">
        <div className="player-info">
          <img
            className="avatar-small"
            src={`https://github.com/${username}.png?size=200`}
            alt={`Avatar for ${username}`}
          />
          <a href={`https://github.com/${username}`} className="link">
            {username}
          </a>
        </div>
        <button className="btn-clear flex-center" onClick={onReset}>
          <FaTimesCircle color="rgb(194,57,42)" size={26} />
        </button>
      </div>
    </div>
  );
}

PlayerPreview.propTypes = {
  username: PropTypes.string.isRequired,
  onReset: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
};

class Battle extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      playerOne: null,
      playerTwo: null,
      battle: false,
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleReset = this.handleReset.bind(this);
  }

  handleSubmit(id, player) {
    this.setState({
      [id]: player,
    });
  }

  handleReset(id) {
    this.setState({
      [id]: null,
    });
  }
  render() {
    var { playerOne, playerTwo, battle } = this.state;
    // reset btn algoritm is here when onReset is called it will invoke this.setState({playerOne: null, playerTwo: null, battle: false,})
    //we will access it in <Results/> component. we will pass it to <button> onClick={}
    //using this.props.reset
    if (battle === true) {
      return (
        <Results
          playerOne={playerOne}
          playerTwo={playerTwo}
          onReset={() => {
            this.setState({
              playerOne: null,
              playerTwo: null,
              battle: false,
            });
          }}
        />
      );
    }

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
            {playerOne === null ? (
              <PlayerInput
                label="Player One"
                // the onSubmit here is being passed as prop into our <PlayerInput/> component and it is being called/invoked in handleSubmit in <PlayerInput/> component
                //it is also being used in the <Form> element as an attr and when onSubmit is called it will invoked this.handleSubmit of <PlayerInput/>
                //the onSubmit attr of <Form> will be called/invoked when user click the <Button> with type="submit"
                //when onSubmit is invoked it is being passed whatever is entered into the input field of <PlayerInput/> component
                //whatever is being entered in the input field will be passed into the func in onSubmit as player
                /* the onSubmit prop we pass into <PlayerInput/> render will be called when handleSubmit method declared in <PlayerInput/> is invoked 
                it will be invoked when the form is submitted because of the onSubmit attr we are passing in this.handleSubmit. <form onSubmit={this.handleSubmit}
                */

                onSubmit={(player) => this.handleSubmit("playerOne", player)}
              />
            ) : (
              <PlayerPreview
                username={playerOne}
                label="Player One"
                onReset={() => this.handleReset("playerOne")}
              />
            )}
            {playerTwo === null ? (
              //this.handleSubmit will call setState. we are passing in two arguments, id and player. id is either "playerOne" or "playerTwo"
              //in the <Battle/> component state "playerOne" will be the data of one player and "playerTwo" will be the data of another player
              //"playerOne" or "playerTwo" will be properties on the this.state obj
              <PlayerInput
                label="Player Two"
                onSubmit={(player) => this.handleSubmit("playerTwo", player)}
              />
            ) : (
              <PlayerPreview
                username={playerTwo}
                label="Player Two"
                onReset={() => this.handleReset("playerTwo")}
              />
            )}
          </div>
          {/* we render this button when both playerOne and playerTwo are not null/undefined/falsy
          when user enter a name in playerOne input and playerTwo input and hit submit button, the battle button below will show. when user click on the <button> it will set the battle property 
          in the state of this Battle component it will render <Results> passing in props: playerOne={playerOne} playerTwo={playerTwo}
          */}
          {playerOne && playerTwo && (
            // battle is a property in our Battle component state when battle is true it will render <Results/>
            <button
              className="btn dark-btn btn-space"
              onClick={() => this.setState({ battle: true })}
            >
              Battle
            </button>
          )}
        </div>
      </React.Fragment>
    );
  }
}

export default Battle;
