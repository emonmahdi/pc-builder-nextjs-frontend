import React from "react";
import { FaLaptop } from "react-icons/fa";
import { MdOutlineCompareArrows } from "react-icons/md";
import { MdOutlineSupport } from "react-icons/md";
import { MdOutlineReportProblem } from "react-icons/md";

const AboutSupport = () => {
  return (
    <div className="px-16 py-8 text-center">
      {/* <h2 className="text-center text-3xl font-bold my-8">
        Support <span className="text-[#3AC5FA]">Us</span>
      </h2> */}
      <div className="about-us-support">
        <div className="grid grid-col-4 lg:grid-cols-4 gap-2">
          <div className="p-4 border-2 border-solid border-black-400 rounded-md text-left">
            <div className="flex items-center justify-around">
              <div className="bg-green-300 p-4 rounded-lg">
                <p>
                  <FaLaptop />
                </p>
              </div>
              <div>
                <h4 className="font-bold text-xl">Laptop Find</h4>
                <p>Choice your laptop</p>
              </div>
            </div>
          </div>
          <div className="p-4 border-2 border-solid border-black-400 rounded-md">
            <div className="flex items-center justify-around">
              <div className="bg-green-300 p-4 rounded-lg">
                <p>
                  <MdOutlineReportProblem />
                </p>
              </div>
              <div>
                <h4 className="font-bold text-xl">Raise a Complain</h4>
                <p>Share your experience</p>
              </div>
            </div>
          </div>
          <div className="p-4 border-2 border-solid border-black-400 rounded-md">
            <div className="flex items-center justify-around">
              <div className="bg-green-300 p-4 rounded-lg">
                <p>
                  <MdOutlineSupport />
                </p>
              </div>
              <div>
                <h4 className="font-bold text-xl">Online Support</h4>
                <p>Get online Support</p>
              </div>
            </div>
          </div>
          <div className="p-4 border-2 border-solid border-black-400 rounded-md">
            <div className="flex items-center justify-around">
              <div className="bg-green-300 p-4 rounded-lg">
                <p>
                  <MdOutlineCompareArrows />
                </p>
              </div>
              <div>
                <h4 className="font-bold text-xl">Service center</h4>
                <p>Repair your Device</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSupport;
