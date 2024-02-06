import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <Link to={"/"}>HOME</Link>
      <Link to={"/add"}>ADD</Link>
      <Link to={"/edit"}>EDIT</Link>
    </div>
  );
};

export default Navbar;
