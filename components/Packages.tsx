import Image from "next/image";

const packages = [
  {
    name: "Honeymoon Escape",
    image:
      "https://images.unsplash.com/photo-1540541338287-41700207dee6?w=800&q=80",
    location: "ULLAL, MANGALORE",
    rating: "4.9",
    description:
      "A curated romantic getaway featuring private candlelit dinners on the beach, couples' spa sessions, and sunset sailing.",
  },
  {
    name: "Family Splash",
    image:
      "https://images.unsplash.com/photo-1506929562872-bb421503ef21?w=800&q=80",
    location: "ULLAL, MANGALORE",
    rating: "4.8",
    description:
      "Fun-filled family package with kids' club access, water sports, bonfire nights, and interconnecting family suites.",
  },
];

export default function Packages() {
  return (
    <section
      className="w-full bg-peach px-6 py-20 lg:px-12 lg:py-28"
      id="packages"
    >
      <div className="mx-auto flex max-w-7xl flex-col gap-12 lg:flex-row lg:gap-20">
        {/* Left column */}
        <div className="flex flex-col justify-between lg:w-2/5">
          <div>
            <h2 className="font-display text-[clamp(3rem,8vw,7rem)] uppercase leading-[0.9] tracking-tight text-dark">
              POPULAR
              <br />
              PACKAGES
            </h2>
            <p className="mt-6 text-lg font-medium text-dark/70">
              Find your perfect getaway.
            </p>
            <p className="mt-3 max-w-sm text-sm leading-relaxed text-dark/50">
              From breathtaking sunsets to luxurious beachside retreats —
              discover the experience one package at a time.
            </p>
          </div>

          {/* Navigation */}
          <div className="mt-10 flex items-center gap-4">
            <button
              className="flex h-12 w-12 items-center justify-center rounded-full border border-dark/20 transition-colors duration-300 hover:bg-dark hover:text-white"
              id="packages-prev"
              aria-label="Previous packages"
            >
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path
                  d="M12 5L7 10L12 15"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            <span className="text-sm font-medium text-dark/60">1/4</span>
            <button
              className="flex h-12 w-12 items-center justify-center rounded-full border border-dark/20 transition-colors duration-300 hover:bg-dark hover:text-white"
              id="packages-next"
              aria-label="Next packages"
            >
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path
                  d="M8 5L13 10L8 15"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Right column — Package cards */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:w-3/5">
          {packages.map((pkg) => (
            <div
              key={pkg.name}
              className="group relative h-[420px] overflow-hidden rounded-2xl transition-all duration-500 hover:shadow-2xl hover:-translate-y-1 lg:h-[520px]"
              id={`package-${pkg.name.toLowerCase().replace(/\s+/g, "-")}`}
            >
              {/* Full-bleed image */}
              <Image
                src={pkg.image}
                alt={pkg.name}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 30vw"
              />

              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

              {/* Location badge */}
              <span className="absolute left-4 top-4 z-10 rounded-full bg-transparent/90 px-3 py-1.5 text-[11px] font-bold uppercase tracking-wider text-light">
                {pkg.location}
              </span>

              {/* Rating badge */}
              <span className="absolute right-4 top-4 z-10 flex items-center gap-1 rounded-full bg-dark/70 px-3 py-1.5 text-[11px] font-bold text-white backdrop-blur-sm">
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 12 12"
                  fill="currentColor"
                >
                  <path d="M6 0L7.76 3.58L11.71 4.15L8.85 6.92L9.52 10.85L6 8.98L2.48 10.85L3.15 6.92L0.29 4.15L4.24 3.58L6 0Z" />
                </svg>
                {pkg.rating}
              </span>

              {/* Content — absolute bottom */}
              <div className="absolute bottom-6 left-6 right-6 z-10">
                <h3 className="font-display text-3xl uppercase tracking-wide text-white lg:text-4xl">
                  {pkg.name}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-white/80">
                  {pkg.description}
                </p>
                <a
                  href="#"
                  className="group/link mt-5 inline-flex items-center gap-2 text-sm font-bold text-white transition-colors duration-300 hover:text-white/70"
                >
                  View package
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    className="transition-transform duration-300 group-hover/link:translate-x-1"
                  >
                    <path
                      d="M3 8H13M13 8L9 4M13 8L9 12"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
