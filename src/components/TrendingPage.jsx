import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import {useNavigate} from "react-router-dom"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


import "../styles/trending.css"

function TrendingPage({trendingData}){
   const navigate  = useNavigate()
    return(
            
                <Container className = "my-1 trending-container">
                  <h3>{trendingData[0].paragraph}</h3>
                <h1 className ="mb-2" >{trendingData[0].heading}</h1>
              
                    <Row>
                        {trendingData[1].map((data)=>{
                            return  <Col onClick = {()=>data.link && navigate(`/${data.link}`)} xs={6} sm={6} md={3} lg={3} key = {data.id} style = {{cursor:"pointer"}} className = "trending-images my-3 ">
                            <Card className="h-100 product-card-container" style={{ height:"100%"}}>
      <Card.Img variant="top" src={data.image} className = "product-image" style={{ height: "400px", objectFit: "cover" }}/>
    {data.name && <Card.Body>
        <Card.Title><h3 style = {{overflow : "hidden",textOverflow : "ellipsis", whiteSpace : "nowrap"}}>{data.name}</h3></Card.Title>
        <Card.Text className = "product-description" style ={{overflow : "hidden",textOverflow : "ellipsis", whiteSpace : "nowrap"}}>
          {data.description}
        </Card.Text>
        <Button className = "bg-white text-secondary   w-100  custom-button2" style ={{fontSize:"13px"}}>Shop now</Button>
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