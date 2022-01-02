import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { mdiLogin, mdiLoginVariant } from "@mdi/js";
import Icon from "@mdi/react";

// import "../App.css"

const Logout = () => {
  let location = useLocation();
  useEffect(() => {
    console.log(location.pathname);
  }, [location]);
  // const host = "https://inote-backend.herokuapp.com"
  const token = localStorage.getItem("token");
  //  fetch the name
  const Name = async () => {
    const response = await fetch(
      "https://twi-adp.herokuapp.com/api/auth/getuser",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "auth-token": token,
        },
      }
    );
    // eslint-disable-next-line
    const json = await response.json();

    localStorage.setItem("name", json.name);

    // setNotes(json)
  };

  if (token != null) {
    Name();
    const ok = localStorage.getItem("name");
    console.log(ok);
    return (
      <div>
        <form className="d-flex">
          <h2 className="ok mx-4" style={{ color: "rgb(255, 255, 255)" }}>
            {ok}{" "}
          </h2>
          <h3> </h3>
          <Link className=" btn btn-primary mx-1" to="/check" role="button">
            Logout
          </Link>
        </form>
      </div>
    );
  } else {
    return (
      <div>
        {/* <form className="d-flex">
        <li className="nav-item">
              <Link
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
                to="/signup"
              >
               <Icon
                  path={mdiLoginVariant}
                  title="User Profile"
                  size={1}
                  horizontal
                  vertical
                  color="white"
                /> <b> SignIn</b>
              </Link>
            </li>
        </form> */}
        <Link className=" btn btn-primary mx-1" to="/login" role="button">
          <Icon
            path={mdiLogin}
            title="User Profile"
            size={1}
            horizontal
            vertical
            color="white"
          />{" "}
          <b>
            <i>Login</i>
          </b>
        </Link>
        <Link className=" btn btn-primary mx-1" to="signup" role="button">
          <Icon
            path={mdiLoginVariant}
            title="User Profile"
            size={1}
            horizontal
            vertical
            color="white"
          />{" "}
          <b>
            <i>SignIn</i>
          </b>
        </Link>
      </div>
    );
  }
};

export default Logout;
