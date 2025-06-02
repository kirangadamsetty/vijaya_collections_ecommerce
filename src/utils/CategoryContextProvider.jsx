import {useState} from "react"
import { CategoryFilterContext } from "./CategoryFilterContext"
import { menspagesData } from "./mensPageMockData"
import { womenspagesData } from "./womensPageMockData"
const CategoryContextProvider = ({children}) =>{
    const [currentPage, setCurrentPage] = useState(null)
    const [categoryItem, setCategoryItem] = useState(null)
    const [mensData, setMensData] = useState(menspagesData)
    const [womensData, setWomensData] = useState(womenspagesData)
    const handleData = (page, filterCategory) =>{
        if(page === "men"){
       let result1 = filterCategory.category
       setCategoryItem(result1)
       setCurrentPage(page)
       let updatedData = menspagesData.filter((data) =>data.category === result1)
       setMensData(updatedData)
        }
         if(page === "women"){
       let result1 = filterCategory.category
       setCategoryItem(result1)
       setCurrentPage(page)
       let updatedData = womenspagesData.filter((data) =>data.category === result1)
       setWomensData(updatedData)
        }
       
    }

   const handleCategoryItem = () =>{
    setCategoryItem("")
   let updatedData = menspagesData
   setMensData(updatedData)
   }

   const handlePrice = (data) =>{
    if(data === "Low"){
const updatedList = [...mensData]
 updatedList.sort((item, item2) => item.price - item2.price)
      setMensData(updatedList)
      setWomensData(updatedList)
    }

     if(data === "High"){
const updatedList = [...mensData]
mensData.sort((item, item2) => item.price - item2.price)
      setMensData(updatedList.reverse())
      setWomensData(updatedList.reverse())
    } 
}


    return(
        <CategoryFilterContext value  = {{handlePrice,womensData, currentPage, handleCategoryItem,  categoryItem,handleData , mensData}}>
            {children}
        </CategoryFilterContext>
    )
}


export default CategoryContextProvider
