import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "../App.css";

const Nav = () => {
  const auth = localStorage.getItem("user");
  const navigate = useNavigate();

  const logout = () => {
    localStorage.clear();
    navigate("/signup");
  };

  return (
    <div>
      <ul className="nav-ul">
        {auth && (
          <img
            src="https://image.shutterstock.com/image-photo/software-source-code-programming-on-260nw-634574354.jpg"
            alt="logo"
            className="logo"
          />
        )}
        {auth ? (
          <>
            <li>
              <Link to="/">Products</Link>
            </li>
            <li>
              <Link to="/add">Add Products</Link>
            </li>
            <li>
              <Link to="/update">Update Products</Link>
            </li>
            <li>
              <Link to="/profile">Profile</Link>
            </li>
            <li>
              <Link to="/signup" onClick={logout}>
                Logout ({JSON.parse(auth).name})
              </Link>
            </li>
          </>
        ) : (
          <ul className="right-nav">
            <li>
              <Link to="/signup">Sign Up</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
          </ul>
        )}
      </ul>
    </div>
  );
};

export default Nav;
