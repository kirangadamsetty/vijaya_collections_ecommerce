import {CartContext} from "./CartContext"
import {useState, useEffect} from "react"
import { products } from "./mockData"

function CartContextProvider({children}){
    const [cartData, setCartData]  = useState(()=>{
     try{
       let storedData = JSON.parse(localStorage.getItem("cartList"))
        return Array.isArray(storedData) ? storedData : []
     }catch(error){
        return []
     }
    })
    const [quantity, setQuantity] = useState("")
    const [cartListRecommended, setCartListRecommended] = useState([])
    const [price, setPrice] = useState({
        totalPrice :null,
        discountPrice:  null,
        priceAfterDiscount  : null,

    })


     useEffect(() => {

    
    const totalPriceResult = cartData.reduce(
      (acc, item) => acc + (item.price + 350) * item.quantity,
      0
    );
    
    const discountPriceResult = cartData.reduce(
        (acc, item) => acc + 350 * item.quantity, 
        0
    )
    const priceAfterDiscountResult = cartData.reduce(
      (acc, item) => acc + item.price * item.quantity,
      0
    );

    setPrice({
      totalPrice: totalPriceResult,
      discountPrice : discountPriceResult,
      priceAfterDiscount: priceAfterDiscountResult,
    });
  }, [cartData]);


useEffect(() => {
  if (cartData.length === 0) {
    setCartListRecommended([]);
    return;
  }

  // Extract all unique categories from the wishlist
  const categoriesInWishlist = [...new Set(cartData.map(item => item.category.toLowerCase()))];
  const categoryId = cartData.map((li)=>li.id)
  // Filter products that match any category in the wishlist
  const filteredData = products.filter(product =>
    categoriesInWishlist.includes(product.category.toLowerCase()) && !categoryId.includes(product.id)
  );

  setCartListRecommended(filteredData);
}, [cartData]);



const handleCartList = (data, size) =>{
  let updatedData = [...cartData]
 let generatedId = `${data.id}-${size}`
 let index = updatedData.findIndex((li)=> li.generatedId === `${data.id}-${size}`)
 if(index === -1){
   updatedData.push({...data, generatedId : generatedId, quantity : 1, selectedSize : size})
 
  }
 else if(index !== -1){
  updatedData[index].quantity = updatedData[index].quantity + 1
  
 }
 setCartData(updatedData)
 localStorage.setItem("cartList", JSON.stringify(updatedData))
}
    
const handleSize = (data, size) =>{
  let updatedData = [...cartData]
  let generatedId = `${data.id}-${size}`
 let index = updatedData.findIndex((li)=>li.generatedId === generatedId)
 if(index === -1){
  let origin = updatedData.findIndex((li)=>li.generatedId === data.generatedId)
updatedData[origin].generatedId = generatedId
  updatedData[origin].selectedSize = size
 }
 else if(index !== -1){
updatedData.splice(index, 1)
 let origin = updatedData.findIndex((li)=>li.generatedId === data.generatedId)
updatedData[origin].generatedId = generatedId
  updatedData[origin].selectedSize = size
 }
 

  
  setCartData(updatedData)
 localStorage.setItem("cartList", JSON.stringify(updatedData))
}
    const handleCartCancel = (data, size) =>{
        let updatedData = [...cartData]
        if(size){
       let index = updatedData.findIndex((lis) => lis.id === data.id && lis.selectedSize === size)
        updatedData.splice(index, 1)
       
      }
      else{
        let index = updatedData.findIndex((lis) => lis.id === data.id && lis.selectedSize)
         updatedData.splice(index, 1)
    
      }
       setCartData(updatedData)
       localStorage.setItem("cartList" , JSON.stringify(updatedData))
       
    }
 
    const handlequantity = (data, quant) =>{
      let updatedData = [...cartData]
       let index = updatedData.findIndex((li)=>li.generatedId === data.generatedId)
       updatedData[index].quantity = quant
       setCartData(updatedData)
       localStorage.setItem("cartList", JSON.stringify(updatedData))
    }




    return(
        <CartContext.Provider value = {{cartListRecommended,quantity,handleSize,  setQuantity,price, handlequantity, cartData, handleCartList, handleCartCancel}}>
            {children}
        </CartContext.Provider>
    )
}
export default CartContextProvider