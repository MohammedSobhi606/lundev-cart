import React from "react";
import { Link } from "react-router-dom";
import iconCart from "../assets/images/iconCart.png";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../Store/CartSlice";
function ProductCard({ id, name, price, image, description, slug }) {
  const carts = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();
  const handelAddToCart = () => {
    dispatch(addToCart({ id: id, quantity: 1 }));
  };

  return (
    <div className="bg-white p-5 shadow-sm rounded-xl">
      <Link to={slug}>
        <img
          src={image}
          alt={name}
          className="object-cover object-top drop-shadow w-full h-80"
        />
      </Link>
      <h1 className="text-2xl font-medium text-center p-3">{name}</h1>
      <div className="flex justify-between items-center">
        <p className="text-gray-600 text-sm">Price: ${price}</p>
        <button
          onClick={handelAddToCart}
          className="flex items-center justify-center gap-2 bg-gray-300 hover:bg-gray-500 rounded-md p-2"
        >
          <img src={iconCart} alt="" className="w-5" /> add to cart
        </button>
      </div>
    </div>
  );
}

export default ProductCard;
