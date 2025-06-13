import "../styles/offersband.css"
import Container from "react-bootstrap/Container"
import offersImage2 from "../assets/offersband-image2.png"
import { useState } from 'react';

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
function OffersBand(){
     const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
    return(
      <Container>
        <div className ="offers-container bg-body-secondary p-3">
 
 <div className ="d-flex flex-column flex-md-row justify-content-around align-items-center">
 <div className = "offers-image">
    <img src = {offersImage2} alt = "offers-image"/>
</div>
      
<div className  = "text-center">
    <h1>Get <span>10% </span>OFF </h1>
    <h3 className  = "mb-3">On Your First Order at Vijaya Collections!</h3>
     <Button className = "bg-body-secondary text-dark custom-button" onClick={handleShow}>
       T & C Applied
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>🎉 10% OFF First Order Offer</Modal.Title>
        </Modal.Header>
        <Modal.Body>🛍️ Offer valid only on your first order placed at Vijaya Collections.<br/>

💸 Minimum order value must be ₹1000 or more to qualify.<br/>

🔖 Maximum discount value is ₹500.<br/>

✅ Discount is automatically applied at checkout — no coupon code required.<br/>

🚚 Applicable on all product categories unless specified otherwise.<br/>

📦 Not valid on shipping charges, taxes, or previously placed orders.<br/>

⚠️ Offer cannot be combined with other ongoing discounts or promotions.
<br/>
🕒 Limited-time offer – subject to change or withdrawal at any time without prior notice.<br/>

📱 Vijaya Collections reserves the right to amend the terms at its discretion.<br/>

</Modal.Body>
        <Modal.Footer>
          <Button  className = "custom-button" onClick={handleClose}>
            Close
          </Button>
          
        </Modal.Footer>
      </Modal>
</div>
<div className = "offers-image">
    <img src = {offersImage2} alt = "offers-image"/>
</div>
      
 </div>

    
        </div>    
 </Container>
    )
}
export default OffersBand