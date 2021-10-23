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
    const submitBtn = document.querySelector("button[type='submit']");
    const inputField = document.querySelector("#item");
    console.log("inputField", inputField);
    // const deleteBtn = document.querySelector("#delete-btn");
    // add todo
    // item["inputField"] = inputField;
  });

  const addItem = arrState((arrInput) => {
    if (inputField) {
      arrInput.push(inputField.value);
    }
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
          aria-label="add item"
          role="button"
        >
          Submit
        </button>
      </form>
      <ul role="menu" className="navlist">
        {arrOfItems.map((todoItem, index, list) => {
          <li key={`${Math.random * index}`} role="none" className="navitem">
            {todoItem}
          </li>;
          //   {
          //     arrOfItems.length > 0 ? (
          //       <button
          //         onClick={deleteItem}
          //         role="button"
          //         className="delete-btn"
          //         id="delete-button"
          //       >
          //         Delete
          //       </button>
          //     ) : null;
          //   }
        })}
      </ul>
    </div>
  );
}

class Todo extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      item: "",
      arrOfItems: [],
    };
    this.handleAddingTodos = this.handleAddingTodos.bind(this);
  }

  componentDidMount() {
    const inputElement = document.querySelector(".input-field");
    const submitBtn = document.querySelector(".submit-btn");

    this.state.inputElement = inputElement;
    submitBtn.addEventListener("click", this.handleAddingTodos);

    // if (this.state.closeBtn) {
    //   this.handleDeletingTodos = this.handleDeletingTodos.bind(this);
    // }
  }

  handleAddingTodos(event) {
    // const inputElement = document.querySelector(".input-field");
    // const closeBtn = document.querySelector(".delete-btn");
    const currItem = this.state.inputElement.value;
    this.state.arrOfItems.push(currItem);
    console.log("handleAddingTodos", this.state.arrOfItems);

    // if (this.state.arrOfItems.length > 0) {
    //   this.state.closeBtn = closeBtn;
    //   this.state.closeBtn.addEventListener("click", this.handleDeleteingTodos);
    // }
    // add click event to delete btn when we add an item

    // this.setState(() => {
    //   this.state.arrOfItems.push(currItem);
    // });
    console.log(this.state.arrOfItems);
  }

  handleDeleteingTodos(event) {}

  render() {
    const { arrOfItems } = this.state;
    console.log("render", arrOfItems);
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
          {arrOfItems.length === 0 ? (
            <span>Add a todo item</span>
          ) : (
            arrOfItems.map((item, index, list) => {
              return (
                <li
                  key={`${Math.random * index}`}
                  role="none"
                  className="navitem"
                >
                  {item}
                </li>
              );
            })
          )}
        </ul>
      </React.Fragment>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<Todo />, rootElement);

/**
 * Solution
 * **/

function generateId() {
  return "_" + Math.random().toString(36).substr(2, 9);
}

function Todo() {
  // merging new todo to our current array
  const [todos, setTodos] = React.useState([]);
  const [input, setInput] = React.useState("");

  function handleSubmit() {
    setTodos((todos) => {
      console.log(todos);
      //   was getting an array because we didnt return a new copy of the array with the obj
      //initial value of setTodos is an empty array []
      return todos.concat({
        text: input,
        id: generateId(),
      });
    });
    console.log("handleSubmit");
    console.log("input", input);
    setInput("");
  }

  function deleteTodos(id) {
    setTodos((todos) => {
      console.log("deleteTodos");
      console.log("todos", todos);
      console.log("id", id);
      return todos.filter(function removeItem(item, index) {
        return item.id !== id;
      });
    });
  }

  return (
    <div>
      <input
        type="text"
        value={input}
        placeholder="Add todos"
        onChange={(event) => {
          // setInput will update input
          return setInput(event.target.value);
        }}
      />
      <button onClick={handleSubmit}>Submit</button>
      {/* <ul>
        {todos.map(({ text, id }) => (
          <li key={id}>
            <span>{text}</span>
            <button onClick={() => removeTodo(id)}>X</button>
          </li>
        ))}
      </ul> */}
      <ul role="menu" className="navlist">
        {todos.map(({ text, id }) => {
          // return in map,filter, reduce
          return (
            <li key={id} role="none" className="navitem">
              <span>{text}</span>
              <button
                onClick={() => {
                  deleteTodos(id);
                }}
              >
                X
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

/**
 * show/hide exercise
 * **/

function App({ posts }) {
  return <div>{JSON.stringify(posts, null, 2)}</div>;
}

const rootElement = document.getElementById("root");
ReactDOM.render(
  <App
    posts={[
      {
        id: 0,
        img: "https://res.cloudinary.com/uidotdev/image/upload/c_fit,co_white,fl_text_no_trim,l_text:fonts:proxima-nova-extrabold.ttf_80_center_line_spacing_-18:Code%20Splitting%20with%20React%252C%20React.lazy%252C%20and%20React%20Router,w_1100/fl_layer_apply,y_-30/bo_2px_solid_white,fl_text_no_trim,h_126,l_twitter_name:tylermcginnis,r_max,w_126/fl_layer_apply,g_south_west,x_385,y_72/co_white,fl_text_no_trim,l_text:fonts:proxima-nova-semibold.ttf_38:by/fl_layer_apply,g_south_west,x_552,y_136/co_white,fl_text_no_trim,l_text:fonts:proxima-nova-extrabold.ttf_40:Tyler%20McGinnis/fl_layer_apply,g_south_west,x_610,y_135/co_white,fl_text_no_trim,l_text:fonts:proxima-nova-semibold.ttf_31:4%20minute%20read/fl_layer_apply,g_south_west,x_554,y_93/c_fill,g_north,h_630,w_1200/og-social-bg.png",
        text: "Code splitting has gained popularity recently for its ability to allow you to split your app into separate bundles your users can progressively load. In this post we’ll take a look at not only what code splitting is and how to do it, but also how to implement it with React Router.",
      },
      {
        id: 1,
        img: "https://res.cloudinary.com/uidotdev/image/upload/c_fit,co_white,fl_text_no_trim,l_text:fonts:proxima-nova-extrabold.ttf_80_center_line_spacing_-18:JavaScript%20Inheritance%20vs%20Composition,w_1100/fl_layer_apply,y_-30/bo_2px_solid_white,fl_text_no_trim,h_126,l_twitter_name:tylermcginnis,r_max,w_126/fl_layer_apply,g_south_west,x_385,y_72/co_white,fl_text_no_trim,l_text:fonts:proxima-nova-semibold.ttf_38:by/fl_layer_apply,g_south_west,x_552,y_136/co_white,fl_text_no_trim,l_text:fonts:proxima-nova-extrabold.ttf_40:Tyler%20McGinnis/fl_layer_apply,g_south_west,x_610,y_135/co_white,fl_text_no_trim,l_text:fonts:proxima-nova-semibold.ttf_31:3%20minute%20read/fl_layer_apply,g_south_west,x_554,y_93/c_fill,g_north,h_630,w_1200/og-social-bg.png",
        text: "The problem with object-oriented languages is they’ve got all this implicit environment that they carry around with them. You wanted a banana but what you got was a gorilla holding the banana and the entire jungle. - Joe Armstrong.",
      },
      {
        id: 2,
        img: "https://res.cloudinary.com/uidotdev/image/upload/c_fit,co_white,fl_text_no_trim,l_text:fonts:proxima-nova-extrabold.ttf_80_center_line_spacing_-18:JavaScript%20Modules:%20From%20IIFEs%20to%20CommonJS%20to%20ES6%20Modules,w_1100/fl_layer_apply,y_-30/bo_2px_solid_white,fl_text_no_trim,h_126,l_twitter_name:tylermcginnis,r_max,w_126/fl_layer_apply,g_south_west,x_385,y_72/co_white,fl_text_no_trim,l_text:fonts:proxima-nova-semibold.ttf_38:by/fl_layer_apply,g_south_west,x_552,y_136/co_white,fl_text_no_trim,l_text:fonts:proxima-nova-extrabold.ttf_40:Tyler%20McGinnis/fl_layer_apply,g_south_west,x_610,y_135/co_white,fl_text_no_trim,l_text:fonts:proxima-nova-semibold.ttf_31:13%20minute%20read/fl_layer_apply,g_south_west,x_554,y_93/c_fill,g_north,h_630,w_1200/og-social-bg.png",
        text: "I’ve taught JavaScript for a long time to a lot of people. Consistently the most commonly under-learned aspect of the language is the module system. There’s good reason for that. Modules in JavaScript have a strange and erratic history. In this post we’ll walk through that history and you’ll learn modules of the past to better understand how JavaScript modules work today.",
      },
    ]}
  />,
  rootElement
);
