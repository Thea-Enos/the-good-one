import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Container } from "@material-ui/core";

import "../../styles.css";
import Home from "../Home";
import About from "../About";

const App = () => (
  <Router>
    <Container maxWidth="sm">
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
    </Container>
  </Router>
);

export default App;
