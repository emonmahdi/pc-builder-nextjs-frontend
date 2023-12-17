/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React from "react";
import ProductCard from "./ProductCard";

const AllProduct = ({ products }) => {
  //   console.log(allProducts);
  return (
    <>
      <div className="px-16">
        <h2 className="text-center text-3xl font-bold my-8">
          Featured <span className="text-[#3AC5FA]">Products</span>
        </h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 px-16">
        {products &&
          products?.map((product) => (
            <ProductCard product={product} key={product?.id}></ProductCard>
          ))}
      </div>
    </>
  );
};

export default AllProduct;
