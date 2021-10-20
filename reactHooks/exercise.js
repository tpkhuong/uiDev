/***** theme exercise *****/

import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./styles.css";

/*
  INSTRUCTIONS:
  Convert the code below from a Class component
  using setState to a function component using 
  the useState Hook.
*/

class Theme extends React.Component {
  state = {
    theme: "light",
  };
  toDark = () => this.setState({ theme: "dark" });
  toLight = () => this.setState({ theme: "light" });
  render() {
    const { theme } = this.state;

    return (
      <div className={theme}>
        {theme === "light" ? (
          <button onClick={this.toDark}>🔦</button>
        ) : (
          <button onClick={this.toLight}>💡</button>
        )}
      </div>
    );
  }
}

// using function component

function Theme(props) {
  // useState goes here
  const [theme, setTheme] = React.useState("light");
  const toggleDark = function changeToDark() {
    return setTheme((theme) => {
      // theme will be the current value of theme which is "light"
      console.log("toggleDark", theme);
      return (theme = "dark");
    });
  };
  const toggleLight = function changeToLight() {
    return setTheme((theme) => {
      // theme will be the current value of theme which is "dark" because our toggleDark will assign str "dark" to property of theme
      console.log("toggleLight", theme);
      return (theme = "light");
    });
  };
  return (
    <div className={theme}>
      {theme == "light" ? (
        <button onClick={toggleDark}>🔦</button>
      ) : (
        <button onClick={toggleLight}>💡</button>
      )}
    </div>
  );
}

// another way to to solve exercise
function Theme(props) {
  // useState goes here
  const [theme, setTheme] = React.useState("light");
  const toggleDark = function changeToDark() {
    return setTheme((theme) => {
      // theme will be the current value of theme which is "light"
      console.log("toggleDark", theme);
      return "dark";
    });
  };
  const toggleLight = function changeToLight() {
    return setTheme((theme) => {
      // theme will be the current value of theme which is "dark" because our toggleDark will assign str "dark" to property of theme
      console.log("toggleLight", theme);
      return "light";
    });
  };
  return (
    <div className={theme}>
      {theme == "light" ? (
        <button onClick={toggleDark}>🔦</button>
      ) : (
        <button onClick={toggleLight}>💡</button>
      )}
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<Theme />, rootElement);

/***** Todos exercise *****/

/*
  INSTRUCTIONS:
  Create a "todo" app with the following criteria.
    1. The user can add new todo items
    2. The user can remove todo items
*/

function Todo() {
  const arrOfItems = [];
  //   useState goes here
  const [item, setList] = React.useState([]);
  // useEffect
  React.useEffect(() => {
    const inputField = document.querySelector("#item");
    const submitBtn = document.querySelector("button[type='submit']");
    const deleteBtn = document.querySelector("#delete-btn");
    // add todo
    submitBtn.addEventListener("click", function addItem(event) {
      setList(() => {
        item.push(inputField.value);
        console.log(item);
      });
    });
    //delete todo
    if (deleteBtn !== null) {
      deleteBtn.addEventListener("click", function deleteItem(event) {
        setList(() => {
          arrOfItems.pop();
        });
      });
    }
  });
  //add item
  //remove item
  return (
    <div>
      <form action="#">
        <label htmlFor="item"></label>
        <input id="item" type="text" placeholder="enter a todo list item" />
        <button type="submit" aria-label="add item button" role="button">
          Submit
        </button>
      </form>
      <ul role="menu" className="navlist">
        {arrOfItems.length === 0
          ? null
          : arrOfItems.map((eachItem, index, list) => {
              return (
                <li key={`${Math.random * index}`} role="none">
                  {eachItem}
                </li>
              );
            })}
        {arrOfItems.length > 0 ? (
          <button
            aria-label="delete item"
            role="button"
            className="delete-btn"
          ></button>
        ) : null}
      </ul>
    </div>
  );
}
function Todo() {
  //   useState goes here
  const [item, itemState] = React.useState("");
  const [arrOfItems, arrState] = React.useState([]);
  React.useEffect(() => {
    const inputField = document.querySelector("#item");
    const submitBtn = document.querySelector("button[type='submit']");
    const deleteBtn = document.querySelector("#delete-btn");
    // add todo
    item["inputField"] = inputField;
  });

  const addItem = arrState((arrInput) => {
    arrInput.push(inputField.value);
  });
  const deleteItem = arrState(() => {
    arrOfItems.pop();
  });
  //add item
  //remove item
  return (
    <div>
      <form action="#">
        <label htmlFor="item"></label>
        <input id="item" type="text" placeholder="enter a todo list item" />
        <button
          onClick={addItem}
          type="submit"
          aria-label="add item button"
          role="button"
        >
          Submit
        </button>
      </form>
      <ul role="menu" className="navlist">
        {arrInput.map((todoItem, index, list) => {
          <li key={`${Math.random * index}`} role="none" className="navitem">
            {todoItem}
          </li>;
          {
            arrOfItems.length > 0 ? (
              <button
                onClick={deleteItem}
                role="button"
                className="delete-btn"
                id="delete-button"
              >
                Delete
              </button>
            ) : null;
          }
        })}
      </ul>
    </div>
  );
}

class Todo extends React.Component {
  constructor(props) {
    super(props);

    this.handleAddingTodos = this.handleAddingTodos.bind(this);

    this.state = {
      item: "",
      arrOfItems: [],
    };
  }

  componentDidMount() {
    const inputElement = document.querySelector(".input-field");
    const submitBtn = document.querySelector(".submit-btn");
    const closeBtn = document.querySelector(".delete-btn");
    this.state.closeBtn = closeBtn;
    this.state.inputElement = inputElement;
    submitBtn.addEventListener("click", this.handleAddingTodos);

    if (this.state.closeBtn) {
      this.handleDeletingTodos = this.handleDeletingTodos.bind(this);
    }
  }

  handleAddingTodos(event) {
    // const inputElement = document.querySelector(".input-field");

    if (this.state.arrOfItems.length > 0) {
      this.state.closeBtn.addEventListener("click", this.handleDeleteingTodos);
    }
    // add click event to delete btn when we add an item
    console.log(this.state.arrOfItems);

    const currItem = this.state.inputElement.value;
    this.setState(() => {
      this.state.arrOfItems.push(currItem);
    });
    console.log(this.state.arrOfItems);
  }

  handleDeleteingTodos(event) {}

  render() {
    const { arrOfItems } = this.state;
    return (
      <React.Fragment>
        <form action="#">
          <label htmlFor="itemInput">Enter Todo List</label>
          <input
            type="text"
            className="input-field"
            placeholder="Enter a todo item"
          />
          <button
            type="submit"
            className="submit-btn"
            aria-label="Submit todo list"
          >
            Submit
          </button>
        </form>
        <ul role="menu" className="navlist">
          {arrOfItems.length > 0
            ? arrOfItems.map((item, index, list) => {
                return (
                  <React.Fragment>
                    <li
                      key={`${Math.random * index}`}
                      role="none"
                      className="navitem"
                    >
                      {item}
                    </li>
                    <button
                      className="delete-btn"
                      aria-label={`delete ${item}`}
                    >
                      Delete
                    </button>
                  </React.Fragment>
                );
              })
            : null}
        </ul>
      </React.Fragment>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<Todo />, rootElement);
