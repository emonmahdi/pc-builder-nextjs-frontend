import React from "react";
import Link from "next/link";
import { useAppSelector } from "@/redux/hook";
import img from "../assets/banner.jpg";
import Image from "next/image";

const TestPc = ({ product }) => {
  const { products } = useAppSelector((state) => state.cart);

  const x = products.map((product) => "");

  const notify = () => {
    toast.success("Successfully Build! Request ");
  };
  return (
    <div>
      <div className="flex justify-between items-center my-4 bg-gray-200 p-4 text-light rounded-2xl">
        <div className="w-50 mx-auto">
          <li className="list-none capitalize text-xl text-black">Processor</li>
        </div>
        <div className="w-50 mx-auto">
          <>
            <div className="flex items-center">
              <div>
                <Image src={img} className="w-[50px]" alt="" />
              </div>
              <div className="text-white ml-4">
                <p>Pentium Processor</p>
                <p className="text-xl font-semibold">3000 ৳</p>
              </div>
            </div>
          </>
        </div>
        <div>
          <Link
            href="/categories/monitor"
            className={`btn ${
              products.find((pro) => pro.category === "monitor") ? "hidden" : ""
            }`}
            style={{
              background: "rgb(101,80,219)",
              background:
                "linear-gradient(0deg, rgba(101,80,219,1) 2%, rgba(131,47,149,1) 100%)",
              marginRight: "6px",
              color: "#fff",
              padding: "12px 20px",
              border: "none",
              borderRadius: "6px",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-evenly",
              fontWeight: "bold",
            }}
          >
            <span style={{ paddingRight: "6px", paddingTop: "2px" }}>
              <span>icons</span>
            </span>{" "}
            <span>Choose</span>
            {/* <button
                  className={`btn btn-primary ${
                    products.find((pro) => pro.category === "monitor")
                      ? "btn-disabled"
                      : ""
                  }`}
                  style={{}}
                >
                  Choose
                </button> */}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TestPc;
