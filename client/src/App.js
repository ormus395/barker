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
      <div>
        <Header>
          <Nav />
        </Header>

        <main className="main container">
          <Switch>
            <Route path="/about">
              <About />
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
      </div>
    </Router>
  );
}

export default App;
