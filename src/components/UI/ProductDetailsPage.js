/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React from "react";
// import imgPerson from "./../../assets/person.png";

const SingleProductDetailPage = ({ product }) => {
  const {
    id,
    title,
    img,
    price,
    status,
    category,
    rating,
    description,
    key_features,
    reviews,
    individual_rating,
    average_rating,
  } = product;
  return (
    <div className="h-[auto] w-100">
      <div className="hero min-h-screen">
        <div className="hero-content flex-col lg:flex-row">
          <img src={img} className="max-w-sm rounded-lg shadow-2xl w-[50%]" />
          <div className="w-[50%] pl-20">
            <h1 className="text-2xl font-bold">{title}</h1>
            <div className="flex mt-4">
              <div>
                <p className="font-bold">
                  <span className="text-gray-500 font-bold">Price:</span>{" "}
                  {price} ৳
                </p>
              </div>
              <div className="ml-6">
                <p className="font-bold">
                  <span className="text-gray-500 font-bold">Status:</span>{" "}
                  {status}
                </p>
              </div>
              <div className="ml-6">
                <h4 className="font-bold">
                  <span className="text-gray-500 font-bold">Category:</span>{" "}
                  {category}
                </h4>
              </div>
              <div className="ml-6">
                <p className="font-bold">
                  <span className="text-gray-500 font-bold">Brand:</span>{" "}
                  {key_features?.brand}
                </p>
              </div>
            </div>
            {/* <div className="mt-2">
              <h4 className="font-bold">
                <span className="text-gray-500 font-bold">Brand:</span>{" "}
                {key_features?.brand}
              </h4>
            </div> */}
            <div className="mt-4">
              <h3>Key features: </h3>
              <ul className="py-2 px-4">
                <li>
                  <span className="font-bold"> Model:</span>{" "}
                  {key_features?.model}
                </li>
                <li>{key_features?.resolution}</li>
              </ul>
            </div>
            <p className="py-4">{description}</p>

            <p className="py-2">
              <span className="font-bold">Individual Rating:</span>{" "}
              {individual_rating}
            </p>
            <p className="py-2">
              <span className="font-bold">Average Rating:</span>{" "}
              {average_rating}
            </p>
            <p className="py-2">
              <span className="font-bold">Reviews:</span> {reviews}
            </p>
            <button className="btn btn-primary mt-4">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProductDetailPage;
