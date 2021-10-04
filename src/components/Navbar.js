import { Link, useHistory } from "react-router-dom";
import logo from "../assets/escudoRacing.jpeg";
import { useContext } from "react"; // <== IMPORT
import { AuthContext } from "./../context/auth.context"; // <== IMPORT
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import("./Navbar.css");

function Barra() {
  // Subscribe to the AuthContext to gain access to
  // the values from AuthContext.Provider `value` prop
  const { isLoggedIn, user, logOutUser } = useContext(AuthContext);
  const history = useHistory();

  return (
    <header className="header">
      <Navbar expand="lg" className="navbar" id="nav">
        <Container>
          <Link to="/">
            <img className="logo" src={logo} />
          </Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse className="row justify-content-between">
            <Nav className="col-3">
              <div className="left">
                <Nav.Link
                  onClick={() => {
                    history.push("/");
                  }}
                >
                  Home
                </Nav.Link>
                <Nav.Link
                  onClick={() => {
                    history.push("/club");
                  }}
                >
                  Club
                </Nav.Link>
              </div>
            </Nav>
            <Nav className="col-3">
              <div className="right">
                <NavDropdown
                  title="Perfil"
                  id="basic-nav-dropdown"
                  className="desplegable"
                >
                  {isLoggedIn ? (
                    <>
                      <Nav.Link
                        onClick={() => {
                          history.push("/profile");
                        }}
                      >
                        Profile
                      </Nav.Link>
                      <Nav.Link
                        onClick={() => {
                          history.push("/plays");
                        }}
                      >
                        Jugadas
                      </Nav.Link>
                      <Nav.Link
                        onClick={() => {
                          history.push("/pretemporada");
                        }}
                      >
                        Pretemporada
                      </Nav.Link>
                      <NavDropdown.Divider />
                      <Nav.Link onClick={logOutUser}>Logout</Nav.Link>
                    </>
                  ) : (
                    <>
                      <Nav.Link
                        onClick={() => {
                          history.push("/signup");
                        }}
                      >
                        Signup
                      </Nav.Link>
                      <Nav.Link
                        onClick={() => {
                          history.push("/login");
                        }}
                      >
                        Login
                      </Nav.Link>
                    </>
                  )}
                </NavDropdown>
              </div>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}
export default Barra;
