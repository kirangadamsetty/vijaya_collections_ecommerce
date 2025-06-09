import {WishListContext} from "./WishListContext"
import {useState} from "react"


function WishListContextProvider({children}){
    const [wishList, setWishList] = useState([])
    const handleWishList = (data) =>{
       const ids = wishList.map((li) => li.id)
       if(!ids.includes(data.id)){
           setWishList([...wishList, data])
       }
              
       
    }

    const handleCancelWishList = (data) =>{
        let updatedData = [...wishList]
        let index = updatedData.findIndex((lis) => lis.id === data.id)
        updatedData.splice(index, 1)
        setWishList(updatedData)
    }

    return(
        <WishListContext value  = {{handleWishList, wishList, handleCancelWishList}}>
            {children}
        </WishListContext>
    )
}

export default WishListContextProvider


