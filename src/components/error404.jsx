import React from "react";
import { Link } from "react-router-dom";

const Error404Page = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-[#dfbda0]">
      <h1 className="text-6xl font-bold text-red-500 mb-4">404</h1>
      <p className="text-xl text-gray-700 mb-8">Page not found</p>
      <Link
        to={"/"}
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
      >
        Go back to home page
      </Link>
    </div>
  );
};

export default Error404Page;
