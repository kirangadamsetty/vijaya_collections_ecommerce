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
import "../styles/accordion.css"
import {  toast } from 'react-toastify';
import cartWhite from "../assets/cartWhite.png"

function ProductInfoPage(){
    const {productInformationPage} = useContext(CategoryFilterContext)
    const [selectedSize, setSelectedSize] = useState("")
    const {handleWishList, handleCancelWishList, wishList} = useContext(WishListContext)
    const {handleCartList, cartData, handleCartCancel} = useContext(CartContext)
    const notifyAdded = () => toast.success("Added to wishlist!", { autoClose: 2000});
    const notifyRemoved = () =>toast.success("Removed from wishlist", {autoClose : 2000})
    const notifyAddedBag = () => toast.success("Added to Bag!", { autoClose: 2000});
    const notifyRemovedBag = () =>toast.success("Removed from Bag", {autoClose : 2000})

    const data = productInformationPage

    const handleAddToCart = (e, data) =>{
        if(!selectedSize){
            toast.error("Please select the size", {autoClose : 2000})
        }
        else{
            e.stopPropagation()
            handleCartList(data, selectedSize)
            handleCancelWishList(data)
            notifyAddedBag()
        }
    }

    console.log(selectedSize)

    return(
        <div style = {{marginTop:"150px"}}>
            <Container fluid className="px-3 px-md-5 my-5">
                {/* Added overflow-x: hidden to the parent flex container for robustness */}
                <div className="d-flex flex-column flex-md-row justify-content-center align-items-start" style={{ gap: "30px", overflowX: "hidden" }}>

                    <div style  ={{height:"500px", minWidth: "300px", flexShrink: 0, /* Prevents image from shrinking too much */ maxWidth: "100%", overflow:"hidden"}}>
                        <img src = {data.image} alt  = "productInfoImage" className = "w-100 h-100" style = {{borderRadius:"8px", backgroundSize:"cover", objectFit:"cover"}}/>
                    </div>

                    {/* Adjusted style for this div: Reintroduced maxWidth for larger screens */}
                    <div style ={{flex: 1, minWidth: "300px", maxWidth: "600px" /* Control max width on larger screens */ }}>
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
                                return <Button key = {siz} className = {selectedSize === siz ? "custom-button2": "custom-button"} onClick = {()=>setSelectedSize(siz)} variant="secondary">{siz}</Button>
                            })}
                        </ButtonGroup>
                        <p>{data.detailedDescription}</p>

                        <div className = "my-3">
                            {
                                (cartData.some((li)=>li.id === data.id) )?
                                    (<Button onClick = {(e) =>{e.stopPropagation(); handleCartCancel(data);notifyRemovedBag()}} className = "bg-white text-secondary  custom-button" style ={{fontSize:"13px"}}><img src = {cartWhite} width = "20" className = "me-2 mb-1"/>REMOVE FROM BAG</Button>)
                                    :
                                    (<Button onClick = {(e) =>handleAddToCart(e, data)} className = "bg-white text-secondary  custom-button2 " style ={{fontSize:"13px"}}><img src = {cartIcon} width = "20" className = "me-2 mb-1"/>ADD TO BAG</Button>)
                            }

                            {( wishList.some((li)=> li.id === data.id)) ? (<Button onClick = {(e)=>{handleCancelWishList(data); notifyRemoved();  e.stopPropagation();}} className = "text-secondary  ms-2 custom-button" style ={{fontSize:"13px"}}><img src = {wishListWhite} width = "20" className = "me-2 mb-1"/>REMOVE FROM WISHLIST</Button>)
                                :   (<Button onClick = {(e)=>{handleWishList(data); e.stopPropagation();notifyAdded()}} className = "bg-white text-secondary  ms-2 custom-button2" style ={{fontSize:"13px"}}><img src = {wishListIcon} width = "20" className = "me-2 mb-1"/>ADD TO WISHLIST</Button>)
                            }
                        </div>

                        <h3 style ={{fontSize:"16px", fontWeight:"600"}} className = "mt-4 mb-2">CUSTOMER REVIEWS</h3>

                        <Accordion defaultActiveKey="0" className="w-100">
                            {data.customerReviews.map((rev) => (
                                <Accordion.Item eventKey={rev.id} key={rev.id}>
                                    <Accordion.Header>
                                        <span
                                            style={{
                                                marginRight: "10px",
                                                border: "1px solid #0096A6",
                                                borderRadius: "5px",
                                                padding: "2px 3px",
                                                fontSize: "15px",
                                                whiteSpace: "nowrap",
                                            }}
                                        >
                                            {rev.rating} <img src={starIcon} className="mb-1" width="15" />
                                        </span>
                                        <span className="accordion-header-user-text">{rev.user}</span>
                                    </Accordion.Header>
                                    <Accordion.Body style={{ overflowWrap: "anywhere", wordBreak: "break-word" }}>
                                        {rev.review}
                                    </Accordion.Body>
                                </Accordion.Item>
                            ))}
                        </Accordion>
                    </div>
                </div>
            </Container>
        </div>
    )
}
export default ProductInfoPage;