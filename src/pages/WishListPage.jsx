import OffersCard from "../components/OffersBand.jsx"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import {useContext} from "react"
import {WishListContext} from "../utils/WishListContext"
import WishListCard from "../components/WishListCard.jsx"
function WishListPage(){
    const {wishList} = useContext(WishListContext)
    return(
        <div style = {{marginTop:"150px"}}>
        <Container  className = "my-5">
        <h1 className ="mb-4 mt-n5" >WishList...</h1>
            <Row >
              
                
                  {wishList.map((data) =>{
                    return <Col md = {3}>
<WishListCard data = {data}/>
                    </Col>
                  })}
               
            </Row>
        </Container>
           <OffersCard/>
        </div>
    )
}
export default WishListPage