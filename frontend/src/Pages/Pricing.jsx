import React from "react";

const Sprockets = ({ count = 14 }) => (
  <div className="flex justify-between px-3 py-2 bg-stone-200">
    {Array.from({ length: count }).map((_, i) => (
      <div key={i} className="w-2 h-2 rounded-full bg-stone-50" />
    ))}
  </div>
);

const plans = [
  {
    name: "Contact Sheet",
    frames: "10",
    unit: "frames / mo",
    price: "$0",
    tagline: "Enough to see if the light's right.",
    features: [
      "10 image generations per month",
      "Standard resolution exports",
      "Community gallery access",
    ],
    cta: "Start for free",
    featured: false,
  },
  {
    name: "Standard Roll",
    frames: "100",
    unit: "frames / mo",
    price: "$9.99",
    tagline: "A full roll for regular shoots.",
    features: [
      "100 image generations per month",
      "High-resolution exports",
      "Priority render queue",
      "Save & reuse prompt presets",
    ],
    cta: "Upgrade to Standard",
    featured: true,
  },
  {
    name: "Studio Reel",
    frames: "\u221E",
    unit: "unlimited",
    price: "Contact us",
    tagline: "For teams shooting all day, every day.",
    features: [
      "Unlimited image generations",
      "Dedicated render capacity",
      "Priority support line",
      "Team seats & shared libraries",
    ],
    cta: "Contact sales",
    featured: false,
  },
];

const Pricing = () => {
  return (
    <div className="min-h-screen bg-stone-50 text-stone-900 px-6 py-16">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="mb-14 max-w-2xl">
          <p className="text-xs uppercase tracking-[0.3em] text-amber-600 mb-3 font-mono">
            Exposure &amp; Pricing
          </p>
          <h1 className="text-4xl md:text-5xl font-serif mb-4">
            Pick your roll.
          </h1>
          <p className="text-stone-500 leading-relaxed">
            Every plan is measured in frames &mdash; the number of images you
            can generate each month. Start with a test roll, move up to a full
            roll once you know what you're shooting, or go unlimited with a
            studio reel.
          </p>
        </div>

        {/* Plans */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={
                "flex flex-col rounded-sm overflow-hidden bg-white transition-transform duration-200 hover:-translate-y-1 " +
                (plan.featured
                  ? "border-[3px] border-amber-500 md:-translate-y-3 shadow-xl shadow-stone-300/60 md:hover:-translate-y-4"
                  : "border border-stone-900/15 shadow-sm hover:shadow-md hover:border-stone-900/30")
              }
            >
              <Sprockets />

              <div className="p-8 flex flex-col flex-1">
                {plan.featured && (
                  <span className="self-start mb-4 text-[10px] tracking-widest uppercase font-mono text-stone-50 bg-amber-500 px-2 py-1 rounded-sm">
                    Most loaded
                  </span>
                )}

                <h2 className="text-xl font-serif mb-1 text-stone-900">
                  {plan.name}
                </h2>
                <p className="text-sm text-stone-500 mb-6">{plan.tagline}</p>

                <div className="mb-6 flex items-baseline gap-2 font-mono">
                  <span className="text-4xl text-stone-900">{plan.frames}</span>
                  <span className="text-xs uppercase tracking-wide text-stone-400">
                    {plan.unit}
                  </span>
                </div>

                <div className="mb-6 pb-6 border-b border-stone-200">
                  <span className="text-2xl font-serif text-stone-900">
                    {plan.price}
                  </span>
                  {plan.price.startsWith("$") && (
                    <span className="text-stone-400 text-sm"> / month</span>
                  )}
                </div>

                <ul className="space-y-3 mb-8 flex-1">
                  {plan.features.map((f) => (
                    <li
                      key={f}
                      className="text-sm text-stone-600 flex items-start gap-2"
                    >
                      <span className="mt-1.5 w-1 h-1 rounded-full bg-amber-500 shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>

                <button
                  className={
                    "w-full py-3 rounded-sm text-sm  font-medium transition-colors duration-150 " +
                    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 " +
                    (plan.featured
                      ? "bg-amber-500 text-stone-50 hover:bg-amber-400 focus-visible:ring-amber-500"
                      : "bg-indigo-800  text-stone-50  focus-visible:ring-stone-900")
                  }
                >
                  {plan.cta}
                </button>
              </div>

              <Sprockets />
            </div>
          ))}
        </div>

        <p className="text-center text-stone-400 text-xs mt-12 font-mono">
          Frames reset on your monthly billing date. Unused frames don't roll over.
        </p>
      </div>
    </div>
  );
};

export default Pricing;
