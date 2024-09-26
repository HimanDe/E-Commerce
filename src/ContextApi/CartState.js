import React, { useState } from 'react'
import cartConstext from './CartContext'
import { toast } from 'react-toastify';

const CartState = (props) => {
    const [cartArr, setcartArr] = useState([]);
    const HandelAddtoCart = (ele)=>{
      let checkCartItem = cartArr.find((product)=>ele.id===product.id)
      if(checkCartItem){
        toast.warn('item alerdy add in cart!', {
          position: "top-center",
          theme: "dark",
          });
      }
      else{
        let updateObj = {...ele, quantity:1}
        let copyCartArr = [...cartArr, updateObj]
        setcartArr(copyCartArr)
        toast.success('🦄 item added successfully!', {
          position: "top-center",
          theme: "dark",
          });
        
      }
    }
    const HandelRemovetoCart = (ele, i)=>{
      console.log('runing')
      let copyArr = [...cartArr]
      copyArr.splice(i, 1)
      setcartArr(copyArr)
      toast.warn(`${ele.title} remove to cart`, {
        position: "top-center",
        theme: "colored",
        });
    }
  return (
    <cartConstext.Provider value={{cartArr, setcartArr, HandelAddtoCart, HandelRemovetoCart}}>
      {props.children}
    </cartConstext.Provider>
  )
}

export default CartState
