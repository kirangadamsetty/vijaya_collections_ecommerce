import {useState} from "react"
import { CategoryFilterContext } from "./CategoryFilterContext"
import { menspagesData } from "./mensPageMockData"
import { womenspagesData } from "./womensPageMockData"
import { kidspagesData } from "./kidsPageMockData"
const CategoryContextProvider = ({children}) =>{
    const [currentPage, setCurrentPage] = useState(null)
    const [categoryItem, setCategoryItem] = useState(null)
    const [kidsData, setKidsData] = useState(kidspagesData)
    const [mensData, setMensData] = useState(menspagesData)
    const [womensData, setWomensData] = useState(womenspagesData)
    const [productDescription, setProductDescrition] = useState([])
    const [productInformationPage, setProductInformationPage] = useState([])
    const [currentSort, setCurrentSort] = useState("")
    const handleData = (page, filterCategory) =>{
         let result1 = filterCategory.category
       setCategoryItem(result1)
       setCurrentPage(page)
        if(page === "men"){

      
       let updatedData = menspagesData.filter((data) =>data.category === result1)
       if(currentSort === "Low"){
        updatedData.sort((data, data2) => data.price -data2.price )
       }else{
         updatedData.sort((data, data2)=> data2.price - data.price)
       }
       setMensData(updatedData)
     
        }
         if(page === "women"){
      
       let updatedData = womenspagesData.filter((data) =>data.category === result1)
       if(currentSort === "Low"){
        updatedData.sort((data, data2) => data.price -data2.price )
       }else if(currentSort === "High"){
         updatedData.sort((data, data2)=> data2.price - data.price)
       }
       setWomensData(updatedData)
        }
       if(page === "kids"){
       
       let updatedData = kidspagesData.filter((data) =>data.category === result1)
       if(currentSort === "Low"){
        updatedData.map((data, data2) => data.price -data2.price )
       }else if(currentSort === "High"){
         updatedData.map((data, data2)=> data2.price - data.price)
       }
       setKidsData(updatedData)
        }
    }

   const handleCategoryItemMens = () =>{
  setCurrentSort(""); // reset sort
    setCategoryItem("")
   let updatedMensData = menspagesData
   setMensData(updatedMensData)
   }
   const handleCategoryItemWomens = () =>{
    setCurrentSort("");
    setCategoryItem("")   
   let updatedWomensData = womenspagesData
    setWomensData(updatedWomensData)
   }
   
   const handleCategoryItemKids = () =>{
    setCurrentSort("");
    setCategoryItem("")  
   let updatedkidsData = kidspagesData   
   setKidsData(updatedkidsData)
   }

   const handlePrice = (data, page) =>{
      setCurrentSort(data)
    if(data === "Low"){
      
     let updatedList;
    switch(page){
        case "men":
           
             updatedList = [...mensData]
             updatedList.sort((item, item2) => item.price - item2.price)
              setMensData(updatedList)
        break;
        case "women":
             
             updatedList = [...womensData]
             updatedList.sort((item, item2) => item.price - item2.price)
             setWomensData(updatedList)
        break;
        case "kid":
            updatedList = [...kidsData]
             updatedList.sort((item, item2) => item.price - item2.price)
             setKidsData(updatedList)
        break;

    }
    }

     if(data === "High"){
      
let updatedList
      switch(page){
        case "men":
           
              updatedList = [...mensData]
updatedList.sort((item, item2) => item.price - item2.price)
      setMensData(updatedList.reverse())

        break;
        case "women":
             
              updatedList = [...womensData]
updatedList.sort((item, item2) => item.price - item2.price)
      setWomensData(updatedList.reverse())

        break;
        case "kid":
             updatedList = [...kidsData]
updatedList.sort((item, item2) => item.price - item2.price)
      setKidsData(updatedList.reverse())

        break;

    }
    } 
}
const handlepageshift  = ()=>{
setCategoryItem("")
}

    return(
        <CategoryFilterContext.Provider value  = {{productInformationPage, setProductInformationPage,productDescription,setProductDescrition, handlePrice,kidsData,womensData, currentPage, handleCategoryItemKids,handleCategoryItemMens,handleCategoryItemWomens,  categoryItem,handleData , mensData,handlepageshift}}>
            {children}
        </CategoryFilterContext.Provider>
    )
}


export default CategoryContextProvider
