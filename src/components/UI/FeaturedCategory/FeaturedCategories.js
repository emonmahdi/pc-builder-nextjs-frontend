/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
// import cpuImg from "./../../../assets/processor.png";

const FeaturedCategories = () => {
  return (
    <div className="lg:px-16 bg-[#F2F2F2] py-12">
      <h1 className="text-center font-bold text-3xl mb-8">
        Featured <span className="text-[#3AC5FA]">Categories</span>
      </h1>
      <div class="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-4  sm:px-4">
        <div className="p-4 bg-white rounded-lg text-center text-black hover:scale-110 transform transition duration-y">
          <Link
            href="/categories/processor"
            className="text-black decoration-clone"
          >
            <img
              src="https://i.ibb.co/kgkB8m5/processor.png"
              width="60px"
              alt=""
              className="mx-auto"
            />
            <h3 className="mt-2 font-bold">CPU / Processor</h3>
          </Link>
        </div>
        <div className="p-4 bg-white rounded-lg text-center hover:scale-110 transform transition duration-y">
          <Link
            href="/categories/motherboard"
            className="text-black decoration-clone"
          >
            <img
              src="https://i.ibb.co/8jq5xBH/motherboard.png"
              width="60px"
              alt=""
              className="mx-auto"
            />
            <h3 className="mt-2 font-bold">Motherboard</h3>
          </Link>
        </div>
        <div className="p-4 bg-white rounded-lg text-center hover:scale-110 transform transition duration-y">
          <Link href="/categories/ram" className="text-black decoration-clone">
            <img
              src="https://i.ibb.co/s2nP77Q/memory.png"
              width="60px"
              alt=""
              className="mx-auto"
            />
            <h3 className="mt-2 font-bold">RAM</h3>
          </Link>
        </div>
        <div className="p-4 bg-white rounded-lg text-center hover:scale-110 transform transition duration-y">
          <Link
            href="/categories/power-supply-unit"
            className="text-black decoration-clone"
          >
            <img
              src="https://i.ibb.co/nk905fL/power-supply.png"
              width="60px"
              alt=""
              className="mx-auto"
            />
            <h3 className="mt-2 font-bold">Power Supply Unit</h3>
          </Link>
        </div>
        <div className="p-4 bg-white rounded-lg text-center hover:scale-110 transform transition duration-y">
          <Link
            href="/categories/storage-device"
            className="text-black decoration-clone"
          >
            <img
              src="https://i.ibb.co/y8yWB2m/ssd-disk.png"
              width="60px"
              alt=""
              className="mx-auto"
            />
            <h3 className="mt-2 font-bold">Storage Device</h3>
          </Link>
        </div>
        <div className="p-4 bg-white rounded-lg text-center hover:scale-110 transform transition duration-y">
          <Link
            href="/categories/monitor"
            className="text-black decoration-clone"
          >
            <img
              src="https://i.ibb.co/Bw7c6dH/monitor.png"
              width="60px"
              alt=""
              className="mx-auto"
            />
            <h3 className="mt-2 font-bold">Monitor</h3>
          </Link>
        </div>
        <div className="p-4 bg-white rounded-lg text-center hover:scale-110 transform transition duration-y">
          <Link
            href="/categories/other"
            className="text-black decoration-clone"
          >
            <img
              src="https://i.ibb.co/KGcL04W/application.png"
              width="60px"
              alt=""
              className="mx-auto"
            />
            <h3 className="mt-2 font-bold">Others</h3>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FeaturedCategories;
