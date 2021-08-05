import React from "react";
import { battle } from "../../../build-utils/api";
import {
  FaCompass,
  FaBriefcase,
  FaUsers,
  FaUserFriends,
  FaCode,
  FaUser,
} from "react-icons/fa";
import Card from "../../components/Card/Card";
import PropTypes from "prop-types";

function ProfileList({ profile }) {
  return (
    <ul className="card-list">
      <li>
        <FaUser color="rgb(239,115,115)" size={22} />
        {profile.name}
      </li>

      {profile.location && (
        <li>
          <FaCompass color="rgb(144,115,255)" size={22} />
          {profile.location}
        </li>
      )}
      {profile.company && (
        <li>
          <FaBriefcase color="#795548" size={22} />
          {profile.company}
        </li>
      )}
      <li>
        <FaUsers color="rgb(129,195,245)" size={22} />
        {profile.followers.toLocaleString()} followers
      </li>
      <li>
        <FaUserFriends color="rgb(64,183,95)" size={22} />
        {profile.following.toLocaleString()} follow
      </li>
    </ul>
  );
}

ProfileList.propTypes = {
  profile: PropTypes.object.isRequired,
};
class Results extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      winner: null,
      loser: null,
      error: null,
      loading: true,
    };
  }
  componentDidMount() {
    var { playerOne, playerTwo } = this.props;

    battle([playerOne, playerTwo])
      .then((players) => {
        this.setState({
          winner: players[0],
          loser: players[1],
          error: null,
          loading: false,
        });
      })
      .catch(({ message }) => {
        this.setState({
          error: message,
          loading: false,
        });
      });
  }
  render() {
    var { winner, loser, error, loading } = this.state;

    if (loading === true) {
      return <p>LOADING</p>;
    }

    if (error) {
      return <p className="center-text error">{error}</p>;
    }
    return (
      <React.Fragment>
        <div className="grid space-around container-sm">
          <Card
            header={winner.score === loser.score ? "Tie" : "Winner"}
            subheader={`Score: ${winner.score.toLocaleString()}`}
            avatar={winner.profile.avatar_url}
            href={winner.profile.html_url}
            name={winner.profile.login}
          >
            <ProfileList profile={winner.profile} />
          </Card>
          {/* <div className="card bg-light">
          <h2 className="header-lg center-text">{}</h2>
          <img
            src={}
            alt={`Avatar for ${}`}
            className="avatar"
          />
          <h3 className="center-text"></h3>
          <h3 className="center-text">
            <a href={} className="link">
              {}
            </a>
          </h3>
        </div> */}

          <Card
            header={winner.score === loser.score ? "Tie" : "Loser"}
            subheader={`Score: ${loser.score.toLocaleString()}`}
            avatar={loser.profile.avatar_url}
            href={loser.profile.html_url}
            name={loser.profile.login}
          >
            <ProfileList profile={loser.profile} />
            {/* 
          code is in our ProfileList function Components
          <ul className="card-list">
            <li>
              <FaUser color="rgb(239,115,115)" size={22} />
              {loser.profile.name}
            </li>

            {loser.profile.location && (
              <li>
                <FaCompass color="rgb(144,115,255)" size={22} />
                {loser.profile.location}
              </li>
            )}
            {loser.profile.company && (
              <li>
                <FaBriefcase color="#795548" size={22} />
                {loser.profile.company}
              </li>
            )}
            <li>
              <FaUsers color="rgb(129,195,245)" size={22} />
              {loser.profile.followers.toLocaleString()} followers
            </li>
            <li>
              <FaUserFriends color="rgb(64,183,95)" size={22} />
              {loser.profile.following.toLocaleString()} follow
            </li>
          </ul> */}
          </Card>
          {/* <div className="card bg-light">
          <h2 className="header-lg center-text">{}</h2>
          <img
            src={}
            alt={`Avatar for ${loser.profile.login}`}
            className="avatar"
          />
          <h3 className="center-text"></h3>
          <h3 className="center-text">
            <a href={} className="link">
              {}
            </a>
          </h3>
        </div> */}
        </div>
        <button className="btn dark-btn btn-space" onClick={this.props.onReset}>
          Reset
        </button>
      </React.Fragment>
    );
  }
}

Results.propTypes = {
  playerOne: PropTypes.string.isRequired,
  playerTwo: PropTypes.string.isRequired,
  onReset: PropTypes.func.isRequired,
};

export default Results;
