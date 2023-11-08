import React from "react";
import Navbar from "../shared/Navbar";
import Footer from "../shared/Footer";
import Head from "next/head";

const RootLayout = ({ children }) => {
  return (
    <div>
      <Head>
        <meta name="description" content="PC Builder application Next Js" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <div className="w-[100%] overflow-hidden">
        <Navbar />
        <div className="h-[auto]">{children}</div>
        <Footer />
      </div>
    </div>
  );
};

export default RootLayout;
