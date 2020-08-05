import React from "react";

import PageTemplate from "../../../components/PageTemplate/PageTemplate";
import { Link } from "react-router-dom";

const RegisterVideo = () => {
  return (
    <PageTemplate>
      <h1>Register Video</h1>

      <Link to="/register/category">Register Category</Link>
    </PageTemplate>
  );
};

export default RegisterVideo;
