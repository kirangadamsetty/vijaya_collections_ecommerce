import {useContext} from "react"
import {SearchContext} from "../utils/SearchContext.jsx"
import ProductCard from "../components/ProductCard.jsx"
import Container from "react-bootstrap/Container"
import Form from 'react-bootstrap/Form';

import searchempty from "../assets/searchempty.png"
import Row from "react-bootstrap/Row"
import Button from "react-bootstrap/Button"
import Col from "react-bootstrap/Col"
function SearchInfoPage(){
    const {products}  = useContext(SearchContext)
    return(
        <div style = {{marginTop:"150px", marginBottom : "60px"}}>
       {products.length !== 0 && (
  <Col md={12} className="d-flex justify-content-center align-items-center" style={{ height: "80dvh" }}>
    <div style={{ width: "350px", textAlign: "center" }}>
      <img src={searchempty} style={{ width: "150px", marginBottom: "20px" }} alt="searchempty" />
      <h3 style = {{fontWeight:"bold"}}>We couldn't find any matches!</h3>
      <p>
      Please check the spelling or try searching something else
      </p>
       <Form className="d-flex mx-3 my-2 my-lg-0">
            <Form.Control
              type="search"
              placeholder="Search for products..."
              className="me-2"
              aria-label="Search"
              style={{ outline: 'none', boxShadow: 'none',width:"100%" }}
            />
            <Button variant="outline-success" className="custom-button">Search</Button>
          </Form>

    </div>
  </Col>
)}
{ products.length===0 && <Container>
 <h3>Style meets strength.</h3>
   <h1>Recommended for you.</h1>
<Row>
   
       {products.map((data)=>{

        return <Col xs={6} sm={6} md={3} lg={3} key={data.id} className="my-3">
         <ProductCard data  ={data}/>
            </Col>
       })}
 
</Row>
    
</Container>}
</div>
    )
}
export default SearchInfoPage