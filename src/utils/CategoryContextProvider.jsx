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

    //this function used for sliders to changes the products according to the user selection 
    const handleData = (page, filterCategory) =>{
         let result1 = filterCategory.category
       setCategoryItem(result1)
       setCurrentPage(page)
       let updatedData;
       switch(page){
        case "men":
          updatedData = [...menspagesData]
          break;
          case "women":
            updatedData = [...womenspagesData]
            break;
            case "kids":
              updatedData =[...kidspagesData]
              break;
       }
     let filteredData =  updatedData.filter((data)=>data.category === result1)
       if(currentSort === "Low"){
        filteredData.sort((data, data2) => data.price -data2.price )
       }else if(currentSort === "High"){
         filteredData.sort((data, data2)=> data2.price - data.price)
       }else if(currentSort === "TopRating"){
        filteredData.sort((data1, data2)=>data2.averageRating - data1.averageRating)
       }
      

        switch(page){
        case "men":
           setMensData(filteredData)
          break;
          case "women":
             setWomensData(filteredData)
            break;
            case "kids":
              setKidsData(filteredData)
              break;
       }
    
        
    }
//function will called when user removed the selected categoty like tshirts or hoddies in certain pages
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
    // here we are sorting data according to price by taking page and sort price
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

const handleRating = (page) =>{
  //setCurrentSort help us in handleData() when user in slider change the category it will get filtered according to the currentsort
  setCurrentSort("TopRating")
  let updatedData;
  switch(page){
        case "men":
          updatedData = [...mensData]
          break;
          case "women":
            updatedData = [...womensData]
            break;
            case "kids":
              updatedData =[...kidsData]
              break;
       }
  
  
       updatedData.sort((data1, data2)=>data1.averageRating - data2.averageRating)
      updatedData.reverse()
  
  setKidsData(updatedData)
  switch(page){
        case "men":
          setMensData(updatedData)
          break;
          case "women":
           setWomensData(updatedData)
            break;
            case "kids":
            setKidsData(updatedData)
              break;
       }
}

const handlepageshift  = ()=>{
  //while user shifting the page selected category will become  empty
setCategoryItem("")
}

    return(
        <CategoryFilterContext.Provider value  = {{handleRating,productInformationPage, setProductInformationPage,productDescription,setProductDescrition, handlePrice,kidsData,womensData, currentPage, handleCategoryItemKids,handleCategoryItemMens,handleCategoryItemWomens,  categoryItem,handleData , mensData,handlepageshift}}>
            {children}
        </CategoryFilterContext.Provider>
    )
}


export default CategoryContextProvider
