import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Button from "react-bootstrap/Button"
import "../styles/productCard.css"
import Modal from 'react-bootstrap/Modal';
import userIcon from "../assets/userIcon.png"
import {AuthContext} from  "../utils/AuthContext"
import closeIcon from "../assets/close.png"
import {useNavigate} from "react-router-dom"
import  {useContext, useState} from "react"
import heart from "../assets/heart.png"
import {CartContext} from "../utils/CartContext"
    import { signOut } from "firebase/auth";
  import { auth } from "../../firebaseConfig"
  import starIcon from "../assets/starIcon.png"
import emptyBag from "../assets/emptyBag.webp"
import Faq from "../components/Faq.jsx"
import Authorization from "../components/Authorization"
import { CategoryFilterContext } from "../utils/CategoryFilterContext"
function Cart(){
  const {cartData, handleCartCancel,  handleSize, handlequantity, price} = useContext(CartContext)
  const [show, setShow] = useState(false);
  const navigate = useNavigate()
  const {userData,setUserData} = useContext(AuthContext)
  const [sizeSelected, setSizeSelected] = useState("")
  const {setProductInformationPage} = useContext(CategoryFilterContext)
  const [quantitySelected, setQuantitySelected] = useState("")
  const [event, setEvent] = useState("")
  const [quantityItem, setQuantityItem] = useState([])
    let quantity  = [1, 2, 3, 4, 5, 6,7, 8, 9 ,10]
    const handleShow = () => setShow(true);
     const handleClose = () => setShow(false); 
     const data = cartData
    const handleProductQuantity = (li) =>{
      handleShow(); 
      setQuantityItem(li);
      setEvent("Select Quantity")
    }
    const handleProductSize = (li) =>{
      setSizeSelected("")
      handleShow(); 
      
      setQuantityItem(li);
      setEvent("Select Size")
    }
    const handleSignout = () =>{
  

signOut(auth).then(() => {
 setUserData("")
}).catch((error) => {
  console.log("signout", error)
});
    }
    return(
        <div style = {{marginTop:"120px"}} className = "cart-container">
          <Container className = "my-4">
            <Row>
           {userData && <Col className = "d-flex flex-column align-items-end mb-4 mb-md-2">
            
              <div className = "d-flex align-items-center mb-md-1">
  <img width="50" style ={{marginBottom:"18px" , marginRight:"5px"}} src  = {userIcon} alt = "user-icon"/>
  
    <div>
        <h6>Welcome!<img src = {heart} className ="ms-1" alt  = "heart"/></h6>
      <p style = {{marginTop:"-10px" }}>{userData?.email}</p>
      <Button onClick  = {handleSignout} className = "custom-button2" style = {{marginTop:"-10px" }}>Signout</Button>
    </div>
  </div>
            </Col>}
            {cartData.length > 0 && <div >
 <h3>Ready, set, checkout!</h3>
 <h1>Cart</h1>
  </div>
  
  }
          {cartData.length === 0 && (
  <Col md={12} className="d-flex justify-content-center align-items-center" style={{ height: "80dvh" }}>
    <div style={{ width: "300px", textAlign: "center" }}>
      <img src={emptyBag} style={{ width: "150px", marginBottom: "20px" }} alt="Empty Bag" />
      <h3 style = {{fontWeight:"bold"}}>Hey, it feels so light</h3>
      <p>
        There is nothing in your bag, Let's add some items.
      </p>
      <Button className="bg-white custom-button2" onClick = {()=>navigate("/wishlist")}>ADD ITEMS FROM WISHLIST</Button>
    </div>
  </Col>
)}

       {cartData.length >0 &&   <Col md = {7}>
            {data.map((li)=>{
              return        <div className = "d-flex my-2" style = {{border:"1px solid #0096A6" ,borderRadius:"8px", padding:"15px 18px",gap:"20px" , position:"relative"}}>

               
                  <div  style = {{width:"100px", height:"180px", overflow:"hidden",cursor:"pointer"}}  onClick = {()=>{setProductInformationPage(li);navigate("/productInfo");}}>
                    <img src = {li.image} style = {{objectFit:"cover", width:"100%", height:"100%"}} alt = "cart-image"/>
                  </div>
                  <div>
                    <h3 style = {{overflow : "hidden",textOverflow : "ellipsis", whiteSpace : "nowrap"}}>{li.name}</h3>
                    <p className = "product-description" style ={{overflow : "hidden",textOverflow : "ellipsis", whiteSpace : "nowrap"}}>{li.description}</p>
                     <div className = "d-flex mb-1 cart-rating">
                                                <p style ={{border:"1px solid lightgray", padding:"3px 5px"}}>{li.averageRating} <img style = {{marginLeft : "3px", marginBottom:"4px"}} src = {starIcon} width = "20"/></p>
                                                <p style ={{border:"1px solid lightgray", padding:"3px 5px"}}>{li.totalRatings}+ Ratings</p>
                                            </div>
                     <span onClick = {()=>handleProductSize(li)}  className = "me-3 bg-body-secondary cart-size" style ={{padding:"3px 5px", borderRadius:"5px" ,fontWeight:"bold" , cursor:"pointer"}}>Size: {li.selectedSize || (li.sizes && li.sizes[0]) || "N/A"}</span>
                      <span onClick={()=>handleProductQuantity(li)} className = "bg-body-secondary cart-size" style ={{padding:"3px 5px", borderRadius:"5px", fontWeight:"bold", cursor:"pointer"}} >Qty : {li.quantity}</span> 
                              <h5 style = {{fontSize:"16px"}} className = "mt-3 cart-price"> ₹{li.price} <span style = {{fontSize:"14px"}} className = "offer-price">MRP<span className = "text-decoration-line-through offer-price"> ₹{li.price+350}</span><span style = {{fontSize:"15px"}} className = "mx-2 offer-price">({Math.ceil((350 / (li.price + 350)) * 100)}% OFF)</span> </span></h5>

                              

                        <p onClick ={()=>handleCartCancel(li)}  className = "shadow-lg text-dark d-flex justify-content-center align-items-center" style = {{top:"0",right:"0",color:"white",position:"absolute", backgroundColor:"lightgray", width:"30px",cursor:"pointer", height:"30px", margin:"8px 15px", borderRadius:"100%"}}><img src = {closeIcon} alt = "closeIcon" width = "20"/></p>
                  
                   </div>
                  </div>
               
            })}
                </Col>}
             { cartData.length>0 &&  <Col md = {5}>
                     <div className = "my-2" style = {{border:"1px solid #0096A6",borderRadius:"8px" , padding:"15px 15px",gap:"20px"}}>
                      <p style ={{fontWeight:"bold" }}>PRICE DETAILS <span style = {{fontWeight:"500"}}>(Total Items : {cartData.length})</span> </p>
                      <hr/>
                      <div>
                      
                        <p className = "d-flex justify-content-between"><span>Total MRP</span><span>₹{price.totalPrice}</span></p>
                      <p className = "d-flex justify-content-between"><span>Discount on MRP</span><span>- ₹{price.discountPrice}</span></p>
                      <p className = "d-flex justify-content-between"><span>Shipping Fee</span><span>FREE</span></p>
                      </div>
                      <hr/>
                       <h3 className = "d-flex justify-content-between"><span>Total Amount</span><span>₹{price.priceAfterDiscount}</span></h3>
                     {!userData ? <Button onClick = {()=>{setEvent("Create Account");handleShow();}} className = "text-secondary  mt-2 w-100  custom-button">Place Order</Button>
                             :
                             <Button className = "text-secondary  mt-2 w-100  custom-button">Place Order</Button>
                     }
                     </div>
                </Col>
             }
            </Row>
            

     <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title><h3>{event}</h3></Modal.Title>
        </Modal.Header>
        <Modal.Body>
  
  {(event === "Select Quantity") && (
      quantity.map((num) =>{
        return <Button key = {num} onClick = {()=>{handlequantity(quantityItem, num); setQuantitySelected(num); handleClose()}}  className = { `${quantitySelected === num ? "custom-button2": "custom-button"} me-2 my-2`}>{num}</Button>
      })
     )}
      {(event === "Select Size") && (
      quantityItem.sizes.map((siz) =>{
        return <Button key  = {siz} onClick = {()=>{handleSize(quantityItem, siz);setSizeSelected(siz); handleClose()}}  className = {`${sizeSelected === siz ? "custom-button2": "custom-button"} me-2 my-2`}>{siz}</Button>
      })
     )}
 
      {(event === "Create Account") && (
     <Authorization handleClose = {handleClose}/>
     )}
        </Modal.Body>
       
      </Modal>
    

    
          <Faq/>
          </Container>
       
        </div>
    )
}
export default Cart