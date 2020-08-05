import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Home from "./pages/home/Home";

import RegisterVideo from "./pages/register/video/RegisterVideo";
import RegisterCategory from "./pages/register/category/RegisterCategory";
import NotFound from "./pages/error/NotFound";

import { BrowserRouter, Switch, Route } from "react-router-dom";

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/register/video" component={RegisterVideo} />
      <Route exact path="/register/category" component={RegisterCategory} />
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
