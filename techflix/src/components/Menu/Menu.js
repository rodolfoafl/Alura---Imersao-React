import React from "react";
import logo from "../../img/logo.png";

import "./Menu.css";
import Button from "../Button/Button";
// import ButtonLink from "./components/ButtonLink";

const Menu = () => {
  return (
    <nav className="menu">
      <a href="/">
        <img src={logo} className="logo" alt="Techflix Logo"></img>
      </a>

      <Button as="a" href={"/"} className={"button-link"}>
        Novo Vídeo
      </Button>
    </nav>
  );
};

export default Menu;
