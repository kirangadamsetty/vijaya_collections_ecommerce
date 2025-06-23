import {useContext, useState} from "react"
import {SearchContext} from "../utils/SearchContext.jsx"
import ProductCard from "../components/ProductCard.jsx"
import Container from "react-bootstrap/Container"
import Form from 'react-bootstrap/Form';
import {useNavigate} from "react-router-dom"
import searchempty from "../assets/searchempty.png"
import Row from "react-bootstrap/Row"
import Button from "react-bootstrap/Button"
import Col from "react-bootstrap/Col"
function SearchInfoPage(){
    const navigate = useNavigate()
      const [showSearchResults, setShowSearchResult] = useState(false)
    
  const { searchResult, searchQuery,setSearchValue,showQueryResultProducts, searchValue} = useContext(SearchContext)
    return(
        <div style = {{marginTop:"150px", marginBottom : "60px"}}>
       {searchResult.length === 0 && (
  <Col md={12} className="d-flex justify-content-center align-items-center" style={{ height: "80dvh" }}>
    <div style={{ width: "350px", textAlign: "center" }}>
      <img src={searchempty} style={{ width: "150px", marginBottom: "20px" }} alt="searchempty" />
      <h3 style = {{fontWeight:"bold"}}>We couldn't find any matches!</h3>
      <p>
      Please check the spelling or try searching something else
      </p>
        <div style={{ position: "relative", maxWidth: "400px" }}>
  <Form className="d-flex mx-3 my-2 my-lg-0" style = {{gap:10}}>
    <div style={{ position: "relative", width: "100%" }}>
      <Form.Control
        type="search"
        placeholder="Search for products..."
        className="me-2"
        aria-label="Search"
        value = {searchValue}
        onChange={(e) => {setSearchValue(e.target.value);setShowSearchResult(!showSearchResults)}}
        style={{ outline: 'none', boxShadow: 'none', width: '100%'  }}
      />

      {/* ✅ Results box positioned below input */}
      <div
        style={{
          position: "absolute",
          top: "100%",
          left: 0,
          width: "100%",
          backgroundColor: "white",
          border: "1px solid #ccc",
          borderRadius: "4px",
          zIndex: 1000,
        }}
      >
      {showSearchResults &&
        searchQuery.slice(0,5).map((data)=>{
            return <p onClick = {()=>{ navigate("/search");setSearchValue(data);showQueryResultProducts();setShowSearchResult(!showSearchResults)}} style={{ margin: 0, padding: "8px" ,cursor:"pointer"}}>🔍 {data}</p>
        })
      }
        
        
      </div>
    </div>

    <Button 
      onClick={() => {
        navigate("/search");
       
        showQueryResultProducts();
      }}
      variant="outline-success"
      className="custom-button"
    >
      Search
    </Button>
  </Form>
</div>

    </div>
  </Col>
)}


{ searchResult.length !== 0 && <Container>
 <h3>Style meets strength.</h3>
   <h1>Recommended for you.</h1>
<Row>
   
       {searchResult.map((data)=>{

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