/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React from "react";

const Banner = () => {
  return (
    <div>
      <div className="hero min-h-screen bg-yellow-400">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src={"https://i.ibb.co/PFLgTCq/bg-re.png"}
            className="max-w-sm rounded-lg shadow-2xl w-[50%]"
          />
          <div className="w-[50%]">
            <h1 className="text-5xl font-bold -z-20 relative">
              Welcome to Our PC Builder Shop
            </h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <button className="btn btn-primary">Make PC</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
