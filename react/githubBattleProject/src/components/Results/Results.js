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
import Loading from "../../components/Loading/Loading";
import Tooltip from "../../components/Tooltip/Tooltip";
import queryString from "query-string";
import { Link } from "react-router-dom";

const styles = {
  container: {
    position: "relative",
    display: "flex",
  },
  tooltip: {
    boxSizing: "border-box",
    position: "absolute",
    width: "160px",
    bottom: "100%",
    left: "50%",
    marginLeft: "-80px",
    borderRadius: "3px",
    backgroundColor: "hsla(0, 0%, 20%, 0.9)",
    padding: "7px",
    marginBottom: "5px",
    color: "#fff",
    textAlign: "center",
    fontSize: "14px",
  },
};

// converting function component to class component we want to work with state
// converting class component back to function component
/* we moved our tooltip code into its own component Tooltip */

// class ProfileList extends React.Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       hoveringLocation: false,
//       hoveringCompany: false,
//     };

//     this.mouseOver = this.mouseOver.bind(this);
//     this.mouseOut = this.mouseOut.bind(this);
//   }

//   mouseOver(id) {
//     this.setState({
//       [id]: true,
//     });
//   }

//   mouseOut(id) {
//     this.setState({
//       [id]: false,
//     });
//   }

//   render() {
//     var { profile } = this.props;
//     var { hoveringLocation, hoveringCompany } = this.state;

//     return (
//       <ul className="card-list">
//         <li>
//           <FaUser color="rgb(239,115,115)" size={22} />
//           {profile.name}
//         </li>

//         {profile.location && (
//           <li
//             onMouseOver={() => this.mouseOver("hoveringLocation")}
//             onMouseOut={() => this.mouseOut("hoveringLocation")}
//             style={styles.container}
//           >
//             {hoveringLocation === true && (
//               <div style={styles.tooltip}>User's location</div>
//             )}
//             <FaCompass color="rgb(144,115,255)" size={22} />
//             {profile.location}
//           </li>
//         )}
//         {profile.company && (
//           <li
//             onMouseOver={() => this.mouseOver("hoveringCompany")}
//             onMouseOut={() => this.mouseOut("hoveringCompany")}
//             style={styles.container}
//           >
//             {hoveringCompany === true && (
//               <div style={styles.tooltip}>User's company</div>
//             )}
//             <FaBriefcase color="#795548" size={22} />
//             {profile.company}
//           </li>
//         )}
//         <li>
//           <FaUsers color="rgb(129,195,245)" size={22} />
//           {profile.followers.toLocaleString()} followers
//         </li>
//         <li>
//           <FaUserFriends color="rgb(64,183,95)" size={22} />
//           {profile.following.toLocaleString()} follow
//         </li>
//       </ul>
//     );
//   }
// }

// converting function component to class component we want to work with state
// converting class component back to function component

function ProfileList({ profile }) {
  console.log("profile", profile);
  return (
    <ul className="card-list">
      <li>
        <FaUser color="rgb(239,115,115)" size={22} />
        {profile.name}
      </li>

      {profile.location && (
        <li>
          <Tooltip text="User's location">
            {/* things that are wrapped between <Tooltip> </Tooltip> are the component's children */}
            <FaCompass color="rgb(144,115,255)" size={22} />
            {profile.location}
          </Tooltip>
        </li>
      )}
      {profile.company && (
        <li>
          <Tooltip text="User's company">
            <FaBriefcase color="#795548" size={22} />
            {profile.company}
          </Tooltip>
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
    // we are getting playerOne and playerTwo from query string now instead of from props(this.props)
    // var { playerOne, playerTwo } = this.props;
    var { playerOne, playerTwo } = queryString.parse(
      this.props.location.search
    );
    // battle func in api.js takes in an array as input/value/argument
    //when setState and ReactDOM.render is called it will trigger a reRender
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
      return <Loading text="Battling" />;
    }

    if (error) {
      return <p className="center-text error">{error}</p>;
    }
    return (
      <React.Fragment>
        <div className="grid space-around container-sm">
          {/* playerOne */}
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
          {/* playerTwo */}
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
        {/* button is converted to a Link */}
        <Link className="btn dark-btn btn-space" to="/battle">
          Reset
        </Link>
      </React.Fragment>
    );
  }
}

/* Results is now being rendered by React router, we dont need propTypes on the Result component */
// Results.propTypes = {
//   playerOne: PropTypes.string.isRequired,
//   playerTwo: PropTypes.string.isRequired,
// we dont need onReset it is not coming in by props
//Results is being rendered by React router
// onReset: PropTypes.func.isRequired,
// };

export default Results;
