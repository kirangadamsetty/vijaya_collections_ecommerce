// components/Footer.jsx
import { Container, Row, Col } from 'react-bootstrap';
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';
import {useNavigate} from "react-router-dom"
import '../styles/footer.css';

function Footer() {
  const navigate = useNavigate()
  return (
    <footer className="bg-dark footer text-light py-5">
      <Container>
        <Row className  = "d-flex justify-content-center">
          {/* About Us */}
          <Col md={3} className="mb-4">
            <h3 >About Us</h3>
            <ul className="list-unstyled mt-3">
              <li>Our Story</li>
              <li>Careers</li>
              <li>Press</li>
            </ul>
          </Col>
<Col md={3} className="mb-4">
            <h3 >Pages</h3>
            <ul className="list-unstyled mt-3">
              <li onClick = {() =>navigate("/men")} >Men</li>
              <li onClick = {()=>navigate("/women")}>Women</li>
              <li onClick = {()=>navigate("/kids")}>Kids</li>
            </ul>
          </Col>
          
          {/* Customer Support */}
          <Col md={3} className="mb-4">
            <h3>Customer Support</h3>
            <ul className="list-unstyled mt-3">
              <li>FAQs</li>
              <li>Shipping & Returns</li>
              <li>Order Tracking</li>
            </ul>
          </Col>

          {/* Contact Details */}
          <Col md={3}>
            <h3 >Contact</h3>
            <ul className="list-unstyled mt-3">
              <li>8-140, Dhone, AndhraPradesh, IN</li>
              <li>Phone: +91 9876543210</li>
              <li>Email: support@vijayacollections.in</li>
            </ul>

            {/* Social Icons */}
            <div className="d-flex gap-3 my-3">
              <FaFacebookF />
              <FaInstagram />
              <FaTwitter />
            </div>

            {/* App Store Icons */}
            {/* <div className="d-flex gap-3">
              <img src={appStore} alt="App Store" height={40}  style ={{backgroundColor:"lightblue"}}/>
              <img src={playStore} alt="Google Play" height={40}  style ={{backgroundColor:"lightblue"}} />
            </div> */}
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
