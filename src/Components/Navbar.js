import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { mdiInformation, mdiHome, mdiCommentPlus } from "@mdi/js";
import Icon from "@mdi/react";
import Logout from "./Login/Logout";

const Navbar = () => {
  let location = useLocation();
  useEffect(() => {
    console.log(location.pathname);
  }, [location]);
  return (
    <nav className="navbar navbar-dark bg-dark">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          <i className="fab fa-twitter"></i>
        </Link>
        <Logout />
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link
                className={`nav-link ${
                  location.pathname === "/" ? "active" : ""
                }`}
                h5
                aria-current="page"
                to="/"
              >
                <Icon
                  path={mdiHome}
                  title="User Profile"
                  size={1}
                  color="white"
                />{" "}
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link ${
                  location.pathname === "/about" ? "active" : ""
                }`}
                to="/about"
              >
                <Icon
                  path={mdiInformation}
                  title="User Profile"
                  size={1}
                  horizontal
                  vertical
                  color="white"
                />{" "}
                About
              </Link>
            </li>
            {/* <li className="nav-item">
              <Link
                className={`nav-link ${
                  location.pathname === "/login" ? "active" : ""
                }`}
                to="/login"
              >
                <Icon
                  path={mdiLogin}
                  title="User Profile"
                  size={1}
                  horizontal
                  vertical
                  color="white"
                />   Login
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link ${
                  location.pathname === "/signup" ? "active" : ""
                }`}
                to="/signup"
              >
               <Icon
                  path={mdiLoginVariant}
                  title="User Profile"
                  size={1}
                  horizontal
                  vertical
                  color="white"
                />   SignIn
              </Link>
            </li> */}
            <li className="nav-item">
              <Link
                className={`nav-link ${
                  location.pathname === "/add" ? "active" : ""
                }`}
                to="/add"
              >
                <Icon
                  path={mdiCommentPlus}
                  title="User Profile"
                  size={1}
                  color="white"
                />{" "}
                Post
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
