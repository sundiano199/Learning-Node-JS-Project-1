import React from "react";
import { useState } from "react";
import Navbar2 from "./Navbar2";

//working with array data type
// simulate a cart
// display products in the cart
// calculate the total price in the cart
const products = [
  { id: 1, title: "Jeans", price: 25 },
  { id: 2, title: "Socks", price: 10 },
  { id: 3, title: "Hat", price: 15 },
];

const Cart = () => {
    const handleRemoveItem = (id)=> {
const remaining = cartItems.filter((items)=> items.id !== id);
setCartItems(remaining);
    }


  const [cartItems, setCartItems] = useState([]);
  const totalPrice = cartItems.reduce((acc, item) => acc + item.price, 0);
  if (cartItems.length === 0) {
    return (
      <div className="max-w-2xl mx-auto p-3 my-3 rounded-md shadow-xl">
        <h1 className="text-center text-xl mb-3">Your cart is empty</h1>
        <button
          onClick={() => setCartItems(products)}
          className="bg-blue-500 text-white p-3 rounded-md mx-auto block"
        >
          Shop now
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto p-3 my-3 rounded-md shadow-xl">
        <Navbar2 length={cartItems.length} />
      <div className="bg-white text-black">
        <h1 className="text-2xl">Your Cart</h1>
      </div>
      <div className="flex gap-3 flex-col items-center">
        {cartItems.map((item) => {
          return (
            <div
              key={item.id}
              className="flex justify-between items-center w-full"
            >
                <div className="flex gap-2 ">
                    <button onClick={()=> handleRemoveItem(item.id)} className="text-red-500 cursor-pointer">x</button>
                <h1>{item.title}</h1>
                </div>
              
              <p>${item.price}</p>
            </div>
          );
        })}
        <div className="flex justify-between items-center w-full border border-black">
            <h1>Total Price</h1>
            <p>${totalPrice}</p>
        </div>
      </div>
    </div>
  );
};

export default Cart;
