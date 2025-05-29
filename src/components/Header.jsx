import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from "../assets/logo.png"
import "../styles/header.css"
import {Link} from "react-router-dom"
import Button from 'react-bootstrap/Button';

function Header() {
  return (
    <Navbar expand="lg" className="bg-body-secondary shadow-md">
      <Container>
        <Navbar.Brand href="#"><Link to = "/"><img src = {logo} style = {{height:"70px"}} alt = "logo"/></Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="ms-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#"  className = "nav-links-custom mx-md-2" ><Link to = "/">Home</Link></Nav.Link>
            <Nav.Link href="#" className = "nav-links-custom mx-md-2"><Link to = "/women">Women</Link></Nav.Link>
            <Nav.Link href="#"  className = "nav-links-custom mx-md-2" ><Link to = "/men">Men</Link></Nav.Link>
         
            <Nav.Link href="#"  className = "nav-links-custom mx-md-2"><Link to = "/kids">Kids</Link></Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search for products..."
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;