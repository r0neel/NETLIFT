import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const SettingsBtn = ({ text, to }) => {
  return (
    <Link
      to={`/settings/${to}`}
      className=" bg-nl-lightblue text-nl-darkblue text-2xl font-medium py-4 px-16 rounded-xl mx-auto hover:opacity-80"
    >
      {text}
    </Link>
  );
};

SettingsBtn.propTypes = {
  text: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
};

export default SettingsBtn;
