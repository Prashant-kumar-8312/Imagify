import React from "react";

const ShowWork = () => {
  return (
    

      <div className="max-w-6xl mx-auto px-6 py-20">
  <h2 className="text-4xl font-bold text-center text-gray-900 mb-4">
    How It Works
  </h2>

  <p className="text-center text-gray-600 mb-12">
    Create stunning AI images in just three simple steps.
  </p>

  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

    {/* Card 1 */}
    <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm hover:shadow-lg transition">
      <div className="flex items-center justify-center w-12 h-12 rounded-full bg-indigo-600 text-white font-bold mb-5">
        1
      </div>

      <h3 className="text-xl font-semibold text-gray-900">
        Describe Your Vision
      </h3>

      <p className="mt-3 text-gray-600 leading-7">
        Describe the image you want to create in detail.
      </p>
    </div>

    {/* Card 2 */}
    <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm hover:shadow-lg transition">
      <div className="flex items-center justify-center w-12 h-12 rounded-full bg-indigo-600 text-white font-bold mb-5">
        2
      </div>

      <h3 className="text-xl font-semibold text-gray-900">
        Watch the Magic
      </h3>

      <p className="mt-3 text-gray-600 leading-7">
        Our AI generates a beautiful image from your prompt in just a few seconds.
      </p>
    </div>

    {/* Card 3 */}
    <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm hover:shadow-lg transition">
      <div className="flex items-center justify-center w-12 h-12 rounded-full bg-indigo-600 text-white font-bold mb-5">
        3
      </div>

      <h3 className="text-xl font-semibold text-gray-900">
        Download & Share
      </h3>

      <p className="mt-3 text-gray-600 leading-7">
        Download your AI-generated image instantly or share it with friends and on social media.
      </p>
    </div>

  </div>
</div>




       
    
  );
};

export default ShowWork;