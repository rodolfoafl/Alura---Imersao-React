import React, { Fragment } from "react";

import Menu from "../Menu/Menu";
import Footer from "../Footer/Footer";

import { Main } from "./styles";

const PageTemplate = ({ currentLocation, children }) => {
  return (
    <Fragment>
      <Menu currentLocation={currentLocation} />
      <Main>{children}</Main>
      <Footer />
    </Fragment>
  );
};

export default PageTemplate;
