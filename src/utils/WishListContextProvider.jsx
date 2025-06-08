import {WishListContext} from "./WishListContext"
import {useState} from "react"


function WishListContextProvider({children}){
    const [wishList, setWishList] = useState([])
    const handleWishList = (data) =>{
        setWishList([...wishList, data])
    }
    return(
        <WishListContext value  = {{handleWishList, wishList}}>
            {children}
        </WishListContext>
    )
}

export default WishListContextProvider


