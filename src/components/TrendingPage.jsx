import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


import "../styles/trending.css"

function TrendingPage({trendingData}){
   
    return(
            
                <Container className = "my-3 trending-container">
                  <h3>{trendingData[0].paragraph}</h3>
                <h1 className ="mb-4 mt-n5" >{trendingData[0].heading}</h1>
              
                    <Row>
                        {trendingData[1].map((data)=>{
                            return  <Col xs={6} sm={6} md={3} lg={3} key = {data.id} className = "trending-images my-3 ">
                            <Card className="h-100 product-card-container" style={{ height:"100%"}}>
      <Card.Img variant="top" src={data.image} className = "product-image" style={{ height: "400px", objectFit: "cover" }}/>
    {data.name && <Card.Body>
        <Card.Title><h3 style = {{overflow : "hidden",textOverflow : "ellipsis", whiteSpace : "nowrap"}}>{data.name}</h3></Card.Title>
        <Card.Text style = {{overflow : "hidden",textOverflow : "ellipsis", whiteSpace : "nowrap"}} >
        {data.description}
        </Card.Text>
        <Button variant="primary" className = "custom-button">Shop Now</Button>
      </Card.Body>
    }  
    </Card>
                        </Col>
                        })}
                       
                        
                    </Row>
                </Container>
    )
}
export default TrendingPage