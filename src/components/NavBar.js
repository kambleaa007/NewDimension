import { Container, Navbar, Nav, Col, Row } from 'react-bootstrap';

import './../App.css';


function NavBar() {

    return(
      <div className="nav-bar">
          <Navbar className="nav" variant="light">
            <Container>
            <Navbar.Brand href="#/">
              Home
            </Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="#one">3D Model</Nav.Link>
              <Nav.Link href="#aboutus">Universe</Nav.Link>
              <Nav.Link href="#contactus">Play PingPong</Nav.Link>
            </Nav>
            </Container>
          </Navbar>
      </div>
    )
  }

  export default NavBar; 
