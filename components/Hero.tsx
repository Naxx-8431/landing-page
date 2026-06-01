import Image from "next/image";

const stats = [
  { label: "5★ RATED", desc: "By 2,000+ guests" },
  { label: "12+ AMENITIES", desc: "World-class facilities" },
  { label: "BEACHFRONT", desc: "Direct ocean access" },
];

export default function Hero() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden" id="hero">
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1920&q=80"
          alt="Pristine tropical beach at Summer Sand Resort"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-dark/40 via-dark/20 to-dark/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex min-h-screen flex-col justify-end px-6 pb-0 pt-32 lg:px-12">
        {/* Giant heading */}
        <h1 className="font-display text-[clamp(3.5rem,12vw,11rem)] uppercase leading-[0.85] tracking-tight text-white">
          ESCAPE TO
          <br />
          THE COAST
        </h1>

        {/* Bottom content area */}
        <div className="mt-8 flex flex-col gap-8 pb-12 lg:flex-row lg:items-end lg:justify-between">
          {/* Left description */}
          <div className="max-w-sm">
            <p className="text-sm leading-relaxed text-white/80 lg:text-base">
              Discover the untouched beauty of Ullal Beach — where golden sands
              meet the Arabian Sea. Summer Sand is your gateway to coastal luxury
              and timeless relaxation.
            </p>
          </div>

          {/* Right description + CTA */}
          <div className="flex flex-col items-start gap-6 lg:items-end">
            <p className="max-w-sm text-sm leading-relaxed text-white/70 lg:text-right lg:text-base">
              Our dedicated team ensures every detail is tailored to your needs,
              whether you&apos;re planning a romantic getaway or a family
              vacation.
            </p>
            <a
              href="#rooms"
              className="group flex items-center gap-3 rounded-full bg-dark px-8 py-4 text-sm font-bold uppercase tracking-wider text-white transition-all duration-300 hover:bg-white hover:text-dark"
              id="hero-cta"
            >
              Book Your Stay
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
        </div>
      </div>

      {/* Stats bar */}
      <div className="relative z-10 border-t border-white/20 bg-light-blue/95 backdrop-blur-sm">
        <div className="mx-auto grid max-w-7xl grid-cols-1 divide-y divide-dark/10 sm:grid-cols-3 sm:divide-x sm:divide-y-0">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="flex flex-col items-center justify-center px-6 py-6 lg:py-8"
            >
              <span className="font-display text-2xl uppercase tracking-wide text-dark lg:text-3xl">
                {stat.label}
              </span>
              <span className="mt-1 text-sm text-dark/60">{stat.desc}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
