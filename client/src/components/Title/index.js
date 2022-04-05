import React from "react";
import { NavLink as Link } from "react-router-dom";
import logo from "../../static/imgs/dumbbell.png";
import PropTypes from "prop-types";

const Title = ({ text }) => {
  return (
    <div className="flex justify-between items-center pt-6 pb-10">
      <Link to="/">
        <img className="object-cover w-20 h-12 rounded-full" src={logo} />
      </Link>
      <h1 className=" text-slate-50 text-3xl font-bold">{text}</h1>
    </div>
  );
};

Title.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Title;
