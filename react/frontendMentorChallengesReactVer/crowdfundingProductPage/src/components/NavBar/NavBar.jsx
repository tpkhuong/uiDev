import React from "react";

// function NavBar(props) {
//   return (
//     <nav role="navigation">
//       <ul role="menu">
//         <li role="none">
//           <a href="" role="menuitem">
//             Hello
//           </a>
//         </li>
//         <li role="none">
//           <a href="" role="menuitem">
//             React
//           </a>
//         </li>
//         <li role="none">
//           <a href="" role="menuitem">
//             from NavBar component
//           </a>
//         </li>
//       </ul>
//     </nav>
//   );
// }

export class NavBar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <nav role="navigation">
        <ul role="menu">
          <li role="none">
            <a href="" role="menuitem">
              Hello
            </a>
          </li>
          <li role="none">
            <a href="" role="menuitem">
              React
            </a>
          </li>
          <li role="none">
            <a href="" role="menuitem">
              from NavBar component
            </a>
          </li>
        </ul>
      </nav>
    );
  }
}

// export default NavBar;
