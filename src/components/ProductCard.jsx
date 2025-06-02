import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function ProductCard({data}) {
   
  return (
    <Card style={{ width: '19rem',height:"100%" }}>
      <Card.Img variant="top" src={data.image} style = {{height:"400px"}}/>
      <Card.Body>
        <Card.Title><h3>{data.name}</h3></Card.Title>
        <Card.Text>
          {data.description}
        </Card.Text>
        <h3>
          ₹ {data.price} 
        </h3>
        <Button variant="primary">ADD TO CART</Button>
      </Card.Body>
    </Card>
  );
}

export default ProductCard;