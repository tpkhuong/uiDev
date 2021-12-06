import React from "react";
import "../../../public/styles.css";
const dataobj = document.querySelector("#data-obj");
dataobj.dataElement = {
  name: "Hello",
};

function DataElement(props) {
  console.log(dataobj.dataElement, "data element");
  return <span id="data-element" hidden></span>;
}

// class DataElement extends React.Component {
//   constructor(props) {
//     super(props);
//   }

//   render() {
//     return <span hidden></span>;
//   }
// }

export default DataElement;
