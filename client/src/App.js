import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";

// pages
import { Landing, HomeFeed, SignUp, Login } from "./pages";

// components
import Nav from "./components/Nav";

function App() {
  return (
    <Router>
      <header>
        <Nav />
      </header>
      <main className="App">
        <Switch>
          <Route path="/feed">
            <HomeFeed />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/signup">
            <SignUp />
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
