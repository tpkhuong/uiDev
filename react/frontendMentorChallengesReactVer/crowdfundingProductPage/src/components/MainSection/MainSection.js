import React from "react";

function MainSection(props) {
  React.useEffect(() => {
    // worked woot!!!
    console.log(document.querySelector("[role='navigation']"));

    document
      .querySelector("[role='navigation']")
      .addEventListener("mouseover", (event) => {
        console.log(event);
      });
  });

  return (
    <main role="main" aria-pressed={props["aria-pressed"]}>
      {props.children}
    </main>
  );
}

export default MainSection;
