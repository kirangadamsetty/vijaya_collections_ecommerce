import {useContext} from "react"
import {SearchContext} from "../utils/SearchContext.jsx"
import ProductCard from "../components/ProductCard.jsx"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
function SearchInfoPage(){
    const {products}  = useContext(SearchContext)
    return(
        <div style = {{marginTop:"150px", marginBottom : "60px"}}>
        
<Container>
<h3>Style meets strength.</h3>
 <h1>Recommended for you.</h1>
<Row>
   
       {products.map((data)=>{

        return <Col xs={6} sm={6} md={3} lg={3} key={data.id} className="my-3">
         <ProductCard data  ={data}/>
            </Col>
       })}
 
</Row>
    
</Container>
</div>
    )
}
export default SearchInfoPage