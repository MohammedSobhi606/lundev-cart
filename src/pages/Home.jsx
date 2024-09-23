import React from "react";
import { products } from "../products";
import ProductCard from "../Components/ProductCard";
function Home() {
  return (
    <div>
      <h1 className="text-3xl font-semibold">Product List </h1>,
      <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-5">
        {" "}
        {products.map((product) => (
          <ProductCard
            key={product.id}
            name={product.name}
            id={product.id}
            description={product.description}
            slug={product.slug}
            image={product.image}
            price={product.price}
          />
        ))}
      </div>
    </div>
  );
}

export default Home;
