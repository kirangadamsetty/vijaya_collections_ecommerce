import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import cartIcon from "../assets/cart-icon.png"
import closeIcon from "../assets/close.png"
function WishListCard({data}) {
  return (
    <Card style={{ minWidth: '20rem',height:"100%", cursor:"pointer"  }}>
      <Card.Img variant="top" src={data.image} style = {{height:"400px", position:"relative"}}/>
      <p className = "shadow-lg text-dark d-flex justify-content-center align-items-center" style = {{right:"0",color:"white",position:"absolute", backgroundColor:"lightgray", width:"30px", height:"30px", margin:"4px 5px", borderRadius:"100%"}}><img src = {closeIcon} alt = "closeIcon" width = "20"/></p>
      <Card.Body>
        <Card.Title><h3>{data.name}</h3></Card.Title>
        <Card.Text style ={{overflow : "hidden",textOverflow : "ellipsis", whiteSpace : "nowrap"}}>
          {data.description}
        </Card.Text>
        
                              <h5> ₹{data.price} <span style = {{fontSize:"15px"}}>MRP<span className = "text-decoration-line-through"> ₹{data.price+350}</span><span style = {{fontSize:"15px"}} className = "mx-2">({Math.ceil((350 / (data.price + 350)) * 100)}% OFF)</span> </span></h5>
<div className = "d-flex mt-3">
 <Button onClick = {(e) =>e.stopPropagation()} className = "bg-white text-secondary  custom-button2 " style ={{fontSize:"13px"}}><img src = {cartIcon} width = "20" className = "me-2 mb-1"/>ADD TO BAG</Button>
          
</div>
              
      </Card.Body>
    </Card>
  );
}

export default WishListCard;