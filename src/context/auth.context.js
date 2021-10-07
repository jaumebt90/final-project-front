import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom"
import axios from "axios";
const API_URL = process.env.REACT_APP_API_URL;

const AuthContext = React.createContext();

function AuthProviderWrapper(props) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState(null);
  const [userData, setUserData] = useState();
  const [isCoach, setIsCoach] = useState(false);
  const history = useHistory()

  const verifyCoach = () => {
    if (userData.rol === "coach") {
      setIsCoach(true);
    }
  };

  const verifyStoredToken = () => {
    // console.log("ENTRA AL VERIFY");
    // Get the stored token from the localStorage
    const storedToken = localStorage.getItem("authToken");

    // If the token exists in the localStorage
    if (storedToken) {
      // We must send the JWT token in the request's "Authorization" Headers
      axios
        .get(`${API_URL}/auth/verify`, {
          headers: { Authorization: `Bearer ${storedToken}` },
        })
        .then((response) => {
          // If the server verifies that JWT token is valid  ✅
          const data = response.data;
          setUser(data.user);
          setUserData(data.user);
          setIsLoggedIn(true);
          setIsLoading(false);
        })
        .catch((error) => {
          // If the server sends an error response (invalid token) ❌
          setUser(null);
          setIsLoggedIn(false);
          setIsLoading(false);
        });
    } else {
      // If the token is not available
      setIsLoading(false);
      setIsLoggedIn(false);
    }
  };

  const logInUser = (token) => {
    localStorage.setItem("authToken", token);
    verifyStoredToken();

    /* 
      After saving the token in the localStorage we call the
      function `verifyStoredToken` which sends a new request to the
      server to verify the token. Upon receiving the response the function 
      `verifyStoredToken` updates the state variables `isLoggedIn`, `user` and `isLoading`
    */
  };

  const logOutUser = () => {

    // Upon logout, remove the token from the localStorage
    localStorage.removeItem("authToken");
    setIsLoggedIn(false);

    // Update the state variables
    setUser(null);
    history.push("/login");
    window.location.reload()
  };

  useEffect(() => {
    verifyStoredToken();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn,
        isLoading,
        user,
        logInUser,
        logOutUser,
        userData,
        setUserData,
        verifyCoach,
        isCoach,
      }}
    >
      {props.children}
      {console.log(userData)}
    </AuthContext.Provider>
  );
}

export { AuthProviderWrapper, AuthContext };
