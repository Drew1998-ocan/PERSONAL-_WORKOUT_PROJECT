import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="shadow shadow-sm">
      <span className="container py-4 d-flex align-middle align-items-center">
        <span>
          <Link className="logo " to="/">
            WORKOUT
          </Link>
        </span>
        <span className="">
          <Link className="links align-middle" to="/">
            Welcome
          </Link>
          <Link className="links align-middle" to="/About">
            About Me
          </Link>
        </span>
      </span>
    </header>
  );
};

export default Navbar;
