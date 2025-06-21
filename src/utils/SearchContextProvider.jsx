import { menspagesData } from "./mensPageMockData.jsx"
import { womenspagesData } from "./womensPageMockData.jsx"
import { kidspagesData } from "./kidsPageMockData.jsx"
import {SearchContext} from "./SearchContext.jsx"
import {useState, useEffect} from "react"
function SearchContextProvider({children}){
    const products = [...menspagesData, ...womenspagesData, ...kidspagesData]
    const [searchValue, setSearchValue] = useState("")
    const [searchResult, setSearchResult] = useState([])
    console.log(searchResult)
    const searchSuggestions = [
  // 🔹 Category-Based Keywords
  "Casual Shirts",
  "T-Shirts",
  "Formal Shirts",
  "Hoodies",
  "Jeans",
  "Kurti",
  "Sarees",
  "Dresses",
  "Ethnic Wear",
  "Western Wear",
  "Kids Wear",
  "Party Wear",
  "Traditional Dresses",
  "Fusion Wear",
  "Festive Collection",

  // 🔹 Gender-Specific Keywords
  "T-Shirts for Men",
  "T-Shirts for Women",
  "Girls Dresses",
  "Men's Hoodies",
  "Women Kurtis",
  "Kids Ethnic Wear",

  // 🔹 Seasonal & Use-Case Keywords
  "Summer Collection",
  "Winter Collection",
  "Wedding Outfits",
  "Office Wear",
  "Casual Outfits",
  "College Wear",
  "Nightwear",
  "Street Style",

  // 🔹 Brand-Based Keywords (from your data)
  "Mufti",
  "Roadster",
  "Superdry",
  "Max",
  "Allen Solly",
  "H&M",
  "Puma",
  "Nike",
  "Levi's",
  "Zara",

  // 🔹 Color/Style Keywords
  "Black Hoodie",
  "White Kurti",
  "Blue Jeans",
  "Printed Shirts",
  "Checked Shirts",
  "Graphic Tees",
  "Plain T-Shirts",

  // 🔹 Fabric/Material Keywords
  "Cotton Kurti",
  "Linen Shirts",
  "Silk Saree",
  "Denim Jeans",
]; 
   useEffect(()=>{
     let timer;
     timer = setTimeout(()=>{
        let filteredData =  products.filter((item)=>{
            return(
                [item.name, item.category, item.description].join(" ").toLowerCase().includes(searchValue.toLowerCase())
            )
          })
          setSearchResult(filteredData)
     }, 500)
     return()=>{
         clearTimeout(timer)
     }

   },[searchValue])

    return(
        <SearchContext.Provider value = {{searchResult,products, searchSuggestions, searchValue, setSearchValue}}>
            {children}
        </SearchContext.Provider>
    )
}

export default SearchContextProvider


