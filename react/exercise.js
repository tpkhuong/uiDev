// imperative

function imperativeDouble(arrInput) {
  var result = [];
  for (let index = 0; index < arrInput.length; index++) {
    let element = arrInput[index];
    // let elementDouble = element * 2;

    // result.push(elementDouble);
    result.push(element * 2);
  }
  return result;
}

function imperativeSum(arrInput) {
  var sum = 0;
  for (let index = 0; index < arrInput.length; index++) {
    let element = arrInput[index];
    sum += element;
  }
  return sum;
}

btnElement.addEventListener("click", function doMoreStuff(event) {
  this.classList.toggle("highlight");
  this.textContent =
    this.textContent === "Add Highlight" ? "Remove Highlight" : "Add Highlight";
});

document
  .getElementById("btn")
  .addEventListener("click", function doStuff(event) {
    this.classList.toggle("highlight");
    this.textContent =
      this.textContent === "Add Highlight"
        ? "Remove Highlight"
        : "Add Highlight";
  });

// declarative
function double(arrInput) {
  return arrInput.map(function timesTwo(eachValue) {
    return eachValue * 2;
  });
}

function add(arrInput) {
  return arrInput.reduce(function getSum(buildingUp, currentValue) {
    return buildingUp + currentValue;
  }, 0);
}

<Btn
  onToggleHighlight={this.handleToggleHighlight}
  highlight={this.state.highlight}
>
  {this.state.buttonText}
</Btn>;

var element = document.querySelector("#btn");
var btnElement = document.getElementById("btn");

/* props exercise 3 */

import React from "react";
import ReactDOM from "react-dom";

class Avatar extends React.Component {
  render() {
    return <img src={this.props.img} />;
  }
}

class Label extends React.Component {
  render() {
    return <h1>Name: {this.props.name}</h1>;
  }
}

class ScreenName extends React.Component {
  render() {
    return <h3>Username: {this.props.username}</h3>;
  }
}

class Badge extends React.Component {
  render() {
    return (
      <div>
        <Avatar img={this.props.user.img} />
        <Label name={this.props.user.name} />
        <ScreenName username={this.props.user.username} />
      </div>
    );
  }
}

ReactDOM.render(
  <Badge
    user={{
      name: "Tyler McGinnis",
      img: "https://avatars0.githubusercontent.com/u/2933430?v=3&s=460",
      username: "tylermcginnis",
    }}
  />,
  document.getElementById("root")
);

/* props exercise 3 */

/* list exercise  */

/* exercise1 */

import React from "react";
import ReactDOM from "react-dom";

class List extends React.Component {
  render() {
    // Render a list using the "friends" being passed in.
    return (
      <ul>
        {this.props.friends.map((friend) => (
          <li key={friend.id}>{friend.name}</li>
        ))}
      </ul>
    );
  }
}

ReactDOM.render(
  <List
    friends={[
      { id: 893, name: "Mikenzi" },
      { id: 871, name: "Cash" },
      { id: 982, name: "Steven" },
      { id: 61, name: "Kimmy" },
      { id: 117, name: "Doug" },
    ]}
  />,
  document.getElementById("root")
);

/* exercise1 */
/* exercise2 */

import React from "react";
import ReactDOM from "react-dom";

class List extends React.Component {
  render() {
    // Render a list using the "friends" being passed in.

    return (
      <ul>
        {this.props.friends.map((friend) => (
          <li key={Math.random() * 10}>{friend}</li>
        ))}
      </ul>
    );
  }
}

ReactDOM.render(
  <List friends={["Mikenzi", "Cash", "Steven", "Kimmy", "Doug"]} />,
  document.getElementById("root")
);

/* exercise2 */

/* list exercise  */
