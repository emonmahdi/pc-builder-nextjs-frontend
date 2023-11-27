/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";
import { useSession, signOut } from "next-auth/react";
import { FaDesktop } from "react-icons/fa";

const Banner = () => {
  const { data: session } = useSession();
  return (
    <div className="banner-section">
      <div className="hero min-h-screen lg:px-10">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src={"https://i.ibb.co/PFLgTCq/bg-re.png"}
            className="max-w-sm rounded-lg  w-[90%] lg:w-[50%] mx-auto lg:mx-0 lg:ml-8"
          />
          <div className="w-full lg:w-[75%] mx-auto lg:mx-0">
            <h1 className="text-2xl xs:text-xs lg:text-5xl font-bold -z-20 relative">
              Welcome to Our PC Builder Shop -{" "}
              <span>{session?.user?.name}</span>
            </h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
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
        </div>
      </div>
    </div>
  );
};

export default Banner;
