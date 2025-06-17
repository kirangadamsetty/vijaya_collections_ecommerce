import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {useNavigate} from "react-router-dom"
import {CategoryFilterContext} from "../utils/CategoryFilterContext"
import {useContext, useState, useEffect} from "react"
import wishListWhite from "../assets/wishListWhite.png"
import {  toast } from 'react-toastify';
import "../styles/productCard.css"
import wishListIcon from "../assets/wishlist.png"
import {WishListContext} from "../utils/WishListContext"
import starIcon from "../assets/starIcon.png"
function ProductCard({data}) {
   const {setProductInformationPage} = useContext(CategoryFilterContext)
const [buttonText, setButtonText]  = useState(false)
   const navigate = useNavigate()
   const {handleWishList,handleCancelWishList, wishList} = useContext(WishListContext)
const notifyAdded = () => toast.success("Added to wishlist!", { autoClose: 2000});
const notifyRemoved = () =>toast.success("Removed from wishlist", {autoClose : 2000})
     useEffect(()=>{
       let ids = wishList.map((li) => li.id)
      ids.includes(data.id) ? setButtonText(true) : setButtonText(false)
     }, [])
   
  return (
    <Card
  onClick={() => {
    setProductInformationPage(data);
    navigate("/productInfo");
  }}
  className="h-100 product-card-container"
  style={{ cursor: "pointer" }}
>
  

<Card.Img variant="top" src={data.image} className = "product-image" style={{ height: "350px", objectFit: "cover", objectPosition:"top center"}} />
      <p className = "shadow-lg text-dark" style = {{right:"0",color:"white",position:"absolute", backgroundColor:"lightgray", padding:"3px 5px", margin:"4px 5px"}}>{data.averageRating}<img src = {starIcon} className = "mb-1 ms-1" width = "15"/></p>
      <Card.Body>
        <Card.Title><h3 style = {{overflow : "hidden",textOverflow : "ellipsis", whiteSpace : "nowrap"}}>{data.name}</h3></Card.Title>
        <Card.Text className = "product-description" style ={{overflow : "hidden",textOverflow : "ellipsis", whiteSpace : "nowrap"}}>
          {data.description}
        </Card.Text>
        
                              <h5> ₹{data.price} <span style = {{fontSize:"15px"}} className = "offer-price">MRP<span className = "text-decoration-line-through offer-price"> ₹{data.price+350}</span><span style = {{fontSize:"15px"}} className = "mx-2 offer-price">({Math.ceil((350 / (data.price + 350)) * 100)}% OFF)</span> </span></h5>
               {buttonText ? <Button onClick = {(e)=>{handleCancelWishList(data);  e.stopPropagation();notifyRemoved();setButtonText(false)}} className = "text-secondary  mt-2 w-100  custom-button" style ={{fontSize:"13px"}}><img src = {wishListWhite} width = "20" className = "me-2 mb-1 button-icon"/>REMOVE FROM WISHLIST</Button>
                  :   <Button onClick = {(e)=>{handleWishList(data); e.stopPropagation(); notifyAdded();setButtonText(true)}} className = "bg-white text-secondary  mt-2 w-100  custom-button2" style ={{fontSize:"13px"}}><img src = {wishListIcon} width = "20" className = "me-2 mb-1 button-icon"/>ADD TO WISHLIST</Button>}
          
                 
      </Card.Body>
     
    </Card>
    
  );
}

export default ProductCard;