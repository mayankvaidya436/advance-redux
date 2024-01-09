import { createSlice } from "@reduxjs/toolkit";

const cartSlice= createSlice({
    name:"cart",
    initialState:{
        items:[],
        totalQuantity:0
    },
    reducers:{
        replaceCart(state,action){
            state.totalQuantity=action.payload.totalQuantity;
            state.items = action.payload.items;},

     addItemToCarthandler(state,action){
     const newItem=action.payload;
     state.totalQuantity++;
     const ExistingItem=state.items.find((item)=>item.id===newItem.id)
     if(!ExistingItem)
     {
       state.items.push({
        id: newItem.id,
        price: newItem.price,
         quantity: 1,
         totalPrice: newItem.price,
          name: newItem.title,
       })
     }
     else{
        ExistingItem.quantity++;
        ExistingItem.totalPrice=ExistingItem.totalPrice + newItem.price
     }
     },
     removeItemToCartHandler(state,action){
       const id=action.payload
       state.totalQuantity--
       const ExistingItem=state.items.find(item=>item.id===id)
       if(ExistingItem.quantity===1)
       {
        state.items=state.items.filter((item)=>item.id!==id)

       }else{
        ExistingItem.quantity--
        ExistingItem.totalPrice=ExistingItem.totalPrice-ExistingItem.price
       }

     }
    }
})
export const {addItemToCarthandler,removeItemToCartHandler,replaceCart}=cartSlice.actions
export default cartSlice