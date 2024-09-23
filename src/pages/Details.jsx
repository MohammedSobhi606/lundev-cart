import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { products } from "../products";
import { useDispatch } from "react-redux";
import { addToCart } from "../Store/CartSlice";

function Details() {
  const { slug } = useParams();
  const dispatch = useDispatch();
  const [detail, setDetails] = useState([]);
  const [quantity, setquantity] = useState(1);
  const handelminqua = () => {
    setquantity(quantity - 1);
  };
  const handelplusqua = () => {
    setquantity(quantity + 1);
  };
  const handelAddToCart = () => {
    dispatch(addToCart({ id: detail.id, quantity: quantity }));
  };
  useEffect(() => {
    const findProduct = products.filter((product) => product.slug === slug);
    if (findProduct.length > 0) {
      setDetails(findProduct[0]);
    } else {
      window.location.href = "/";
    }
  }, [slug]);
  return (
    <div>
      <h2 className="text-3xl text-center">PRODUCT DETAIL</h2>
      <div className="grid grid-cols-2 gap-5 mt-5">
        <div>
          <img src={detail.image} alt="" className="w-full" />
        </div>
        <div className="flex flex-col gap-5">
          <h1 className="text-4xl uppercase font-bold">{detail.name}</h1>
          <p className="font-bold text-3xl">${detail.price}</p>
          <div className="flex gap-5">
            <div className="flex gap-2 justify-center items-center">
              <button
                onClick={handelminqua}
                className="bg-gray-100 h-full w-10 font-bold text-xl rounded-xl flex justify-center items-center"
              >
                -
              </button>
              <span className="bg-gray-200 h-full w-10 font-bold text-xl rounded-xl flex justify-center items-center">
                {quantity}
              </span>
              <button
                onClick={handelplusqua}
                className="bg-gray-100 h-full w-10 font-bold text-xl rounded-xl flex justify-center items-center"
              >
                +
              </button>
            </div>
            <button
              onClick={handelAddToCart}
              className="bg-slate-900 text-white px-7 py-3 rounded-xl shadow-2xl"
            >
              Add To Cart
            </button>
          </div>
          <p>{detail.description}</p>
        </div>
      </div>
    </div>
  );
}

export default Details;
