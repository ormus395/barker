import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";

import { useAuth } from "../context/AuthContext";

// pages
import { Landing, HomeFeed, SignUp, Login } from "../pages";

// components
import { AuthenticatedNav, UnAuthenticatedNav } from "../components/Nav";
import UserProfile from "../pages/UserProfile";

function App() {
  const handleLogin = () => {
    // do some stuff then set the app level auth state
  };

  const { isLoggedIn, setIsLoggedIn } = useAuth();
  return (
    <div>
      {isLoggedIn ? (
        <Router>
          <header>
            <AuthenticatedNav />
          </header>
          <main className="App">
            <Switch>
              <Route path="/user-profile">
                <UserProfile />
              </Route>
              <Route path="/feed">
                <HomeFeed />
              </Route>
              <Route path="/">
                <Landing />
              </Route>
            </Switch>
          </main>
        </Router>
      ) : (
        <Router>
          <header>
            <UnAuthenticatedNav />
          </header>
          <main className="App">
            <Switch>
              <Route path="/login">
                <Login setIsLoggedIn={setIsLoggedIn} />
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
      )}
    </div>
  );
}

export default App;
