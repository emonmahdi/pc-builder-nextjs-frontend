/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";
import { useSession, signOut } from "next-auth/react";
import { FaDesktop } from "react-icons/fa";

const Banner = () => {
  const { data: session } = useSession();
  return (
    <>
      {/* ============== */}
      <div className="flex flex-col md:flex-row items-center md:justify-between p-4 md:p-8 bg-gray-50 mx-auto py-12 lg:h-screen">
        <div className="md:w-1/2 text-center md:text-left mb-4 md:mb-0 px-12">
          <h1 className="text-2xl xs:text-xs lg:text-4xl font-bold">
            Welcome to Our PC Builder Shop - <span>{session?.user?.name}</span>
          </h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          {/* <MyButton>MAKE PC</MyButton> */}
          <Link
            href="/pc-build"
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
              fontWeight: "bold",
              width: "180px",
              justifyContent: "center",
            }}
          >
            <span style={{ paddingRight: "6px", paddingTop: "2px" }}>
              <FaDesktop />
            </span>{" "}
            <span>MAKE PC</span>
          </Link>
        </div>
        <div className="md:w-1/2 block mx-auto px-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-2">
            <img
              src="https://i.ibb.co/w6nhGH7/s700-228x228.jpg"
              alt="Slider Image"
              className="max-w-sm rounded-lg w-[40%] lg:w-[100%] mx-auto lg:mx-0 lg:ml-8 h-auto md:h-full object-cover"
            />
            <img
              src="https://i.ibb.co/G5vfPs2/GIGABYTE-GA-J1800-M-D3-P-1-228x228.jpg"
              alt="Slider Image"
              className="max-w-sm rounded-lg w-[40%] lg:w-[100%] mx-auto lg:mx-0 lg:ml-8 h-auto md:h-full object-cover"
            />
            <img
              src="https://i.ibb.co/LvGRdt6/kb080-01-228x228.jpg"
              alt="Slider Image"
              className="max-w-sm rounded-lg w-[40%] lg:w-[100%] mx-auto lg:mx-0 lg:ml-8 h-auto md:h-full object-cover"
            />
            <img
              src="https://i.ibb.co/mRhhxdm/mg-wc05nc3-02-500x500.webp"
              alt="Slider Image"
              className="max-w-sm rounded-lg w-[40%] lg:w-[100%] mx-auto lg:mx-0 lg:ml-8 h-auto md:h-full object-cover"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
