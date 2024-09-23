import React, { useState, useEffect } from "react";
import { products } from "../products";
import { useDispatch } from "react-redux";
import { changeQuantity } from "../Store/CartSlice";

const CartItem = (props) => {
  const { id, quantity } = props.data;

  const [detail, setDetail] = useState([]);
  const dispatch = useDispatch();
  useEffect(() => {
    const findDetail = products.filter((product) => product.id === id)[0];
    setDetail(findDetail);
  }, [id]);
  const handleMinusQuantity = (id) => {
    dispatch(
      changeQuantity({
        id: id,
        quantity: quantity - 1,
      })
    );
  };
  const handlePlusQuantity = (id) => {
    dispatch(
      changeQuantity({
        id: id,
        quantity: quantity + 1,
      })
    );
  };
  return (
    <div className="flex justify-between items-center bg-slate-600 text-white p-2 border-b-2 border-slate-700 gap-5 rounded-md">
      <img src={detail.image} alt="" className="w-12" />
      <h3>{detail.name}</h3>
      <p>${detail.price * quantity}</p>
      <div className="w-20 flex justify-between gap-2">
        <button
          className="bg-gray-200 rounded-full w-6 h-6 text-cyan-600"
          onClick={() => handleMinusQuantity(detail.id)}
        >
          -
        </button>
        <span>{quantity}</span>
        <button
          className="bg-gray-200 rounded-full w-6 h-6 text-cyan-600"
          onClick={() => handlePlusQuantity(detail.id)}
        >
          +
        </button>
      </div>
    </div>
  );
};

export default CartItem;
