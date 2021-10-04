import { Link, useHistory } from "react-router-dom";
import logo from "../assets/escudoRacing.jpeg";
import { useContext } from "react"; // <== IMPORT
import { AuthContext } from "./../context/auth.context"; // <== IMPORT
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";

function Barra() {
  // Subscribe to the AuthContext to gain access to
  // the values from AuthContext.Provider `value` prop
  const { isLoggedIn, user, logOutUser } = useContext(AuthContext);
  const history = useHistory();

  return (
    <header className="header">
      <Navbar expand="lg" className="navbar">
        <Container>
          <Link to="/">
            <img className="logo" src={logo} />
          </Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse>
            <Nav className="left">
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
            </Nav>
            <Nav className='right'>
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
                {/* <NavDropdown.Divider />
                <Nav.Button onClick={logOutUser}>Logout</Nav.Button>*/}
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}
export default Barra;
