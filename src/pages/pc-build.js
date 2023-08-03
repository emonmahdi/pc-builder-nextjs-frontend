"use-client";
import RootLayout from "@/components/Layouts/RootLayout";
import { useAppSelector } from "@/redux/hook";
import Link from "next/link";
import React, { useEffect } from "react";
import { useState } from "react";

const PcBuilder = ({ product }) => {
  const { products } = useAppSelector((state) => state.cart);

  const [filteredProducts, setFilteredProducts] = useState();

  const { addToBuild } = useAppSelector((state) => state.addToBuild);

  const handelAddToBuilder = () => {};
  useEffect(() => {
    setFilteredProducts(
      products.filter(
        (product) =>
          (product.category === "monitor") |
          "motherboard" |
          "power-supply-uni" |
          "ram" |
          "processor" |
          "storage-device"
      )
    );
  }, [products]);

  const matchedCategory = product.map((pro) => pro.category);

  console.log(
    "this is server products",
    matchedCategory.filter((m) => console.log(m))
  );

  const filterPro = matchedCategory.filter((m) => {
    return m;
  });

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
            {/* <p>
              {products?.map((pro) => (
                <>
                  <p>{pro?.title}</p>
                </>
              ))}
            </p> */}
          </div>
        </div>
        <div>
          {/* single category */}
          <div className="flex justify-between items-center my-4 bg-gray-700 p-4 text-light rounded-2xl">
            <div>
              <li className="list-none capitalize text-xl text-white">
                Processor
              </li>
            </div>
            <div>
              {/* {products?.map((pro) =>
                pro?.category === matchedCategory?.map((ma) => ma?.category) ? (
                  <>{pro.title}</>
                ) : null
              )} */}
              {products.map((pro) =>
                pro.category === "processor" ? (
                  <>
                    <div className="flex items-center">
                      <img src={pro?.img} className="w-[50px]" alt="" />
                      <p className="text-white ml-2">{pro.title}</p>
                    </div>
                  </>
                ) : (
                  ""
                )
              )}
            </div>
            <div>
              <Link href="/categories/processor">
                <button
                  className={`btn btn-primary ${
                    products.find((pro) => pro.category === "processor")
                      ? "btn-disabled"
                      : ""
                  }`}
                >
                  Choose
                </button>
              </Link>
              {/* {products.map((pro) =>
                pro.category === "processor" ? (
                  <>
                    <button className="btn" disabled="disabled">
                      Choose disabled
                    </button>
                  </>
                ) : (
                  <></>
                )
              )} */}
            </div>
          </div>
          {/* single category */}
          <div className="flex justify-between items-center my-4 bg-gray-700 p-4 text-light rounded-2xl">
            <div>
              <li className="list-none capitalize text-xl text-white">
                Motherboard
              </li>
            </div>
            <div>
              {products.map((pro) =>
                pro.category === "motherboard" ? (
                  <>
                    <div className="flex items-center">
                      <img src={pro?.img} className="w-[50px]" alt="" />
                      <p className="text-white ml-2">{pro.title}</p>
                    </div>
                  </>
                ) : (
                  ""
                )
              )}
            </div>
            <div>
              <Link href="/categories/motherboard">
                <button
                  className={`btn btn-primary ${
                    products.find((pro) => pro.category === "motherboard")
                      ? "btn-disabled"
                      : ""
                  }`}
                >
                  Choose
                </button>
              </Link>
            </div>
          </div>
          {/* single category */}
          <div className="flex justify-between items-center my-4 bg-gray-700 p-4 text-light rounded-2xl">
            <div>
              {" "}
              <li className="list-none capitalize text-xl text-white">Ram</li>
            </div>
            <div>
              {products.map((pro) =>
                pro.category === "ram" ? (
                  <>
                    <div className="flex items-center">
                      <img src={pro?.img} className="w-[50px]" alt="" />
                      <p className="text-white ml-2">{pro.title}</p>
                    </div>
                  </>
                ) : (
                  ""
                )
              )}
            </div>
            <div>
              <Link href="/categories/ram">
                <button
                  className={`btn btn-primary ${
                    products.find((pro) => pro.category === "ram")
                      ? "btn-disabled"
                      : ""
                  }`}
                >
                  Choose
                </button>
              </Link>
            </div>
          </div>
          {/* single category */}
          <div className="flex justify-between items-center my-4 bg-gray-700 p-4 text-light rounded-2xl">
            <div>
              <li className="list-none capitalize text-xl text-white">
                Power Supply Unit
              </li>
            </div>
            <div>
              {products.map((pro) =>
                pro.category === "power-supply-unit" ? (
                  <>
                    <div className="flex items-center">
                      <img src={pro?.img} className="w-[50px]" alt="" />
                      <p className="text-white ml-2">{pro.title}</p>
                    </div>
                  </>
                ) : (
                  ""
                )
              )}
            </div>
            <div>
              <Link href="/categories/power-supply-unit">
                <button
                  className={`btn btn-primary ${
                    products.find((pro) => pro.category === "power-supply-unit")
                      ? "btn-disabled"
                      : ""
                  }`}
                >
                  Choose
                </button>
              </Link>
            </div>
          </div>
          {/* single category */}
          <div className="flex justify-between items-center my-4 bg-gray-700 p-4 text-light rounded-2xl">
            <div>
              <li className="list-none capitalize text-xl text-white">
                Storage Device
              </li>
            </div>
            <div>
              {products.map((pro) =>
                pro.category === "storage-device" ? (
                  <>
                    <div className="flex items-center">
                      <img src={pro?.img} className="w-[50px]" alt="" />
                      <p className="text-white ml-2">{pro.title}</p>
                    </div>
                  </>
                ) : (
                  ""
                )
              )}
            </div>
            <div>
              <Link href="/categories/storage-device">
                <button
                  className={`btn btn-primary ${
                    products.find((pro) => pro.category === "storage-device")
                      ? "btn-disabled"
                      : ""
                  }`}
                >
                  Choose
                </button>
              </Link>
            </div>
          </div>
          {/* single category */}
          <div className="flex justify-between items-center my-4 bg-gray-700 p-4 text-light rounded-2xl">
            <div>
              {" "}
              <li className="list-none capitalize text-xl text-white">
                Monitor
              </li>
            </div>
            <div>
              {products.map((pro) =>
                pro.category === "monitor" ? (
                  <>
                    <div className="flex items-center">
                      <img src={pro?.img} className="w-[50px]" alt="" />
                      <p className="text-white ml-2">{pro.title}</p>
                    </div>
                  </>
                ) : (
                  ""
                )
              )}
            </div>
            <div>
              <Link href="/categories/monitor">
                <button
                  className={`btn btn-primary ${
                    products.find((pro) => pro.category === "monitor")
                      ? "btn-disabled"
                      : ""
                  }`}
                >
                  Choose
                </button>
              </Link>
            </div>
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
