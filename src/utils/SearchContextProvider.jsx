
import {SearchContext} from "./SearchContext.jsx"
import {useState, useEffect} from "react"
import { products } from "./mockData.jsx"
import {Searchkeywords} from "./Searchkeywords.jsx"
function SearchContextProvider({children}){
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

         
const handleSearchSuggestions = (data)=>{
 let filteredData = Searchkeywords.filter((arg)=>{
     return arg.toLowerCase().includes(data.toLowerCase())
 })
 setSearchQuery(filteredData)
}
  
useEffect(() => {
  if (searchValue.length === 0) {
    setSearchQuery([]); // clear results when input is empty (optional)
    return;
  }

  const timer = setTimeout(() => {
    const filteredData = Searchkeywords.filter((data) =>
      data.toLowerCase().includes(searchValue.toLowerCase())
    );
    setSearchQuery(filteredData);
  }, 500);

  return () => clearTimeout(timer);
}, [searchValue]);

   

    return(
        <SearchContext.Provider value = {{handleSearchSuggestions,searchQuery,setSearchQuery,searchResult,showQueryResultProducts,searchValue,setSearchResult,products,   setSearchValue}}>
            {children}
        </SearchContext.Provider>
    )
}

export default SearchContextProvider


