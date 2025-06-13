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
  console.log(price)
const handleCartList = (data) =>{
       const ids = cartData.map((li) => li.id)
       if(!ids.includes(data.id)){
           let including = {...data, quantity : 1}
           setCartData([...cartData, including])
       }
              
       
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