
import { Container, Navbar, Nav, Offcanvas } from 'react-bootstrap';
import '@fortawesome/fontawesome-free/css/all.min.css';
import logo from '../assets/logo.png';

const NavbarComponent = () => {
  return (
    <>
      {/* Supports offcanvas for mobile */}
      <Navbar key="lg" expand="lg" className="navbar pe-3 ps-3 pt-0 pb-0 m-0">
        <Container fluid>
          {/* Logo */}
          <Navbar.Brand href="/">
            <img
              src={logo}
              width="80"
              height="80"
              className="d-inline-block align-top"
              alt="Logo"
            />
          </Navbar.Brand>

          {/* Toggle for Offcanvas */}
          <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-lg`} />

          {/* Offcanvas */}
          <Navbar.Offcanvas
            id={`offcanvasNavbar-expand-lg`}
            aria-labelledby={`offcanvasNavbarLabel-expand-lg`}
            placement="end" // slide from right
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id={`offcanvasNavbarLabel-expand-lg`}>
                
              </Offcanvas.Title>
            </Offcanvas.Header>

            <Offcanvas.Body>
              <Nav className="justify-content-center gap-4 ms-auto">
                <Nav.Link href="#home" className="navlink">HOME</Nav.Link>
                <Nav.Link href="#about" className="navlink">ABOUT US</Nav.Link>
                <Nav.Link href="#service" className="navlink">SERVICE</Nav.Link>
                <Nav.Link href="#contact" className="navlink">CONTACT US</Nav.Link>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </>
  );
};

export default NavbarComponent;
