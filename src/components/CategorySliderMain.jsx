import Container from "react-bootstrap/Container"
import {Link} from "react-router-dom"
import "../styles/category.css"

function CategorySliderMain({categoryData}){
    return(
        
       <Container >
        <div className ="category-container">
        {categoryData.map((data)=>{

            return <Link id = {data.id} to = {`/${data.name === "Hand Bags" ? "women" : data.name }`}><div>
<div className = "category-box mx-auto">
            <img src = {data.image} alt = "slider-image"/>
        </div>
        <h3 style = {{overflow : "hidden",textOverflow : "ellipsis", whiteSpace : "nowrap"}} className = "text-center mt-3 cate-head">{data.name}</h3>
            </div>
             </Link>
        })}
        
            
             
        </div>
       </Container>
    )
}
export default CategorySliderMain