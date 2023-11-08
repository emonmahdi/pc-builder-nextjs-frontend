/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React from "react";
import { useSession, signOut } from "next-auth/react";

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
            <button className="btn btn-info">Make PC</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
