import {WishListContext} from "./WishListContext"
import {useState,useEffect} from "react"
import { products } from "./mockData"

function WishListContextProvider({children}){
    const [wishList, setWishList] = useState([])
    
    const [wishListRecommended, setWishListRecommended] = useState([])
   
    const handleWishList = (data) =>{
       const ids = wishList.map((li) => li.id)
       if(!ids.includes(data.id)){
           setWishList([...wishList, data])
       }
                     
    }
    
  useEffect(() => {
  if (wishList.length === 0) {
    setWishListRecommended([]);
    return;
  }

  // Extract all unique categories from the wishlist
  const categoriesInWishlist = [...new Set(wishList.map(item => item.category.toLowerCase()))];
  const categoryId = wishList.map((li)=>li.id)
  // Filter products that match any category in the wishlist
  const filteredData = products.filter(product =>
    categoriesInWishlist.includes(product.category.toLowerCase()) && !categoryId.includes(product.id)
  );

  setWishListRecommended(filteredData);
}, [wishList]);


  

    const handleCancelWishList = (data) =>{
        let updatedData = [...wishList]
        let index = updatedData.findIndex((lis) => lis.id === data.id)
        updatedData.splice(index, 1)
        setWishList(updatedData)
    }

    return(
        <WishListContext.Provider value  = {{wishListRecommended,handleWishList, wishList, handleCancelWishList}}>
            {children}
        </WishListContext.Provider>
    )
}

export default WishListContextProvider


