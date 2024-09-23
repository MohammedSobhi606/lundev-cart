import React from "react";

import Header from "./Header";
import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import CartTap from "./CartTap";
function Layouts() {
  const statusTabCart = useSelector((store) => store.cart.statusTab);
  return (
    <div className="bg-zinc-200">
      <main
        className={`w-[1200px] max-w-full m-auto p-5 transform transition-transform duration-500
        ${statusTabCart === false ? "" : "-translate-x-56"}`}
      >
        <Header />
        <Outlet />
      </main>

      <CartTap />
    </div>
  );
}

export default Layouts;
