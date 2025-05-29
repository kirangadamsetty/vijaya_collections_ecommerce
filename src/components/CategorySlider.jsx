import Container from "react-bootstrap/Container"

import "../styles/category.css"

function CategorySlider({categoryData}){
    return(
        
       <Container fluid>
        <div className ="category-container">
        {categoryData.map((data)=>{

            return <div>
<div className = "category-box">
            <img src = {data.image} alt = "slider-image"/>
        </div>
        <h3 className = "text-center my-3 cate-head">{data.name}</h3>
            </div>
             
        })}
        
            
             
        </div>
       </Container>
    )
}
export default CategorySlider