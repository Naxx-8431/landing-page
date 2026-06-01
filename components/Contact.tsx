"use client";

import { useState } from "react";
import Image from "next/image";

export default function Contact() {
  const [agreed, setAgreed] = useState(false);

  return (
    <section
      className="w-full bg-gradient-to-b from-light-blue/60 via-light-blue/40 to-light-blue/60 px-6 py-20 lg:px-12 lg:py-28"
      id="contact"
    >
      <div className="relative mx-auto max-w-7xl">
        {/* Large background image with rounded corners */}
        <div className="relative h-[500px] overflow-hidden rounded-3xl lg:h-[600px]">
          <Image
            src="https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=1400&q=80"
            alt="Summer Sand Resort beachfront view"
            fill
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-black/10" />
        </div>

        {/* Form card — overlapping the image */}
        <div className="absolute left-6 top-1/2 z-10 w-[calc(100%-48px)] -translate-y-1/2 rounded-2xl bg-white/90 p-8 shadow-xl backdrop-blur-md sm:left-10 sm:w-[420px] lg:left-14 lg:w-[460px] lg:p-10">
          <h2 className="text-center font-display text-3xl leading-tight tracking-tight text-dark lg:text-4xl">
            Start your Summer Sand
            <br />
            journey today
          </h2>
          <p className="mt-3 text-center text-sm leading-relaxed text-dark/50">
            Complete the form and get a personalized
            <br className="hidden sm:block" />
            resort experience within 24 hours.
          </p>

          <form className="mt-8 flex flex-col gap-0" onSubmit={(e) => e.preventDefault()}>
            <input
              type="text"
              placeholder="Your name"
              className="border-b border-dark/15 bg-transparent py-4 text-sm text-dark outline-none placeholder:text-dark/40 transition-colors duration-300 focus:border-dark/40"
              id="contact-name"
            />
            <input
              type="email"
              placeholder="Email"
              className="border-b border-dark/15 bg-transparent py-4 text-sm text-dark outline-none placeholder:text-dark/40 transition-colors duration-300 focus:border-dark/40"
              id="contact-email"
            />
            <input
              type="tel"
              placeholder="Phone number"
              className="border-b border-dark/15 bg-transparent py-4 text-sm text-dark outline-none placeholder:text-dark/40 transition-colors duration-300 focus:border-dark/40"
              id="contact-phone"
            />
            <input
              type="text"
              placeholder="How can we help?"
              className="border-b border-dark/15 bg-transparent py-4 text-sm text-dark outline-none placeholder:text-dark/40 transition-colors duration-300 focus:border-dark/40"
              id="contact-message"
            />

            {/* Checkbox */}
            <label className="mt-6 flex cursor-pointer items-start gap-3 text-xs leading-relaxed text-dark/50">
              <input
                type="checkbox"
                checked={agreed}
                onChange={() => setAgreed(!agreed)}
                className="mt-0.5 h-4 w-4 shrink-0 appearance-none rounded border border-dark/20 bg-transparent checked:border-dark checked:bg-dark transition-colors duration-200"
                id="contact-agree"
              />
              By submitting this form, you agree to the processing of your
              personal data in accordance with our{" "}
              <a href="#" className="font-medium text-dark underline underline-offset-2">
                Privacy Policy
              </a>
              .
            </label>

            {/* Submit button */}
            <button
              type="submit"
              className="group mt-6 inline-flex w-fit items-center gap-2.5 rounded-full bg-dark px-6 py-3 text-sm font-bold text-white transition-all duration-300 hover:bg-dark/80"
              id="contact-submit"
            >
              Send message
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white/20 transition-colors duration-300 group-hover:bg-white/30">
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                  className="transition-transform duration-300 group-hover:translate-x-0.5"
                >
                  <path
                    d="M3 7H11M11 7L7.5 3.5M11 7L7.5 10.5"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
