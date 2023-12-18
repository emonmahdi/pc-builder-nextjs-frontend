import RootLayout from "@/components/Layouts/RootLayout";
import { useAppSelector } from "@/redux/hook";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const AboutPage = () => {
  const { products } = useAppSelector((state) => state.cart);

  const x = products.map((product) => "");

  const notify = () => {
    toast.success("Successfully Build! Request");
  };

  return (
    <div>
      <>
        <div className="flex justify-between items-center my-4 bg-[#081621] p-4 text-light rounded-2xl w-[50%] mx-auto">
          <div className="">
            <li className="list-none capitalize text-xl text-white">
              Processor
            </li>
            {/* {!products && (
                <>
                  <li className="list-none capitalize text-xl text-white">
                    Processor
                  </li>
                </>
              )} */}
          </div>
          <div className="">
            {products.map((pro, index) =>
              pro.category === "processor" ? (
                <>
                  <div key={index} className="flex items-center">
                    <div>
                      <Image
                        src={pro?.img}
                        className="w-[50px]"
                        alt="product"
                      />
                    </div>
                    <div className="text-white ml-4">
                      <p>{pro.title}</p>
                      <p className="text-xl font-semibold ">{pro.price}৳</p>
                    </div>
                  </div>
                </>
              ) : (
                ""
              )
            )}
          </div>
          <div>
            <Link
              href="/categories/processor"
              className={`btn ${
                products.find((pro) => pro.category === "processor")
                  ? "btn-disabled"
                  : ""
              }`}
              style={{
                background: "rgb(101,80,219)",
                background:
                  "linear-gradient(0deg, rgba(101,80,219,1) 2%, rgba(131,47,149,1) 100%)",
                marginRight: "6px",
                color: "#fff",
                padding: "12px 20px",
                border: "none",
                borderRadius: "6px",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-evenly",
                fontWeight: "bold",
              }}
            >
              <span>Choose</span>
            </Link>
          </div>
        </div>
      </>

      <div className="container mx-auto my-8 p-8 bg-white rounded-lg shadow-md">
        <h1 className="text-4xl font-bold text-center text-blue-500 mb-6">
          About PC Builder App
        </h1>

        <p className="text-lg leading-relaxed text-justify mb-4">
          Welcome to Mahdi PC Builder, where we make assembling the perfect
          computer an effortless experience. Whether you are an experienced
          enthusiast or a first-time builder, our user-friendly interface and
          extensive database of components will guide you through the process.
        </p>

        <div className="bg-gray-100 p-4 rounded-md mb-6">
          <p className="text-lg font-semibold mb-2">Our Mission</p>
          <p className="text-gray-700">
            We aim to empower users to create a custom PC configuration with
            ease. Our tools provide real-time compatibility checking,
            comprehensive component information, and the ability to save and
            share your builds with the community.
          </p>
        </div>

        <p className="text-lg leading-relaxed text-justify mb-4">
          Building your dream PC has never been this simple and enjoyable! Join
          our community today and start your journey to a customized computing
          experience.
        </p>

        <div className="text-left">
          <p className="text-xl text-blue-500 mb-2">Key Features:</p>
          <ul className="list-disc text-left ml-6">
            <li>Intuitive drag-and-drop interface</li>
            <li>Real-time compatibility checking</li>
            <li>Comprehensive component information</li>
            <li>Save and share your builds with the community</li>
          </ul>
        </div>

        <p className="text-lg leading-relaxed text-justify mt-6">
          Ready to get started? Join our community today and experience the joy
          of building your custom PC with PC Builder App.
        </p>
      </div>
    </div>
  );
};

export default AboutPage;

AboutPage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
