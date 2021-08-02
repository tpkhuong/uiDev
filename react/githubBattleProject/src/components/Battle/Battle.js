import React from "react";
import { FaUserFriends, FaFighterJet, FaTrophy } from "react-icons/fa";

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

class Battle extends React.Component {
  // constructor(props) {
  //     super(props)
  // }

  render() {
    return (
      <React.Fragment>
        <Instructions />
      </React.Fragment>
    );
  }
}

export default Battle;
