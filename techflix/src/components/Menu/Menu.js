import React from "react";
import { Link } from "react-router-dom";
import logo from "../../img/logo.png";

import "./Menu.css";
import Button from "../Button/Button";

const Menu = () => {
  return (
    <nav className="menu">
      <Link to="/">
        <img src={logo} className="logo" alt="Techflix Logo"></img>
      </Link>

      <Button as={Link} to={"/register/video"} className={"button-link"}>
        New Video
      </Button>
    </nav>
  );
};

export default Menu;
