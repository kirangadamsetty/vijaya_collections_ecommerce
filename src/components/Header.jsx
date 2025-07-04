import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import logo from "../assets/logo.png";
import CartIcon from "../assets/cart-icon.png"
import "../styles/header.css";
import { Link, useNavigate } from "react-router-dom";
import { useContext, useRef, useState } from 'react'; // Import useRef for Navbar collapse ref
import { CategoryFilterContext } from '../utils/CategoryFilterContext';
import wishListIcon from "../assets/wishlist.png"
import { SearchContext } from '../utils/SearchContext';
import {WishListContext} from "../utils/WishListContext"
import {CartContext} from "../utils/CartContext"

function Header() {
  const navigate = useNavigate();
  const { cartData } = useContext(CartContext);
  const { handlepageshift } = useContext(CategoryFilterContext);
  const { wishList } = useContext(WishListContext);
  const [showSearchResults, setShowSearchResult] = useState(false)
  const { handleSearchSuggestions, searchQuery,setSearchValue,showQueryResultProducts, searchValue} = useContext(SearchContext)
  const navbarRef = useRef(); // Ref for the Navbar.Collapse component

  // Function to close the navbar dropdown
  const closeNavbar = () => {
    if (navbarRef.current && navbarRef.current.classList.contains('show')) {
      navbarRef.current.classList.remove('show');
    }
  };

  return (
    <Navbar expand="lg" className="bg-body-secondary header shadow-md fixed-top">
      <Container  className="px-1 px-md-5">

        <Navbar.Brand as={Link} to="/">
          <img src={logo} className="logo" style={{ height: "70px" }} alt="logo" />
        </Navbar.Brand>

        {/* Icons for small screens (visible next to toggle, hidden on large) */}
        <div  className="d-flex align-items-center d-lg-none ms-auto me-2"> {/* ms-auto to push to right, me-2 for spacing from toggle */}
          
          
            {/* Wishlist Icon for small screens */}
            <div onClick={() => navigate("/wishlist")} style={{ cursor: "pointer" }} className="d-flex flex-column align-items-center mx-2">
                <div style={{ position: "relative" }}>
                    <Nav.Link className="nav-links-custom p-0"><img src={wishListIcon} width="28px" alt="wishlist" /></Nav.Link>
                    {wishList.length > 0 && <p className="counts" style={{ position: "absolute", marginLeft: "15px" }}>{wishList.length}</p>}
                </div>
                <p className="d-none d-sm-block header-icon-text">Wishlist</p>
            </div>

            {/* Cart Icon for small screens */}
            <div onClick={() => navigate("/cart")} style={{ cursor: "pointer" }} className="d-flex flex-column align-items-center mx-1">
                <div style={{ position: "relative" }}>
                    <Nav.Link className="nav-links-custom p-0"><img src={CartIcon} width="28px" alt="carticon" /></Nav.Link>
                    {cartData.length > 0 && <p className="counts" style={{ position: "absolute", marginLeft: "15px" }}>{cartData.length}</p>}
                </div>
                <p className="d-none d-sm-block header-icon-text">Bag</p>
            </div>
        </div>

        {/* Navbar Toggle Button - Stays as a direct child of Navbar */}
        <Navbar.Toggle aria-controls="navbarScroll" className="toggle-icon" />

        {/* Collapsible content (Nav Links, Search, and Icons for large screens) */}
        <Navbar.Collapse id="navbarScroll" ref={navbarRef}> {/* Added ref here */}
          <Nav className="ms-auto my-2 my-lg-0" navbarScroll>
            {/* Added onClick={closeNavbar} to each Nav.Link */}
            <Nav.Link as={Link} to="/" className="nav-links-custom mx-md-2" onClick={closeNavbar}>Home</Nav.Link>
            <Nav.Link as={Link} onClick={() => { handlepageshift(); closeNavbar(); }} to="/women" className="nav-links-custom mx-md-2">Women</Nav.Link>
            <Nav.Link as={Link} onClick={() => { handlepageshift(); closeNavbar(); }} to="/men" className="nav-links-custom mx-md-2">Men</Nav.Link>
            <Nav.Link as={Link} onClick={() => { handlepageshift(); closeNavbar(); }} to="/kids" className="nav-links-custom mx-md-2">Kids</Nav.Link>
          </Nav>
        <div style={{ position: "relative", maxWidth: "400px" }}>
  <Form className="d-flex mx-3 my-2 my-lg-0" style = {{gap:10}}>
    <div style={{ position: "relative", width: "100%" }}>
      <Form.Control
        type="search"
        placeholder="Search for products..."
        className="me-2"
        aria-label="Search"
        value = {searchValue}
        onChange={(e) => {setSearchValue(e.target.value);setShowSearchResult(!showSearchResults)}}
        style={{ outline: 'none', boxShadow: 'none', width: '100%'  }}
      />

      {/* ✅ Results box positioned below input */}
      {showSearchResults && <div
        style={{
          position: "absolute",
          top: "100%",
          left: 0,
          width: "100%",
          backgroundColor: "white",
          border: "1px solid #ccc",
          borderRadius: "4px",
          zIndex: 1000,
        }}
      >
   
        {searchQuery.slice(0,5).map((data)=>{
            return <p  onClick = {()=>{ navigate("/search");setSearchValue(data);handleSearchSuggestions(data);showQueryResultProducts();setShowSearchResult(!showSearchResults);closeNavbar();}} style={{ margin: 0, padding: "8px",cursor:"pointer"}}>🔍 {data}</p>
        })}
      
        
        
      </div>}
    </div>

    <Button 
      onClick={() => {
        navigate("/search");
       
        showQueryResultProducts();
        closeNavbar();
      }}
      variant="outline-success"
      className="custom-button py-1 d-flex justify-content-center align-items-center"
      
    >
      Search
    </Button>
  </Form>
</div>


          {/* Icons for large screens (d-none for small, d-lg-flex for large) */}
          <div className="d-none d-lg-flex align-items-center">
          
            <div onClick={() => { navigate("/wishlist"); closeNavbar(); }} style={{ cursor: "pointer" }} className="d-flex flex-column align-items-center mx-3">
                <div style={{ position: "relative" }}>
                    <Nav.Link className="nav-links-custom p-0"><img src={wishListIcon} width="25px" alt="wishlist" /></Nav.Link>
                    {wishList.length > 0 && <p className="counts" style={{ position: "absolute", marginLeft: "15px", top: "-5px" }}>{wishList.length}</p>}
                </div>
                <p className="header-icon-text">Wishlist</p>
            </div>
            <div onClick={() => { navigate("/cart"); closeNavbar(); }} style={{ cursor: "pointer" }} className="d-flex flex-column align-items-center mx-2">
                <div style={{ position: "relative" }}>
                    <Nav.Link className="nav-links-custom p-0"><img src={CartIcon} width="25px" alt="carticon" /></Nav.Link>
                    {cartData.length > 0 && <p className="counts" style={{ position: "absolute", marginLeft: "15px", top: "-5px" }}>{cartData.length}</p>}
                </div>
                <p className="header-icon-text">Bag</p>
            </div>
          </div>

        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;