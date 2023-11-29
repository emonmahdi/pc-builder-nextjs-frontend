import RootLayout from "@/components/Layouts/RootLayout";
import React from "react";

const AboutPage = () => {
  return (
    <div>
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
