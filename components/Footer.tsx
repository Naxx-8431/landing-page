const footerLinks = [
  { group: "Stay", items: ["Rooms", "Packages", "Offers", "Gift Cards"] },
  { group: "Experience", items: ["Dining", "Amenities", "Spa", "Events"] },
  { group: "Explore", items: ["Gallery", "About", "Careers", "Press"] },
  { group: "Help", items: ["Contact", "FAQ", "Directions", "Policies"] },
];

export default function Footer() {
  return (
    <footer className="w-full bg-dark px-6 py-16 lg:px-12 lg:py-20" id="footer">
      <div className="mx-auto max-w-7xl">
        {/* Top row */}
        <div className="flex flex-col gap-12 border-b border-white/10 pb-12 lg:flex-row lg:justify-between">
          {/* Logo */}
          <div className="lg:w-1/3">
            <a
              href="#"
              className="font-display text-3xl tracking-wide text-white lg:text-4xl"
              id="footer-logo"
            >
              SUMMER SAND <sup className="text-xs align-super">®</sup>
            </a>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/40">
              A luxury beachfront resort in Ullal, Mangalore — where the golden
              sands of Karnataka meet world-class hospitality.
            </p>
          </div>

          {/* Link columns */}
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-4 lg:w-2/3 lg:gap-12">
            {footerLinks.map((group) => (
              <div key={group.group}>
                <h4 className="text-xs font-bold uppercase tracking-widest text-white/30">
                  {group.group}
                </h4>
                <ul className="mt-4 flex flex-col gap-3">
                  {group.items.map((item) => (
                    <li key={item}>
                      <a
                        href="#"
                        className="text-sm text-white/60 transition-colors duration-300 hover:text-white"
                      >
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom row */}
        <div className="mt-8 flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-xs text-white/30">
            © 2025 Summer Sand Resort, Ullal, Mangalore. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a
              href="#"
              className="text-xs text-white/30 transition-colors duration-300 hover:text-white/60"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-xs text-white/30 transition-colors duration-300 hover:text-white/60"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
