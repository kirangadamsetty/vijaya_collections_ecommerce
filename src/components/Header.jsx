import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import logo from "../assets/logo.png";
import "../styles/header.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <Navbar expand="lg" className="bg-body-secondary shadow-md fixed-top" style = {{height:"100px"}}>
      <Container>
        <Navbar.Brand as={Link} to="/">
          <img src={logo} style={{ height: "90px" }} alt="logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="ms-auto my-2 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll>
            <Nav.Link as={Link} to="/" className="nav-links-custom mx-md-2">Home</Nav.Link>
            <Nav.Link as={Link} to="/women" className="nav-links-custom mx-md-2">Women</Nav.Link>
            <Nav.Link as={Link} to="/men" className="nav-links-custom mx-md-2">Men</Nav.Link>
            <Nav.Link as={Link} to="/kids" className="nav-links-custom mx-md-2">Kids</Nav.Link>
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
