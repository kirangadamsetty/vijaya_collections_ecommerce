import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ProductInfoPage from './ProductInfoPage';
import {useNavigate} from "react-router-dom"
import {CategoryFilterContext} from "../utils/CategoryFilterContext"
import {useContext} from "react"
import cartIcon from "../assets/cart-icon.png"
import wishListIcon from "../assets/wishlist.png"
import {WishListContext} from "../utils/WishListContext"
import starIcon from "../assets/starIcon.png"
function ProductCard({data}) {
   const {setProductInformationPage} = useContext(CategoryFilterContext)
   const navigate = useNavigate()
   const {handleWishList} = useContext(WishListContext)
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
<div className = "d-flex mt-3">
 <Button onClick = {(e) =>e.stopPropagation()} className = "bg-white text-secondary  custom-button2 " style ={{fontSize:"13px"}}><img src = {cartIcon} width = "20" className = "me-2 mb-1"/>ADD TO BAG</Button>
                     <Button onClick = {(e)=>{handleWishList(data); e.stopPropagation();}} className = "bg-white text-secondary mx-3  custom-button2" style ={{fontSize:"13px"}}><img src = {wishListIcon} width = "20" className = "me-2 mb-1"/>WISHLIST</Button>
          
</div>
              
      </Card.Body>
    </Card>
  );
}

export default ProductCard;