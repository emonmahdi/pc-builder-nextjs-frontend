import RootLayout from "@/components/Layouts/RootLayout";
import { FaGithub, FaGoogle } from "react-icons/fa";
import { signIn } from "next-auth/react";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import { useState } from "react";
import Link from "next/link";
import POST from "./api/register/route";

const RegisterPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  // handle submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name || !email || !password) {
      setError("All fields are necessary");
    }

    try {
      const res = await fetch("api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, password }),
      });
      if (res.ok) {
        const form = e.target;
        form.reset();
      } else {
        console.log("User reg. failed");
      }
    } catch (error) {
      console.log("User Register failed!");
    }
  };

  // };
  return (
    <div className="relative flex flex-col justify-center min-h-screen overflow-hidden">
      <div className="w-full p-6 m-auto bg-white rounded-md shadow-md lg:max-w-xl">
        <h1 className="text-3xl font-semibold text-center text-[#081621]  underline">
          Sign Up
        </h1>
        <form onSubmit={handleSubmit} className="mt-6">
          <div className="mb-2">
            <label
              htmlFor="name"
              className="block text-sm font-semibold text-gray-800"
            >
              Full Name
            </label>
            <input
              type="text"
              name="name"
              onChange={(e) => setName(e.target.value)}
              className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
              placeholder="Your Full Name.."
            />
          </div>
          <div className="mb-2">
            <label
              htmlFor="email"
              className="block text-sm font-semibold text-gray-800"
            >
              Email
            </label>
            <input
              type="email"
              name="email"
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
              name="password"
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
              Register
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
          <Link href="/login">
            <span className="font-medium text-[#2497D2] hover:underline">
              Sign In
            </span>
          </Link>
        </p>
      </div>
    </div>
  );
};

export default RegisterPage;

RegisterPage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
