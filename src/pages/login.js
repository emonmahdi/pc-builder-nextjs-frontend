import RootLayout from "@/components/Layouts/RootLayout";
import { FaGithub, FaGoogle } from "react-icons/fa";
import { signIn } from "next-auth/react";
import Link from "next/link";
import { useState } from "react";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  // };
  return (
    <div className="relative flex flex-col justify-center min-h-screen overflow-hidden">
      <div className="w-full p-6 m-auto bg-white rounded-md shadow-md lg:max-w-xl">
        <h1 className="text-3xl font-semibold text-center text-[#081621] underline">
          Sign in
        </h1>
        <form className="mt-6">
          <div className="mb-2">
            <label
              htmlFor="email"
              className="block text-sm font-semibold text-gray-800"
            >
              Email
            </label>
            <input
              type="email"
              onChange={(e) => setEmail(e.target.value)}
              className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
              placeholder="Your Email.."
            />
          </div>
          <div className="mb-2">
            <label
              htmlFor="password"
              className="block text-sm font-semibold text-gray-800"
            >
              Password
            </label>
            <input
              type="password"
              onChange={(e) => setPassword(e.target.value)}
              className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
              placeholder="Your Password.."
            />
          </div>
          <div className="mb-3">
            {" "}
            <a href="#" className="text-xs text-purple-600 hover:underline">
              Forget Password?
            </a>
          </div>
          {error && (
            <div className="bg-red-500 text-white py-1 px-2 inline rounded-md">
              {error}
            </div>
          )}
          <div className="mt-6">
            <button className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-[#081621] rounded-md hover:bg-[#2497D2] hover:text-[#081621] focus:outline-none">
              Login
            </button>
          </div>
          <div className="mt-6 text-center">
            <p>Another way to Login</p>
            <div className="text-4xl text-center w-[150px] mx-auto flex items-center">
              <FaGithub
                onClick={() =>
                  signIn("github", {
                    callbackUrl: "http://localhost:3000/",
                  })
                }
                className="mx-auto w-[100%] my-2 cursor-pointer"
              />
              <FaGoogle
                onClick={() =>
                  signIn("google", {
                    callbackUrl: "http://localhost:3000/",
                  })
                }
                className="mx-auto w-[100%] my-2 cursor-pointer"
              />
            </div>
          </div>
        </form>

        <p className="mt-8 text-lg font-light text-center text-gray-700">
          Do not have an account?
          <Link href="/register">
            <span className="font-medium text-[#2497D2] hover:underline">
              Sign up
            </span>
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;

LoginPage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
