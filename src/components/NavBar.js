import React from "react";
import { NavLink } from "react-router-dom";

const linkStyles = {
  fontSize: "20px",
  display: 'inline-block',
  width: '70px',
  padding: '8px',
  margin: '0 6px 6px',
  background: 'green',
  textDecoration: 'none',
  color: 'white'
};

function NavBar() {
  return (
    <div className="navbar"> 
      <NavLink to="/" style={linkStyles}>
        Home
      </NavLink>
      <NavLink to="/movies" style={linkStyles}>
        Movies
      </NavLink>
      <NavLink to="/directors" style={linkStyles}>
        Directors
      </NavLink>
      <NavLink to="/actors" style={linkStyles}>
        Actors
      </NavLink>
    </div>
  )
}

export default NavBar;
