
import { Container, Navbar, Nav, Offcanvas } from 'react-bootstrap';
import '@fortawesome/fontawesome-free/css/all.min.css';
import logo from '../assets/logo.png';
import { useState } from 'react';

const NavbarComponent = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // Scroll manually after closing offcanvas
  const handleNavClick = (e, sectionId) => {
    e.preventDefault();
    setShow(false); // Close offcanvas

    // Delay scroll until offcanvas animation is complete
    setTimeout(() => {
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    }, 300); // Delay (matches Bootstrap offcanvas transition)
  };

  return (
    <Navbar expand="lg" className="navbar pe-3 ps-3 pt-0 pb-0 m-0">
      <Container fluid>
        <Navbar.Brand href="/">
          <img
            src={logo}
            width="80"
            height="80"
            className="d-inline-block align-top"
            alt="Logo"
          />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="offcanvasNavbar" onClick={handleShow} />

        <Navbar.Offcanvas
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
          placement="end"
          show={show}
          onHide={handleClose}
        >
          <Offcanvas.Header closeButton />
          <Offcanvas.Body>
            <Nav className="justify-content-center gap-4 ms-auto">
              <Nav.Link as="button" className="navlink btn btn-link p-0 text-start" onClick={(e) => handleNavClick(e, 'home')}>
                HOME
              </Nav.Link>
              <Nav.Link as="button" className="navlink btn btn-link p-0 text-start" onClick={(e) => handleNavClick(e, 'about')}>
                ABOUT US
              </Nav.Link>
              <Nav.Link as="button" className="navlink btn btn-link p-0 text-start" onClick={(e) => handleNavClick(e, 'service')}>
                SERVICE
              </Nav.Link>
              <Nav.Link as="button" className="navlink btn btn-link p-0 text-start" onClick={(e) => handleNavClick(e, 'contact')}>
                CONTACT US
              </Nav.Link>
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
}

export default NavbarComponent;
