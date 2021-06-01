import React from "react";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Link from "@material-ui/core/Link";
import ProTip from "./ProTip";
import SignInSide from "./SignInSide";
import SignUp from "./SignUp";

import Navigation from "./Navigation";

import { BrowserRouter, Route, Switch } from "react-router-dom";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <div>
        <Navigation />
        <Switch>
          <Route path="/" component={SignInSide} exact />
          <Route path="/registrar" component={SignUp} />
          <Route component={Error} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}
