import React from "react";

import { NotFoundContainer } from "./styles";

import PageTemplate from "../../components/PageTemplate/PageTemplate";

const NotFound = () => {
  return (
    <PageTemplate>
      <NotFoundContainer>
        <h1>Error 404 - Page Not Found</h1>
      </NotFoundContainer>
    </PageTemplate>
  );
};

export default NotFound;
