import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import logo from "../../img/logo.png";

import "./Menu.css";
import Button from "../Button/Button";

const Menu = ({ currentLocation }) => {
  return (
    <nav className="menu">
      <Link to="/">
        <img src={logo} className="logo" alt="Techflix Logo"></img>
      </Link>

      {currentLocation === "video" ? (
        <Button as={Link} to={"/register/category"} className={"button-link"}>
          New Category
        </Button>
      ) : currentLocation === "category" ? (
        <Button as={Link} to={"/register/video"} className={"button-link"}>
          New Video
        </Button>
      ) : (
        <div>
          <Button as={Link} to={"/register/category"} className={"button-link"}>
            New Category
          </Button>
          <Button as={Link} to={"/register/video"} className={"button-link"}>
            New Video
          </Button>
        </div>
      )}
    </nav>
  );
};

export default Menu;
