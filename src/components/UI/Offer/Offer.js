import React from "react";
import bgImg from "../../../assets/setup.jpg";
import Link from "next/link";
import { FaDesktop } from "react-icons/fa";

const Offer = () => {
  return (
    <div
      style={{
        background: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://i.ibb.co/G2QM2J7/setup.jpg')`,
        height: "300px",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
      className="offer-section text-center text-white"
    >
      <div>
        <h2 className="text-4xl mb-2 font-bold">
          Make a Personal And Professional Computer
        </h2>

        <p>Get your Offer</p>
        <button className="border-0 bg-white p-4 rounded-lg my-4 text-black">
          Make Computer
        </button>
      </div>
    </div>
  );
};

export default Offer;
