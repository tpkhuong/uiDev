import React from "react";

function MainSection(props) {
  console.log("main section", props);
  return (
    <main role="main" aria-pressed={props["aria-pressed"]}>
      {props.children}
    </main>
  );
}

export default MainSection;
