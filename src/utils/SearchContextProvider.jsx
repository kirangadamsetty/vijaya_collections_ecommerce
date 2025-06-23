import { menspagesData } from "./mensPageMockData.jsx"
import { womenspagesData } from "./womensPageMockData.jsx"
import { kidspagesData } from "./kidsPageMockData.jsx"
import {SearchContext} from "./SearchContext.jsx"
import {useState, useEffect} from "react"
import {Searchkeywords} from "./Searchkeywords.jsx"
function SearchContextProvider({children}){
    const products = [...menspagesData, ...womenspagesData, ...kidspagesData]
    const [searchValue, setSearchValue] = useState("")
    const [searchResult, setSearchResult] = useState([])
    const [searchQuery, setSearchQuery] = useState([])
    

  const showQueryResultProducts = () =>{
  let filteredData =  products.filter((item)=>{
             const combinedString = [item.name,item.detailedDescription, item.category, item.description, ...item.search_keywords].join(" ").toLowerCase();
             const searchTerms = searchValue.toLowerCase().split(' ').filter(term => term.length > 0); // Split by space and remove empty strings

             // Check if ALL search terms are present in the combined string
             const allTermsMatch = searchTerms.every(term => combinedString.includes(term));

             return allTermsMatch;
           })


           setSearchResult(filteredData)
  }
         
    
  

useEffect(()=>{
    let timer;
     timer = setTimeout(()=>{
        let filteredData = Searchkeywords.filter((data)=>{
         return data.toLowerCase().includes(searchValue.toLowerCase())
    })
    setSearchQuery(filteredData)
    },1000)
    
    return () =>{
        clearTimeout(timer)
    }
},[searchValue])
   
console.log(searchQuery)
    return(
        <SearchContext.Provider value = {{searchResult,showQueryResultProducts,searchValue,setSearchResult,products,  searchValue, setSearchValue}}>
            {children}
        </SearchContext.Provider>
    )
}

export default SearchContextProvider


