import CategorySlider from "../components/CategorySlider.jsx"
import {  menCategory, menspagebanner } from "../utils/mockData"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import ProductCard from "../components/ProductCard.jsx"
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import {useContext, useState} from "react"
import {CategoryFilterContext} from "../utils/CategoryFilterContext"
import HeroBanner from "../components/HeroBanner.jsx"


function MenPage(){
   const {mensData, categoryItem,handleRating, handleCategoryItemMens, handlePrice} = useContext(CategoryFilterContext)
   const [sortTitle, setSortTitle] = useState("")
  //applied when sort with low to high
   const handleLow = () =>{
    handlePrice("Low", "men")
    setSortTitle("Price : Low to High")
  }
  //applied when sort with high to low
  const handleHigh = () =>{
    handlePrice("High", "men")
    setSortTitle("Price : High to Low")
  }
  const handleProductsRating = () =>{
     handleRating("men")
     setSortTitle("Top Rated")
  }
    return(
        <div>
          <HeroBanner bannerData = {menspagebanner}/>
        <CategorySlider categoryData={menCategory} page = "men"/>
        <Container className = "my-4"> 
        <div className = "d-flex flex-column flex-md-row justify-content-between align-items-md-center  my-4"> 
  <div>
 <h3>Style meets strength.</h3>
 <h1>Men's Collection</h1>
  </div>
 
       <DropdownButton
  id="dropdown-basic-button"
  className="custom-dropdown-btn" 
  title={
    <span className="text-white">
      Sort by <strong className="text-white px-1">{sortTitle}</strong>
      <span className="text-white">&#9660;</span> {/* Added text-white here */}
    </span>
  }
>
  <Dropdown.Item onClick={handleLow}>Price : Low to High</Dropdown.Item>
  <Dropdown.Item onClick={handleHigh}>Price : High to Low</Dropdown.Item>
  <Dropdown.Item onClick = {handleProductsRating}>Top Rated</Dropdown.Item>
</DropdownButton>
        </div>
        {/**when user selected category like tshirt hoddies category item will change and when we pressed x mark onClick function executes */}
      {categoryItem && <h3 className  = "bg-body-secondary" style = {{maxWidth: "fit-content",padding:"8px 15px", borderRadius:"40px", fontSize:"20px", cursor:"pointer"}}>{categoryItem} <span onClick = {handleCategoryItemMens} className = "px-2">x</span></h3>}
    
  
  <Row>
    {mensData.map((data) => (
      <Col xs={6} sm={6} md={4} lg={4} xl={3} key={data.id} className="my-3">
        <ProductCard data={data} />
      </Col>
    ))}
  </Row>

        </Container>


        </div>
    )
}
export default MenPage