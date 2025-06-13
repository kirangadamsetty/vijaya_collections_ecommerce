import OffersBand from "./OffersBand"
import womenpagesaree1 from "../assets/womensPage/dailywearSarees/women-page-saree1.avif"
import Container from "react-bootstrap/Container"
import Button from "react-bootstrap/Button"
import cartIcon from "../assets/cart-icon.png"
import Accordion from 'react-bootstrap/Accordion';
import {CategoryFilterContext} from "../utils/CategoryFilterContext"
import {useContext, useState} from "react"
import wishListIcon from "../assets/wishlist.png"
import starIcon from "../assets/starIcon.png"
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import wishListWhite from "../assets/wishListWhite.png"
import { WishListContext } from "../utils/WishListContext"
import { CartContext } from "../utils/CartContext"
function ProductInfoPage(){
    const {productInformationPage} = useContext(CategoryFilterContext)
    const {handleWishList, handleCancelWishList} = useContext(WishListContext)
    const {handleCartList} = useContext(CartContext)
    const [buttonText, setButtonText] = useState(false)
    const data = productInformationPage
    console.log(data.id)
    return(
         <div style = {{marginTop:"150px"}}>
       <Container className = "d-flex justify-content-center my-5" style = {{gap:"30px" }}>

      
                <div style  ={{height:"500px", width:"350px", overflow:"hidden"}}>
<img src = {data.image} alt  = "productInfoImage" className = "w-100 h-100" style = {{borderRadius:"8px", backgroundSize:"cover", objectFit:"cover"}}/>

                </div>

                 
                      <div style ={{width:"500px"}}>

                     
                    <h1>{data.name}</h1>
                    <h3>{data.description}</h3>
                      <h2> ₹{data.price} <span style = {{fontSize:"18px"}}>MRP<span className = "text-decoration-line-through"> ₹{data.price+350}</span><span style = {{fontSize:"18px"}} className = "mx-2">({Math.ceil((350 / (data.price + 350)) * 100)}% OFF)</span> </span></h2>
                    <p>inclusive of all taxes</p>
                   <div className = "d-flex">
                        <p style ={{border:"1px solid lightgray", padding:"8px 10px"}}>{data.averageRating} <img style = {{marginLeft : "3px", marginBottom:"4px"}} src = {starIcon} width = "20"/></p>
                        <p style ={{border:"1px solid lightgray", padding:"8px 10px"}}>{data.totalRatings}+ Ratings</p>
                    </div>
                    <hr/>
                    <h3 style ={{fontSize:"16px", fontWeight:"500"}}>SELECT SIZE</h3>
                     <ButtonGroup aria-label="Basic example" className = "mb-3">
                     
                     {data.sizes.map((siz) =>{
                       return <Button className = "custom-button" variant="secondary">{siz}</Button>
                     })}
      
      
    </ButtonGroup>
                    <p>{data.detailedDescription}</p>
                    
                   
                    <div className = "my-3">
 <Button onClick = {(e) =>{e.stopPropagation(); handleCartList(data);handleCancelWishList(data)}} className = "bg-white text-secondary  custom-button2 " style ={{fontSize:"13px"}}><img src = {cartIcon} width = "20" className = "me-2 mb-1"/>ADD TO BAG</Button>
{buttonText ? <Button onClick = {(e)=>{handleCancelWishList(data);  e.stopPropagation();setButtonText(false)}} className = "text-secondary  ms-2 custom-button" style ={{fontSize:"13px"}}><img src = {wishListWhite} width = "20" className = "me-2 mb-1"/>REMOVE FROM WISHLIST</Button>
                  :   <Button onClick = {(e)=>{handleWishList(data); e.stopPropagation(); setButtonText(true)}} className = "bg-white text-secondary  ms-2 custom-button2" style ={{fontSize:"13px"}}><img src = {wishListIcon} width = "20" className = "me-2 mb-1"/>ADD TO WISHLIST</Button>}
                 </div>
                     <h3 style ={{fontSize:"16px", fontWeight:"600"}} className = "mt-4 mb-2">CUSTOMER REVIEWS</h3>
                     
                    <Accordion defaultActiveKey="0">
                    {data.customerReviews.map((rev)=>{
                        return  <Accordion.Item eventKey={rev.id}>
        <Accordion.Header><span style = {{marginRight : "10px", border:"1px solid #0096A6", borderRadius:"5px", padding:"2px 3px", fontSize:"15px"}}>{rev.rating} <img src = {starIcon} className = "mb-1" width = "15"/> </span>{rev.user}</Accordion.Header>
        <Accordion.Body>
          {rev.review}
         
        </Accordion.Body>
      </Accordion.Item>
                    })}
      
     
    </Accordion>
                     </div>

                 </Container>
            <OffersBand/>
         </div>
    )
}
export default ProductInfoPage