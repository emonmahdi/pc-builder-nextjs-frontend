import React from "react";

const Brands = () => {
  return (
    <div className="px-16 py-8 text-center">
      <h2 className="text-center text-3xl font-bold my-8">
        Top <span className="text-[#3AC5FA]">Brands</span>
      </h2>
      <div className="brands-logo">
        <div className="grid grid-col-4 lg:grid-cols-4 gap-2">
          <div className="p-4 border-2 border-solid border-black-400 rounded-md hover:bg-gray-200">
            <h4 className="font-bold text-xl">Dell</h4>
          </div>
          <div className="p-4 border-2 border-solid border-black-400 rounded-md hover:bg-gray-200">
            <h4 className="font-bold text-xl">HP</h4>
          </div>
          <div className="p-4 border-2 border-solid border-black-400 rounded-md hover:bg-gray-200">
            <h4 className="font-bold text-xl">Apple</h4>
          </div>
          <div className="p-4 border-2 border-solid border-black-400 rounded-md hover:bg-gray-200">
            <h4 className="font-bold text-xl">Lenovo</h4>
          </div>
          <div className="p-4 border-2 border-solid border-black-400 rounded-md hover:bg-gray-200">
            <h4 className="font-bold text-xl">Asus</h4>
          </div>
          <div className="p-4 border-2 border-solid border-black-400 rounded-md hover:bg-gray-200">
            <h4 className="font-bold text-xl">A4Tech</h4>
          </div>
          <div className="p-4 border-2 border-solid border-black-400 rounded-md hover:bg-gray-200">
            <h4 className="font-bold text-xl">Logitech</h4>
          </div>
          <div className="p-4 border-2 border-solid border-black-400 rounded-md hover:bg-gray-200">
            <h4 className="font-bold text-xl">Gigabyte</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Brands;
