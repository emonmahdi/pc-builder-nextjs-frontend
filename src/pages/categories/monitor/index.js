import RootLayout from "@/components/Layouts/RootLayout";
import ProductCard from "@/components/UI/ProductCard";
import React from "react";

const MonitorPage = ({ allProducts }) => {
  const monitor =
    allProducts && allProducts?.filter((pro) => pro?.category === "monitor");
  return (
    <div>
      <div className="">
        <h2 className="text-center text-3xl font-bold my-4">All Monitors</h2>
      </div>
      <div className="grid grid-cols-3 gap-4">
        {monitor &&
          monitor?.map((product) => (
            <ProductCard product={product} key={product.id}></ProductCard>
          ))}
      </div>
    </div>
  );
};

export default MonitorPage;

MonitorPage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export const getStaticProps = async () => {
  const res = await fetch(
    "https://pc-builder-server-ochre.vercel.app/products"
  );
  const data = await res.json();
  console.log("Monitor: ", data);

  return {
    props: {
      allProducts: data,
    },
    revalidate: 10,
  };
};
