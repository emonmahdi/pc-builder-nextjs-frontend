/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
// import cpuImg from "./../../../assets/processor.png";

const FeaturedCategories = () => {
  return (
    <div>
      <h1 className="text-center font-bold text-3xl">Featured Categories</h1>
      <div class="grid grid-cols-7 gap-4 mt-16 mb-8">
        <div className="p-4 bg-slate-600 rounded-lg text-center text-white">
          <Link
            href="/categories/processor"
            className="text-white decoration-clone"
          >
            <img
              src="https://i.ibb.co/kgkB8m5/processor.png"
              width="60px"
              alt=""
              className="mx-auto"
            />
            <h3>CPU / Processor</h3>
          </Link>
        </div>
        <div className="p-4 bg-slate-600 rounded-lg text-center text-white">
          <Link
            href="/categories/motherboard"
            className="text-white decoration-clone"
          >
            <img
              src="https://i.ibb.co/8jq5xBH/motherboard.png"
              width="60px"
              alt=""
              className="mx-auto"
            />
            <h3>Motherboard</h3>
          </Link>
        </div>
        <div className="p-4 bg-slate-600 rounded-lg text-center text-white">
          <Link href="/categories/ram" className="text-white decoration-clone">
            <img
              src="https://i.ibb.co/s2nP77Q/memory.png"
              width="60px"
              alt=""
              className="mx-auto"
            />
            <h3>RAM</h3>
          </Link>
        </div>
        <div className="p-4 bg-slate-600 rounded-lg text-center text-white">
          <Link
            href="/categories/power-supply-unit"
            className="text-white decoration-clone"
          >
            <img
              src="https://i.ibb.co/nk905fL/power-supply.png"
              width="60px"
              alt=""
              className="mx-auto"
            />
            <h3>Power Supply Unit</h3>
          </Link>
        </div>
        <div className="p-4 bg-slate-600 rounded-lg text-center text-white">
          <Link
            href="/categories/storage-device"
            className="text-white decoration-clone"
          >
            <img
              src="https://i.ibb.co/y8yWB2m/ssd-disk.png"
              width="60px"
              alt=""
              className="mx-auto"
            />
            <h3>Storage Device</h3>
          </Link>
        </div>
        <div className="p-4 bg-slate-600 rounded-lg text-center text-white">
          <Link
            href="/categories/monitor"
            className="text-white decoration-clone"
          >
            <img
              src="https://i.ibb.co/Bw7c6dH/monitor.png"
              width="60px"
              alt=""
              className="mx-auto"
            />
            <h3>Monitor</h3>
          </Link>
        </div>
        <div className="p-4 bg-slate-600 rounded-lg text-center text-white">
          <Link
            href="/categories/other"
            className="text-white decoration-clone"
          >
            <img
              src="https://i.ibb.co/KGcL04W/application.png"
              width="60px"
              alt=""
              className="mx-auto"
            />
            <h3>Others</h3>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FeaturedCategories;
