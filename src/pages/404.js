/* eslint-disable @next/next/no-img-element */
import React from "react";
import { useRouter } from "next/router";

const PageNotFound = () => {
  const router = useRouter();

  setTimeout(() => {
    router.push("/");
  }, 3000);

  return (
    <div className="flex justify-center items-center h-[100vh]">
      <h1>404 - Page Not Found</h1>
    </div>
  );
};

export default PageNotFound;
