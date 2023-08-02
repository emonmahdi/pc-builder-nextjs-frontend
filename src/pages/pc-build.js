"use-client";
import RootLayout from "@/components/Layouts/RootLayout";
import Link from "next/link";
import React from "react";

const PcBuilder = ({ product }) => {
  console.log("this is products: ", product);
  return (
    <div>
      <div className="m-4 md:w-[70%] mx-auto box-border  p-2">
        <div className="grid grid-cols-5">
          <div className="col-start-1 col-span-5 w-full h-auto bg-base-200">
            <div className="md:flex md:justify-between">
              <h3 className="text-1xl p-3 font-semibold my-3">
                PC Builder - Build Your Own Computer - PC Builder BD
              </h3>
              <div>
                <button
                  className={`btn btn-outline border-dashed border-[#42d91c] hover:border-[#42d91c] my-3 mx-1 bg-transparent hover:bg-[#42d91c] hover:text-white`}
                >
                  Completed Build
                </button>
              </div>
            </div>
            <p className=" mt-1 font-semibold bg-[#4c4f4b] p-3 text-white">
              Your Build PC
            </p>
          </div>
        </div>
        <div>
          {/* single category */}
          <div className="flex justify-between items-center my-4 bg-gray-700 p-4 text-light rounded-2xl">
            <li className="list-none capitalize text-xl text-white">
              Processor
            </li>
            <Link href="/categories/processor">
              <button className="btn btn-primary">Choose</button>
            </Link>
          </div>
          {/* single category */}
          <div className="flex justify-between items-center my-4 bg-gray-700 p-4 text-light rounded-2xl">
            <li className="list-none capitalize text-xl text-white">
              Motherboard
            </li>
            <Link href="/categories/motherboard">
              <button className="btn btn-primary">Choose</button>
            </Link>
          </div>
          {/* single category */}
          <div className="flex justify-between items-center my-4 bg-gray-700 p-4 text-light rounded-2xl">
            <li className="list-none capitalize text-xl text-white">Ram</li>
            <Link href="/categories/ram">
              <button className="btn btn-primary">Choose</button>
            </Link>
          </div>
          {/* single category */}
          <div className="flex justify-between items-center my-4 bg-gray-700 p-4 text-light rounded-2xl">
            <li className="list-none capitalize text-xl text-white">
              Power Supply Unit
            </li>
            <Link href="/categories/power-supply-unit">
              <button className="btn btn-primary">Choose</button>
            </Link>
          </div>
          {/* single category */}
          <div className="flex justify-between items-center my-4 bg-gray-700 p-4 text-light rounded-2xl">
            <li className="list-none capitalize text-xl text-white">
              Storage Device
            </li>
            <Link href="/categories/storage-device">
              <button className="btn btn-primary">Choose</button>
            </Link>
          </div>
          {/* single category */}
          <div className="flex justify-between items-center my-4 bg-gray-700 p-4 text-light rounded-2xl">
            <li className="list-none capitalize text-xl text-white">Monitor</li>
            <Link href="/categories/monitor">
              <button className="btn btn-primary">Choose</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PcBuilder;

PcBuilder.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export const getServerSideProps = async () => {
  const res = await fetch(
    "https://pc-builder-server-ochre.vercel.app/products"
  );
  const data = await res.json();
  return { props: { product: data } };
};
