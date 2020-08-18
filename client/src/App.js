import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.css";

// nav component
import Header from "./components/Header";
import Nav from "./components/Nav";

// import pages
import { BlogHome, Hire, Landing, Portfolio, Blog } from "./pages";

function App() {
  return (
    <Router>
      <Header>
        <Nav />
      </Header>
      <main className="main">
        <Switch>
          <Route path="/blog/:blogSlug">
            <Blog />
          </Route>
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
      </main>
    </Router>
  );
}

export default App;
