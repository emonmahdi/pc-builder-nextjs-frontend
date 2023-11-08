import React from "react";

const btnStyle = {
  border: "none",
  color: "#fff",
  padding: "10px 20px",
};

const MyButton = ({ children }) => {
  return (
    <button
      style={btnStyle}
      className="btn hover:text-[#000] bg-[#309975]"
      type="button"
    >
      {children}
    </button>
  );
};

export default MyButton;
