import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gray-50 px-6">
      <div className="max-w-4xl text-center">

        {/* Badge */}
        <div className="inline-block rounded-full border border-gray-300 px-5 py-2 mb-6">
          <p className="text-sm font-medium text-gray-700">
            ✨ Best AI Text to Image Generator
          </p>
        </div>

        {/* Heading */}
        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
          Turn Text Into
          <span className="text-indigo-600"> Stunning Images </span>
          in Seconds
        </h1>

        {/* Description */}
        <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto">
          Unleash your creativity with our powerful AI image generator.
          Simply enter a prompt and create beautiful, high-quality images
          instantly.
        </p>

        {/* Button */}
      <Link
  to="/generate"
  className="inline-block mt-3 rounded-lg bg-indigo-600 px-8 py-4 text-lg font-semibold text-white hover:bg-indigo-700 transition"
>
  Generate Images
</Link>
      </div>
    </section>
  );
};

export default Header;