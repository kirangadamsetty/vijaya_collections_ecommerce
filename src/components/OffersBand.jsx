import "../styles/offersband.css"
import Container from "react-bootstrap/Container"
import offersImage2 from "../assets/offersband-image2.png"
import Button from 'react-bootstrap/Button';

function OffersBand(){
    return(
        <div className ="offers-container bg-body-secondary p-3">
 <Container>
 <div className ="d-flex justify-content-around align-items-center">
 <div className = "offers-image">
    <img src = {offersImage2} alt = "offers-image"/>
</div>
      
<div className  = "text-center">
    <h1>Get <span>15% </span>OFF</h1>
    <h3 className  = "mb-3">On Your First Order at Vijaya Collections!</h3>
    <Button>Know More</Button>
</div>
<div className = "offers-image">
    <img src = {offersImage2} alt = "offers-image"/>
</div>
      
 </div>

     </Container>
        </div>    

    )
}
export default OffersBand