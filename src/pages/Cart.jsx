import OffersBand from "../components/OffersBand"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Button from "react-bootstrap/Button"
import Modal from 'react-bootstrap/Modal';
import closeIcon from "../assets/close.png"
import  {useContext, useState} from "react"
import {CartContext} from "../utils/CartContext"
import emptyBag from "../assets/emptyBag.webp"
function Cart(){
  const {cartData, handleCartCancel, handlequantity, price} = useContext(CartContext)
  const [show, setShow] = useState(false);
  const [quantityItem, setQuantityItem] = useState([])
    const handleClose = () => setShow(false);
    let quantity  = [1, 2, 3, 4, 5, 6,7, 8, ,9 ,10]
    const handleShow = () => setShow(true);
  
    const data = cartData
    return(
        <div style = {{marginTop:"150px"}}>
          <Container className = "my-4" >
            <Row>
            {cartData.length > 0 && <h1>Cart...</h1>}
          {cartData.length === 0 && (
  <Col md={12} className="d-flex justify-content-center align-items-center" style={{ height: "80vh" }}>
    <div style={{ width: "300px", textAlign: "center" }}>
      <img src={emptyBag} style={{ width: "150px", marginBottom: "20px" }} alt="Empty Bag" />
      <h3 style = {{fontWeight:"bold"}}>Hey, it feels so light</h3>
      <p>
        There is nothing in your bag, Let's add some items.
      </p>
      <Button className="bg-white custom-button2">ADD ITEMS FROM WISHLIST</Button>
    </div>
  </Col>
)}

       {cartData.length >0 &&   <Col md = {7} style = {{minHeight:"80dvh"}}>
            {data.map((li)=>{
              return        <div className = "d-flex my-2" style = {{border:"1px solid #0096A6" , padding:"15px 18px",gap:"20px" , position:"relative"}}>

               
                  <div  style = {{width:"100px", height:"150px", overflow:"hidden"}} >
                    <img src = {li.image} style = {{objetFit:"cover", width:"100%", height:"100%"}} alt = "cart-image"/>
                  </div>
                  <div>
                    <h3>{li.name}</h3>
                    <p>{li.description}</p>
                     <span className = "me-3 bg-body-secondary" style ={{padding:"3px 5px", borderRadius:"5px" ,fontWeight:"bold"}}>Size :{li.sizes[0]}</span>
                      <span onClick={()=>{handleShow(); setQuantityItem(li)}} className = "bg-body-secondary" style ={{padding:"3px 5px", borderRadius:"5px", fontWeight:"bold", cursor:"pointer"}} >Qty : {li.quantity}</span>
                    <h5 className = "mt-3"> ₹{li.price} <span style = {{fontSize:"15px"}}>MRP<span className = "text-decoration-line-through"> ₹{li.price+350}</span><span style = {{fontSize:"15px"}} className = "mx-2">({Math.ceil((350 / (li.price + 350)) * 100)}% OFF)</span> </span></h5>
                        <p onClick ={()=>handleCartCancel(li)}  className = "shadow-lg text-dark d-flex justify-content-center align-items-center" style = {{top:"0",right:"0",color:"white",position:"absolute", backgroundColor:"lightgray", width:"30px",cursor:"pointer", height:"30px", margin:"8px 15px", borderRadius:"100%"}}><img src = {closeIcon} alt = "closeIcon" width = "20"/></p>
                  
                   </div>
                  </div>
               
            })}
                </Col>}
             { cartData.length>0 &&  <Col md = {5}>
                     <div className = "my-2" style = {{border:"1px solid #0096A6" , padding:"15px 15px",gap:"20px"}}>
                      <p style ={{fontWeight:"bold"}}>PRICE DETAILS <span style = {{fontWeight:"500"}}>(Total Items : {cartData.length})</span> </p>
                      <hr/>
                      <div>
                      
                        <p className = "d-flex justify-content-between"><span>Total MRP</span><span>₹{price.totalPrice}</span></p>
                      <p className = "d-flex justify-content-between"><span>Discount on MRP</span><span>- ₹{price.discountPrice}</span></p>
                      <p className = "d-flex justify-content-between"><span>Shipping Fee</span><span>FREE</span></p>
                      </div>
                      <hr/>
                       <h3 className = "d-flex justify-content-between"><span>Total Amount</span><span>₹{price.priceAfterDiscount}</span></h3>
                      <Button className = "text-secondary  mt-2 w-100  custom-button">Place Order</Button>
                     </div>
                </Col>
             }
            </Row>
            

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title><h3>SELECT QUANTITY</h3></Modal.Title>
        </Modal.Header>
        <Modal.Body>
     {
      quantity.map((num) =>{
        return <Button onClick = {()=>handlequantity(quantityItem, num)} key = {num} className = "custom-button me-2">{num}</Button>
      })
     }

        </Modal.Body>
        <Modal.Footer>
          <Button className = "custom-button"  onClick={handleClose}>
            Close
          </Button>
          
        </Modal.Footer>
      </Modal>
          </Container>
            <OffersBand/>
        </div>
    )
}
export default Cart