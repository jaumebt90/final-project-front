import { Link } from "react-router-dom";
import logo from "../assets/escudoRacing.jpg";
import { useContext } from "react"; // <== IMPORT
import { AuthContext } from "./../context/auth.context"; // <== IMPORT
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";

function Barra() {
  // Subscribe to the AuthContext to gain access to
  // the values from AuthContext.Provider `value` prop
  const { isLoggedIn, user, logOutUser } = useContext(AuthContext);

  return (
    <>
      <Navbar expand="lg" className="navbar">
        <Container>
          <Navbar.Brand href="#home">Home</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/club">Club</Nav.Link>
              <NavDropdown title="Perfil" id="basic-nav-dropdown">
                {isLoggedIn ? (
                  <>
                    <Nav.Link href="/profile">Profile</Nav.Link>
                    <Nav.Link href="/logout">Logout</Nav.Link>
                  </>
                ) : (
                  <>
                    <Nav.Link href="/signup">Signup</Nav.Link>
                    <Nav.Link href="/login">Login</Nav.Link>
                  </>
                )}
                {/* <NavDropdown.Divider />
                <Nav.Button onClick={logOutUser}>Logout</Nav.Button>*/}
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}
export default Barra;
