import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import cartIcon from "../assets/cart-icon.png"
import closeIcon from "../assets/close.png"
import {CartContext} from "../utils/CartContext"
import {  toast } from 'react-toastify';

import {useContext} from "react"
import {WishListContext} from "../utils/WishListContext"
function WishListCard({data}) {
    const {handleCancelWishList} = useContext(WishListContext)
    const notifyAdded = () => toast.success("Moved to bag!", { autoClose: 2000});
    const notifyRemoved = () =>toast.success("Removed from wishlist", {autoClose : 2000})
    const {handleCartList} = useContext(CartContext)
  return (
    <Card style={{ minWidth: '20rem',height:"100%", cursor:"pointer" }}>
      <Card.Img variant="top" src={data.image} style = {{height:"400px", position:"relative"}}/>
      <p onClick = {() =>{handleCancelWishList(data); notifyRemoved()}} className = "shadow-lg text-dark d-flex justify-content-center align-items-center" style = {{right:"0",color:"white",position:"absolute", backgroundColor:"lightgray", width:"30px", height:"30px", margin:"4px 5px", borderRadius:"100%"}}><img src = {closeIcon} alt = "closeIcon" width = "20"/></p>
      <Card.Body>
        <Card.Title><h3>{data.name}</h3></Card.Title>
       
        
                              <h5> ₹{data.price} <span style = {{fontSize:"15px"}}>MRP<span className = "text-decoration-line-through"> ₹{data.price+350}</span><span style = {{fontSize:"15px"}} className = "mx-2">({Math.ceil((350 / (data.price + 350)) * 100)}% OFF)</span> </span></h5>
 <Button onClick = {(e) =>{e.stopPropagation(); handleCartList(data);handleCancelWishList(data); notifyAdded()}} className = "bg-white text-secondary  custom-button2 mt-2 w-100" style ={{fontSize:"13px"}}><img src = {cartIcon} width = "20" className = "me-2 mb-1"/>ADD TO BAG</Button>
          
              
      </Card.Body>
    </Card>
  );
}

export default WishListCard;