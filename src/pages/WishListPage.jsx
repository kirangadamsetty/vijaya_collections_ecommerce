import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import wishListEmptyImage from "../assets/emptyWishlist.png"
import Col from "react-bootstrap/Col"
import Button from "react-bootstrap/Button"
import {useContext} from "react"
import {useNavigate} from "react-router-dom"
import {WishListContext} from "../utils/WishListContext"
import WishListCard from "../components/WishListCard.jsx"
function WishListPage(){
    const {wishList} = useContext(WishListContext)
    
    const navigate = useNavigate()
       return(
        <div style = {{marginTop:"150px"}}>
        <Container  className = "my-5" >
      { wishList.length > 0 &&  (<div>
 <h3>Saved with love, just for you.</h3>
 <h1>Wishlist</h1>
</div>)}

            <Row>
     { wishList.length > 0 ?   
                  (wishList.map((data) =>{
                    return <Col xs={6} sm={6} md={3} lg={3}  key = {data.id} className = "my-2">
<WishListCard data = {data}/>
                    </Col>
                  }))
                   :

                 

                   (
  <Col md={12} className="d-flex justify-content-center align-items-center" style={{ height: "80dvh" }}>
    <div style={{ width: "300px", textAlign: "center" }}>
      <img src={wishListEmptyImage}  style={{ width: "150px", marginBottom: "20px" }} alt="Empty Bag" />
      <h3 style = {{fontWeight:"bold"}}>Your wishlist is empty</h3>
      <p>
        Add items that you like to your wishlist. Review them anytime and easily move them to the bag.
      </p>
      <Button className="bg-white custom-button2" onClick = {()=> navigate("/")}>CONTINUE SHOPPING</Button>
    </div>
  </Col>

                 )
              


     }
            </Row>
                        
               
                
        </Container>
        </div>
    )
}
export default WishListPage