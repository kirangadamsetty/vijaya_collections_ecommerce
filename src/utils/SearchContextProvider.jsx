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
    

 const showQueryResultProducts = () => {
  const keywords = searchQuery.map(word => word.toLowerCase());

  const filteredData = products.filter((data) => {
    const haystack = [
      data.name,
      data.category,
      data.description,
      data.detailedDescription,
      ...(data.search_keywords || [])
    ]
    .join(" ")
    .toLowerCase();

    // Check if ALL keywords exist
    return keywords.some(keyword => haystack.includes(keyword));
  });

  setSearchResult(filteredData);
};

         
    
  

useEffect(()=>{
    let timer;
     timer = setTimeout(()=>{
        let filteredData = Searchkeywords.filter((data)=>{
         return data.toLowerCase().includes(searchValue.toLowerCase())
    })
    setSearchQuery(filteredData)
    },500)
    
    return () =>{
        clearTimeout(timer)
    }
},[searchValue])
   

    return(
        <SearchContext.Provider value = {{searchQuery,setSearchQuery,searchResult,showQueryResultProducts,searchValue,setSearchResult,products,   setSearchValue}}>
            {children}
        </SearchContext.Provider>
    )
}

export default SearchContextProvider


