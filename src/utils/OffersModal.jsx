import { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import '../styles/OffersModal.css'; // Custom styles here

function OffersModal() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      handleShow();
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Modal show={show} onHide={handleClose} centered backdrop="static" className="offer-modal">
      <Modal.Header closeButton>
        <Modal.Title className="modal-title">🎉 Welcome to Vijaya Collections!</Modal.Title>
      </Modal.Header>
      <Modal.Body className="modal-body">
        <h4 className="highlight-text">🎁 Enjoy 10% OFF on Your First Purchase!</h4>
         <Modal.Title className="modal-title mb-2">COUPON CODE : VIJAYA10</Modal.Title>
        <p className="details-text">
          As a token of appreciation, we’re offering a special **welcome discount** exclusively for you.
          Shop now and experience premium quality at unbeatable prices.
        </p>
        <ul className="benefits-list">
          <li>✅ 10% Instant Discount</li>
          <li>🚚 Fast & Free Delivery</li>
          <li>⭐ Trusted by 10,000+ Happy Customers</li>
        </ul>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="outline-secondary" className="custom-button" onClick={handleClose}>
          Close
        </Button>
        
      </Modal.Footer>
    </Modal>
  );
}

export default OffersModal;
