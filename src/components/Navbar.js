import { Link } from "react-router-dom";
import logo from "../assets/escudoRacing.jpg";
import { useContext } from "react"; // <== IMPORT
import { AuthContext } from "./../context/auth.context"; // <== IMPORT

function Navbar() {
  // Subscribe to the AuthContext to gain access to
  // the values from AuthContext.Provider `value` prop
  const { isLoggedIn, user, logOutUser } = useContext(AuthContext);

  return (
    <nav>
      <Link to="/">
        <img src={logo} />
        <button>Home</button>
      </Link>
      <Link to="/club">
        <button>Club</button>
      </Link>
      -
      {isLoggedIn ? (
        <>
          <Link to="/jugadas">
            <button>Jugadas</button>
          </Link>
          <Link to="/pretemporada">
            <button>Pretemporada</button>
          </Link>
          <button onClick={logOutUser}>Logout</button>
          <span>{user.name}</span>
        </>
      ) : (
        <>
          <Link to="/signup">
            {" "}
            <button>Signup</button>{" "}
          </Link>
          <Link to="/login">
            {" "}
            <button>Login</button>{" "}
          </Link>
        </>
      )}
    </nav>
  );
}

export default Navbar;
