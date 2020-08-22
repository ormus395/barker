import React from "react";

const AuthContext = React.createContext();

/*
   creates the auth provider
   isLoggedIn will be the state
   use effect, make api call to session resource to determine if
   session id cookie is still good, if that cookie exists.

   hit session endpoint 
*/

const SESSION_ENDPOINT = "/api/session";

function AuthProvider(props) {
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(false);
  const [isError, setIsError] = React.useState(false);

  // check the server for a session
  React.useEffect(() => {
    setIsLoading(true);
    fetch(SESSION_ENDPOINT)
      .then((response) => response.json())
      .then((jsonResponse) => {
        // if session, it will comeback in the payload. Not the session, just that there is one
        if (jsonResponse.isLoggedIn) {
          setIsLoggedIn(true);
        } else {
          setIsLoggedIn(false);
        }
        setIsLoading(false);
      })
      .catch((err) => setIsError(true));
  }, []);

  if (isLoading) {
    return <h3>Loading...</h3>;
  }

  if (isError) {
    return <h3>Whoops, something broke. Please refresh the page</h3>;
  }
  return (
    <AuthContext.Provider
      value={{ isLoggedIn: isLoggedIn, setIsLoggedIn: setIsLoggedIn }}
      {...props}
    />
  );
}

const useAuth = () => React.useContext(AuthContext);

export { AuthProvider, useAuth };
