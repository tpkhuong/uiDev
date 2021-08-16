import React from "react";
import PropTypes from "prop-types";
import { ThemeConsumer } from "../../../context/theme";
// what are our props that our Card component take in?
function Card({ header, subheader, avatar, href, name, children }) {
  return (
    <ThemeConsumer>
      {({ theme, toggleTheme }) => (
        <div className={`card bg-${theme}`}>
          <h2 className="header-lg center-text">{header}</h2>
          <img src={avatar} alt={`Avatar for ${name}`} className="avatar" />
          {subheader && <h3 className="center-text">{subheader}</h3>}
          <h3 className="center-text">
            <a href={href} className="link">
              {name}
            </a>
          </h3>
          {children}
        </div>
      )}
    </ThemeConsumer>
  );
}

Card.propTypes = {
  header: PropTypes.string.isRequired,
  subheader: PropTypes.string,
  avatar: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default Card;
