import Container from "react-bootstrap/Container"
import {useContext} from "react"
import { CategoryFilterContext } from "../utils/CategoryFilterContext"
import "../styles/category.css"

function CategorySlider({categoryData, page}){
    const { handleData} = useContext(CategoryFilterContext)

    return(
        
       <Container fluid>
        <div className ="category-container">
        {categoryData.map((data)=>{

            return <div key = {data.id} onClick = {() =>handleData(page, data)}>
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