import React from "react";

const History = () => {
  const images = [
    {
      id: 1,
      prompt: "A futuristic city at sunset",
      image:
        "https://images.unsplash.com/photo-1518770660439-4636190af475?w=600",
      date: "10 Jul 2026",
    },
    {
      id: 2,
      prompt: "Cute astronaut riding a horse",
      image:
        "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=600",
      date: "09 Jul 2026",
    },
    {
      id: 3,
      prompt: "Cyberpunk street in Tokyo",
      image:
        "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?w=600",
      date: "08 Jul 2026",
    },
  ];

  return (
    <section className="min-h-screen bg-gray-100 py-12 px-6">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="mb-10">
          <h1 className="text-4xl font-bold text-gray-900">
            Image History
          </h1>

          <p className="mt-2 text-gray-600">
            View, download, or delete your previously generated AI images.
          </p>
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {images.map((item) => (
            <div
              key={item.id}
              className="rounded-2xl bg-white shadow-md overflow-hidden hover:shadow-xl transition"
            >
              <img
                src={item.image}
                alt={item.prompt}
                className="h-64 w-full object-cover"
              />

              <div className="p-5">
                <h3 className="font-semibold text-lg text-gray-900">
                  {item.prompt}
                </h3>

                <p className="mt-2 text-sm text-gray-500">
                  Generated on {item.date}
                </p>

                <div className="mt-5 flex gap-3">
                  <button className="flex-1 rounded-lg bg-indigo-600 py-2 text-white hover:bg-indigo-700 transition">
                    Download
                  </button>

                  <button className="flex-1 rounded-lg border border-red-500 py-2 text-red-500 hover:bg-red-50 transition">
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default History;