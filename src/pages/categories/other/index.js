import RootLayout from "@/components/Layouts/RootLayout";
import ProductCard from "@/components/UI/ProductCard";
import React from "react";

const OtherPage = ({ allProducts }) => {
  const other =
    allProducts && allProducts?.filter((pro) => pro?.category === "others");
  return (
    <div className="px-16">
      <div className="">
        <h2 className="text-center text-3xl font-bold my-4">All Monitors</h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {other &&
          other?.map((product) => (
            <ProductCard product={product} key={product.id}></ProductCard>
          ))}
      </div>
    </div>
  );
};

export default OtherPage;

OtherPage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export const getStaticProps = async () => {
  const res = await fetch(
    "https://pc-builder-server-ochre.vercel.app/products"
  );
  const data = await res.json();
  // console.log("Monitor: ", data);

  return {
    props: {
      allProducts: data,
    },
    revalidate: 10,
  };
};
