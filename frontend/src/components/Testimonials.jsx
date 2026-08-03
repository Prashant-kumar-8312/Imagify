import React from "react";

const Testimonials = () => {
  const reviews = [
    {
      id: 1,
      name: "John Doe",
      role: "Graphic Designer",
      review:
        "Imagify transformed my ideas into beautiful AI artwork within seconds. It's fast, easy to use, and incredibly accurate.",
    },
    {
      id: 2,
      name: "Jane Smith",
      role: "Content Creator",
      review:
        "The image quality is outstanding. I use Imagify for social media content every day and it saves me hours of work.",
    },
    {
      id: 3,
      name: "Michael Johnson",
      role: "Digital Artist",
      review:
        "An amazing AI image generator! The prompts are interpreted accurately, and the results always exceed my expectations.",
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-6 py-20">
      {/* Heading */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-900">
          What Our Users Say
        </h2>

        <p className="mt-4 text-gray-600">
          Thousands of creators trust Imagify to bring their imagination to life.
        </p>
      </div>

      {/* Testimonial Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {reviews.map((review) => (
          <div
            key={review.id}
            className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm hover:shadow-lg transition"
          >
            <div className="text-yellow-500 text-xl mb-4">★★★★★</div>

            <p className="text-gray-600 leading-7">
              "{review.review}"
            </p>

            <div className="mt-6">
              <h3 className="font-semibold text-gray-900">
                {review.name}
              </h3>

              <p className="text-sm text-gray-500">
                {review.role}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;