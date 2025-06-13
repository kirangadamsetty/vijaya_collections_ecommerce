import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import logo from "../assets/logo.png";
import CartIcon from "../assets/cart-icon.png"
import "../styles/header.css";
import { Link, useNavigate } from "react-router-dom";
import { useContext } from 'react';
import { CategoryFilterContext } from '../utils/CategoryFilterContext';
import wishListIcon from "../assets/wishlist.png"
import user from "../assets/user.png"
import {WishListContext} from "../utils/WishListContext"
import {CartContext} from "../utils/CartContext"
function Header() {
  const navigate = useNavigate()
  const {cartData} = useContext(CartContext)
  const {handlepageshift} = useContext(CategoryFilterContext)
  const {wishList} = useContext(WishListContext)
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
            <Nav.Link as={Link} onClick = {handlepageshift} to="/women" className="nav-links-custom mx-md-2">Women</Nav.Link>
            <Nav.Link as={Link} onClick = {handlepageshift} to="/men" className="nav-links-custom mx-md-2">Men</Nav.Link>
            <Nav.Link as={Link} onClick = {handlepageshift} to="/kids" className="nav-links-custom mx-md-2">Kids</Nav.Link>
          </Nav>
          <Form className="d-flex mx-3">
            <Form.Control
              type="search"
              placeholder="Search for products..."
              className="me-2"
              aria-label="Search"
              style={{ outline: 'none', boxShadow: 'none' }}
            />
            <Button variant="outline-success" className = "custom-button">Search</Button>
          </Form>
                      
                         <div className = "d-flex mt-3 flex-column align-items-center mx-md-3">
  <Nav.Link  className="nav-links-custom"><img src = {user} width="25px" alt = "user"/></Nav.Link>
  <p>User</p>
                         </div>
                         <div  onClick = {()=>navigate("/wishlist")} style = {{cursor:"pointer"}} className = "d-flex mt-3 flex-column align-items-center mx-md-3">
                          <div className = "d-flex" style = {{position:"relative"}}> 
<Nav.Link  className="nav-links-custom"><img src = {wishListIcon} width="25px" alt = "wishlist"/></Nav.Link>
{wishList.length>0 && <p className = "counts" style = {{position:"absolute", marginLeft:"15px"}}>{wishList.length}</p>}
                          </div>
<p>WishList</p>
                          </div>
            
            <div  onClick = {()=>navigate("/cart")} style = {{cursor:"pointer"}} className = "d-flex mt-3 flex-column align-items-center mx-md-3">
                          <div className = "d-flex" style = {{position:"relative"}}> 
<Nav.Link  className="nav-links-custom"><img src = {CartIcon} width="25px" alt = "carticon"/></Nav.Link>
{cartData.length>0 && <p className = "counts" style = {{position:"absolute", marginLeft:"15px"}}>{cartData.length}</p>}
                          </div>
<p>Bag</p>
                          </div>
            

        
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
