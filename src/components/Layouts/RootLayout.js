import React from "react";
import Navbar from "../shared/Navbar";
import Footer from "../shared/Footer";

const RootLayout = ({ children }) => {
  return (
    <div>
      <div className="w-[100%] overflow-hidden">
        <Navbar />
        <div className="h-[auto] p-8">{children}</div>
        <Footer />
      </div>
    </div>
  );
};

export default RootLayout;
