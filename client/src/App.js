import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.css";

// nav component
import Header from "./components/Header";
import Nav from "./components/Nav";

// import pages
import { About, BlogHome, Hire, Landing, Portfolio } from "./pages";

function App() {
  return (
    <Router>
      <Header>
        <Nav />
      </Header>
      <Switch>
        <Route path="/blog">
          <BlogHome />
        </Route>
        <Route path="/hire">
          <Hire />
        </Route>
        <Route path="/portfolio">
          <Portfolio />
        </Route>
        <Route path="/">
          <Landing />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
