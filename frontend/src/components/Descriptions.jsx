import React from "react";
import { Link } from "react-router-dom";

const Descriptions = () => {
  return (
    <section className="max-w-6xl mx-auto px-6 py-20">
      {/* Section Heading */}
      <div className="text-center mb-14">
        <h2 className="text-4xl font-bold text-gray-900">
          Create AI Images
        </h2>

        <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
          Turn your imagination into stunning AI-generated images with just a
          few simple steps.
        </p>
      </div>

      {/* Content */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Image */}
        <div>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGCJ4xBRkxc5aJVOzP7HheqESdQkU5bDnJkh0QQfCyRg&s=10"
            alt="AI Image Generation"
            className="w-full rounded-2xl shadow-lg"
          />
        </div>

        {/* Text */}
        <div>
          <h3 className="text-3xl font-bold text-gray-900 mb-6">
            Introducing AI Image Generation
          </h3>

          <p className="text-gray-600 leading-8 mb-4">
            Unleash your creativity with our powerful AI image generator.
            Simply enter a prompt and create beautiful, high-quality images
            instantly.
          </p>

          <p className="text-gray-600 leading-8 mb-3">
            Whether you're a designer, developer, marketer, or content creator,
            Imagify helps you transform ideas into professional artwork in
            seconds using advanced AI.
          </p>

          <Link
       to="/generate"
  className="mt-8 rounded-lg bg-indigo-600 px-6 py-3 text-white font-medium hover:bg-indigo-700 transition"
>
  Generate Now
</Link>
        </div>
      </div>
    </section>
  );
};

export default Descriptions;