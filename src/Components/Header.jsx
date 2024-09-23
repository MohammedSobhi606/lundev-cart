import React from "react";
import { Link } from "react-router-dom";
import iconCart from "../assets/images/iconCart.png";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleStatusTab } from "../Store/CartSlice";
function Header() {
  const dispatch = useDispatch();
  const [totalquantity, settotalquantity] = useState(0);
  const carts = useSelector((state) => state.cart.items);
  useEffect(() => {
    let count = 0;

    carts.forEach((item) => (count += item.quantity));
    settotalquantity(count);
  }, [carts]);
  const handleOpenTabCart = () => {
    dispatch(toggleStatusTab());
  };
  return (
    <header className="flex justify-between items-center mb-5 ">
      <Link to="/" className=" text-xl font-semibold ">
        Home
      </Link>
      <div
        onClick={handleOpenTabCart}
        className="w-10 cursor-pointer h-10 relative flex items-center justify-center bg-gray-100 rounded-full"
      >
        <img src={iconCart} alt="" className="w-6" />
        <span
          className="absolute bg-red-500 text-white text-sm flex items-center justify-center rounded-full 
        w-5 h-5 right-2/3 top-1/2
        "
        >
          {totalquantity}
        </span>
      </div>
    </header>
  );
}

export default Header;
