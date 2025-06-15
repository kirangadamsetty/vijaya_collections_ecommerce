import CategorySlider from "../components/CategorySlider.jsx"
import {  kidCategory, kidsbanner } from "../utils/mockData"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import ProductCard from "../components/ProductCard.jsx"
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import {useContext, useState} from "react"
import {CategoryFilterContext} from "../utils/CategoryFilterContext"
import HeroBanner from "../components/HeroBanner.jsx"


function KidPage(){
   const { categoryItem, handleCategoryItemKids, handlePrice, kidsData} = useContext(CategoryFilterContext)
   const [sortTitle, setSortTitle] = useState("")
  const handleLow = () =>{
    handlePrice("Low", "kid")
    setSortTitle("Price : Low to High")
  }
  const handleHigh = () =>{
    handlePrice("High", "kid")
    setSortTitle("Price : High to Low")
  }
    return(
        <div>
          <HeroBanner bannerData = {kidsbanner}/>
        <CategorySlider categoryData={kidCategory} page = "kids"/>
        <Container className = "my-4">
        <div className = "d-flex flex-column flex-md-row justify-content-between my-4"> 
 <h1>Men's Collection...</h1>
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
</DropdownButton>
        </div>
      {categoryItem && <h3 className  = "bg-body-secondary" style = {{maxWidth: "fit-content",padding:"8px 15px", borderRadius:"40px", fontSize:"20px", cursor:"pointer"}}>{categoryItem} <span onClick = {handleCategoryItemKids} className = "px-2">x</span></h3>}
    
            <Row> 
                         
                    {kidsData.map((data)=>{

                        return  <Col xs={6} sm={6} md={3} lg={3} key = {data.id} className = "my-3">
                         <ProductCard data = {data}/>
                         </Col>
                    })}
            
            </Row>
        </Container>


        </div>
    )
}
export default KidPage