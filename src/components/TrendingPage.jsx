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
                            return  <Col md={3} key = {data.id} className = "trending-images my-3 ">
                            <Card style={{ width: '19rem', height:"100%"}}>
      <Card.Img variant="top" src={data.image} style = {{height:"400px"}}/>
    {data.name && <Card.Body>
        <Card.Title><h3>{data.name}</h3></Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Shop Now</Button>
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