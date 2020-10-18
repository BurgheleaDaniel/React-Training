import React from "react";
import PropTypes from "prop-types";

const User = ({ developerName, color, image }) => {
  return (
    <>
      <p style={{ backgroundColor: color }}>Hello {developerName}</p>
      <img alt="User" src={image} width="50" height="50" />
    </>
  );
};

User.propTypes = {
  developerName: PropTypes.string,
  color: PropTypes.string,
  image: PropTypes.string,
};

User.defaultProps = {
  developerName: "Developer",
  color: "red",
};

export default User;
