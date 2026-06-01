"use client";

const amenities = [
  {
    name: "INFINITY POOL",
    description:
      "A stunning oceanfront pool that blends seamlessly with the horizon, perfect for sunrise laps or sunset cocktails.",
  },
  {
    name: "PRIVATE BEACH",
    description:
      "Exclusive access to pristine Ullal Beach with sun loungers, parasols, and attentive beachside service.",
  },
  {
    name: "SPA & WELLNESS",
    description:
      "Rejuvenate with traditional Ayurvedic treatments, hot stone therapy, and holistic wellness programmes.",
  },
  {
    name: "WATER SPORTS",
    description:
      "From kayaking to jet skiing, experience the thrill of the Arabian Sea with our guided water activities.",
  },
];

export default function Amenities() {
  return (
    <section
      className="w-full bg-soft-pink px-6 py-20 lg:px-12 lg:py-28"
      id="amenities"
    >
      <div className="mx-auto flex max-w-7xl flex-col gap-12 lg:flex-row lg:gap-20">
        {/* Left column */}
        <div className="flex flex-col justify-between lg:w-2/5">
          <div>
            <h2 className="font-display text-[clamp(3rem,8vw,7rem)] uppercase leading-[0.9] tracking-tight text-dark">
              OUR
              <br />
              AMENITIES
            </h2>
            <p className="mt-6 max-w-sm text-base leading-relaxed text-dark/70">
              From the moment you arrive to the end of your stay, we offer
              world-class amenities designed to make your experience
              extraordinary, comfortable, and unforgettable.
            </p>
          </div>
          <a
            href="#"
            className="group mt-8 inline-flex w-fit items-center gap-3 rounded-full bg-dark px-8 py-4 text-sm font-bold uppercase tracking-wider text-white transition-all duration-300 hover:bg-dark/80"
            id="view-amenities-cta"
          >
            View all amenities
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              className="transition-transform duration-300 group-hover:translate-x-1"
            >
              <path
                d="M4 10H16M16 10L11 5M16 10L11 15"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        </div>

        {/* Right column — 2x2 grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:w-3/5">
          {amenities.map((amenity, index) => (
            <div
              key={amenity.name}
              className={`group relative cursor-pointer px-6 py-8 transition-all duration-300 hover:bg-white/30 ${
                index < 2 ? "border-b border-dark/10" : ""
              } ${index % 2 === 0 ? "sm:border-r sm:border-dark/10" : ""}`}
              id={`amenity-${amenity.name.toLowerCase().replace(/\s+/g, "-")}`}
            >
              <div className="flex items-start justify-between">
                <h3 className="font-display text-2xl uppercase tracking-wide text-dark lg:text-3xl">
                  {amenity.name}
                </h3>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  className="mt-1 shrink-0 text-dark/40 transition-all duration-300 group-hover:text-dark group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                >
                  <path
                    d="M7 17L17 7M17 7H7M17 7V17"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-dark/60">
                {amenity.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
