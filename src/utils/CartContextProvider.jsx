import {CartContext} from "./CartContext"
import {useState, useEffect} from "react"


function CartContextProvider({children}){
    const [cartData, setCartData]  = useState([])
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
  let index = updatedData.findIndex((li)=>li.id === data.id)

  if(index !== -1){
    if(size){
      let including = {...data, quantity : 1, selectedSize : size}
      updatedData[index] = including
      
    } 
   
  }else if(index === -1){
      updatedData = [...cartData, {...data ,quantity:1, selectedSize : size}]
    }
   
              
       setCartData(updatedData)
    }
    


    const handleCartCancel = (data) =>{
        let updatedData = [...cartData]
        let index = updatedData.findIndex((lis) => lis.id === data.id)
        updatedData.splice(index, 1)
        setCartData(updatedData)
    }
 
    const handlequantity = (data, quant) =>{
      let updatedData = [...cartData]
      let index = updatedData.findIndex((li)=> li.id === data.id)
      updatedData[index].quantity = quant
      setCartData(updatedData)
    }

    return(
        <CartContext.Provider value = {{price, handlequantity, cartData, handleCartList, handleCartCancel}}>
            {children}
        </CartContext.Provider>
    )
}
export default CartContextProvider