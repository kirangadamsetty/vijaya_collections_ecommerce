import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {useNavigate} from "react-router-dom"
import {CategoryFilterContext} from "../utils/CategoryFilterContext"
import {useContext, useState, useEffect} from "react"
import wishListWhite from "../assets/wishListWhite.png"
import wishListIcon from "../assets/wishlist.png"
import {WishListContext} from "../utils/WishListContext"
import starIcon from "../assets/starIcon.png"
function ProductCard({data}) {
   const {setProductInformationPage} = useContext(CategoryFilterContext)
const [buttonText, setButtonText]  = useState(false)
   const navigate = useNavigate()
   const {handleWishList,handleCancelWishList, wishList} = useContext(WishListContext)
     useEffect(()=>{
       let ids = wishList.map((li) => li.id)
      ids.includes(data.id) ? setButtonText(true) : setButtonText(false)
     }, [])
   
  return (
    <Card onClick={() => {
    setProductInformationPage(data);
    navigate("/productInfo");
  }} style={{ minWidth: '20rem',height:"100%", cursor:"pointer" }}>
      <Card.Img variant="top" src={data.image} style = {{height:"400px", position:"relative"}}/>
      <p className = "shadow-lg text-dark" style = {{right:"0",color:"white",position:"absolute", backgroundColor:"lightgray", padding:"3px 5px", margin:"4px 5px", borderRadius:"8px"}}>{data.averageRating}<img src = {starIcon} className = "mb-1 ms-1" width = "15"/></p>
      <Card.Body>
        <Card.Title><h3>{data.name}</h3></Card.Title>
        <Card.Text style ={{overflow : "hidden",textOverflow : "ellipsis", whiteSpace : "nowrap"}}>
          {data.description}
        </Card.Text>
        
                              <h5> ₹{data.price} <span style = {{fontSize:"15px"}}>MRP<span className = "text-decoration-line-through"> ₹{data.price+350}</span><span style = {{fontSize:"15px"}} className = "mx-2">({Math.ceil((350 / (data.price + 350)) * 100)}% OFF)</span> </span></h5>
               {buttonText ? <Button onClick = {(e)=>{handleCancelWishList(data);  e.stopPropagation();setButtonText(false)}} className = "text-secondary  mt-2 w-100  custom-button" style ={{fontSize:"13px"}}><img src = {wishListWhite} width = "20" className = "me-2 mb-1"/>REMOVE FROM WISHLIST</Button>
                  :   <Button onClick = {(e)=>{handleWishList(data); e.stopPropagation(); setButtonText(true)}} className = "bg-white text-secondary  mt-2 w-100  custom-button2" style ={{fontSize:"13px"}}><img src = {wishListIcon} width = "20" className = "me-2 mb-1"/>ADD TO WISHLIST</Button>}
          
              
      </Card.Body>
    </Card>
  );
}

export default ProductCard;