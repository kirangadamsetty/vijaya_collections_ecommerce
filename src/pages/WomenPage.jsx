import CategorySlider from "../components/CategorySlider.jsx"
import OffersBand from "../components/OffersBand.jsx"
import { homebanner, womenCategory } from "../utils/mockData"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import ProductCard from "../components/ProductCard.jsx"
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import {useContext, useState} from "react"
import {CategoryFilterContext} from "../utils/CategoryFilterContext"
import HeroBanner from "../components/HeroBanner.jsx"

function WomenPage(){
   const {womensData, categoryItem, handleCategoryItem, handlePrice} = useContext(CategoryFilterContext)
   const [sortTitle, setSortTitle] = useState("")
  const handleLow = () =>{
    handlePrice("Low")
    setSortTitle("Price : Low to High")
  }
  const handleHigh = () =>{
    handlePrice("High")
    setSortTitle("Price : High to Low")
  }
    return(
        <>
         <HeroBanner bannerData = {homebanner}/>
        <CategorySlider categoryData={womenCategory} page = "women"/>
        <Container className = "my-4">
        <div className = "d-flex justify-content-between align-items-center my-4"> 
 <h1>Women's Collection...</h1>
          <DropdownButton id="dropdown-basic-button" className = "button"  title={<span className = "text-white">Sort by <strong  className = "text-white px-2">{sortTitle}</strong></span>}>
      <Dropdown.Item onClick = {handleLow}>Price : Low to High</Dropdown.Item>
      <Dropdown.Item onClick = {handleHigh} >Price : High to Low</Dropdown.Item>
    </DropdownButton>
        </div>
      {categoryItem && <h3 className  = "bg-body-secondary" style = {{maxWidth: "fit-content",padding:"8px 15px", borderRadius:"40px", fontSize:"20px", cursor:"pointer"}}>{categoryItem} <span onClick = {handleCategoryItem} className = "px-2">x</span></h3>}
    
            <Row> 
                         
                    {womensData.map((data)=>{

                        return  <Col md={3} key = {data.id} className = "my-3">
                         <ProductCard data = {data}/>
                         </Col>
                    })}
            
            </Row>
        </Container>

<OffersBand />

        </>
    )
}
export default WomenPage