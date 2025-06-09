import OffersCard from "../components/OffersBand.jsx"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import wishListEmptyImage from "../assets/emptyWishlist.png"
import Col from "react-bootstrap/Col"
import {useContext} from "react"
import {WishListContext} from "../utils/WishListContext"
import WishListCard from "../components/WishListCard.jsx"
function WishListPage(){
    const {wishList} = useContext(WishListContext)
    return(
        <div style = {{marginTop:"150px"}}>
        <Container  className = "my-5">
      { wishList.length > 0 ?  (<h1 className ="mb-4 mt-n5" >WishList...</h1>) :    <h1 className ="mt-3 ms-4">WishList is Empty...</h1>
}
            <Row>
     { wishList.length > 0 ?   
                  (wishList.map((data) =>{
                    return <Col md = {3} key = {data.id} className = "my-2">
<WishListCard data = {data}/>
                    </Col>
                  }))
                   :
                 ( <Col className = "text-center">
                <img src = {wishListEmptyImage} style = {{width:"300px"}}/>
              </Col>)
              


     }
            </Row>
        </Container>
           <OffersCard/>
        </div>
    )
}
export default WishListPage