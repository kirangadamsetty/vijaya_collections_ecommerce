import {CartContext} from "./CartContext"
import {useState, useEffect} from "react"


function CartContextProvider({children}){
    const [cartData, setCartData]  = useState([])
    const [quantity, setQuantity] = useState("")
    
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
 
}
console.log(cartData)
    const handleCartCancel = (data, size) =>{
        let updatedData = [...cartData]
        if(size){
       let index = updatedData.findIndex((lis) => lis.id === data.id && lis.selectedSize === size)
        updatedData.splice(index, 1)
        setCartData(updatedData)
      }
      else{
        let index = updatedData.findIndex((lis) => lis.id === data.id && lis.selectedSize)
         updatedData.splice(index, 1)
        setCartData(updatedData)
      }
       
    }
 
    const handlequantity = (data, quant) =>{
      let updatedData = [...cartData]
       let index = updatedData.findIndex((li)=>li.generatedId === data.generatedId)
       updatedData[index].quantity = quant
       setCartData(updatedData)
    }

    return(
        <CartContext.Provider value = {{quantity,handleSize,  setQuantity,price, handlequantity, cartData, handleCartList, handleCartCancel}}>
            {children}
        </CartContext.Provider>
    )
}
export default CartContextProvider