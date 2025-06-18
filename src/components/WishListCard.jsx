import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import cartIcon from "../assets/cart-icon.png"
import closeIcon from "../assets/close.png"
import {CartContext} from "../utils/CartContext"
import {  toast } from 'react-toastify';
import "../styles/productCard.css"
import Modal from 'react-bootstrap/Modal';
import {useContext,useState} from "react"
import {WishListContext} from "../utils/WishListContext"
function WishListCard({data}) {
    const {handleCancelWishList} = useContext(WishListContext)
    const notifyAdded = () => toast.success("Moved to bag!", { autoClose: 2000});
    const notifyRemoved = () =>toast.success("Removed from wishlist", {autoClose : 2000})
    const {handleCartList, size, setSize} = useContext(CartContext)
  const [quantityItem, setQuantityItem] = useState({})

        const [show, setShow] = useState(false)
    const handleShow = () => setShow(true);
         const handleClose = () => setShow(false); 
    const handleButton = (data) =>{

      if(data?.sizes?.length ===1){
        handleCartList(data, data?.sizes[0]);
        handleCancelWishList(data);
        notifyAdded()
      }
      else{
  handleShow();
      setQuantityItem(data);
      }
    

    }
  return (
    <>
    <Card className = "h-100 product-card-container" style={{cursor:"pointer" }}>
<Card.Img variant="top" src={data.image} className = "product-image" style={{ height: "350px", objectFit: "cover", objectPosition:"top center"}} />
      <p onClick = {() =>{handleCancelWishList(data); notifyRemoved()}} className = "shadow-lg text-dark d-flex justify-content-center align-items-center" style = {{right:"0",color:"white",position:"absolute", backgroundColor:"lightgray", width:"30px", height:"30px", margin:"4px 5px", borderRadius:"100%"}}><img src = {closeIcon} alt = "closeIcon" width = "20"/></p>
      <Card.Body>
        <Card.Title><h3 style = {{overflow : "hidden",textOverflow : "ellipsis", whiteSpace : "nowrap"}}>{data.name}</h3></Card.Title>
       <Card.Text className = "product-description" style ={{overflow : "hidden",textOverflow : "ellipsis", whiteSpace : "nowrap"}}>
          {data.description}
        </Card.Text>
        
                              <h5> ₹{data.price} <span style = {{fontSize:"15px"}} className = "offer-price">MRP<span className = "text-decoration-line-through offer-price"> ₹{data.price+350}</span><span style = {{fontSize:"15px"}} className = "mx-2 offer-price">({Math.ceil((350 / (data.price + 350)) * 100)}% OFF)</span> </span></h5>
 <Button onClick = {() =>{handleButton(data)}} className = "bg-white text-secondary  mt-2 w-100  custom-button2" style ={{fontSize:"13px"}}><img src = {cartIcon} width = "20" className = "me-2 mb-1 button-icon"/>ADD TO BAG</Button>
      </Card.Body>
    </Card>
    <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                      <Modal.Title><h3>Select Size</h3></Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
             
                  { quantityItem?.sizes?.map((siz) =>{
        return <Button key  = {siz} onClick = {()=>{handleCartList(quantityItem, siz);setSize(siz);handleCancelWishList(data); handleClose()}}  className = {`${size === siz ? "custom-button2": "custom-button"} me-2 my-2`}>{siz}</Button>
      })
                  }
             
               
                    </Modal.Body>
                   
                  </Modal>
    </>
  );
}

export default WishListCard;