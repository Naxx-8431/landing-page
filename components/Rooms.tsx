"use client";

import { useState } from "react";
import Image from "next/image";

const filters = ["Couples", "Families", "Solo", "Groups"];

const rooms = [
  {
    id: "01",
    name: "Ocean Suite",
    image:
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800&q=80",
    description:
      "Wake up to panoramic sea views from your private balcony. Elegantly furnished with coastal charm and modern amenities.",
  },
  {
    id: "02",
    name: "Beach Villa",
    image:
      "https://images.unsplash.com/photo-1602002418816-5c0aeef426aa?w=800&q=80",
    description:
      "Secluded beachfront villas with plunge pools, direct beach access, and al fresco dining spaces for an intimate retreat.",
  },
  {
    id: "03",
    name: "Garden Room",
    image:
      "https://images.unsplash.com/photo-1540518614846-7eded433c457?w=800&q=80",
    description:
      "Lush tropical gardens surround this serene hideaway. Perfect for nature lovers seeking tranquillity steps from the shore.",
  },
  {
    id: "04",
    name: "Royal Penthouse",
    image:
      "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=800&q=80",
    description:
      "The crown jewel of Summer Sand — two floors of luxury with a rooftop terrace, jacuzzi, and butler service.",
  },
];

export default function Rooms() {
  const [activeFilter, setActiveFilter] = useState("Couples");
  const [hoveredIndex, setHoveredIndex] = useState(1);

  return (
    <section
      className="w-full bg-pale-yellow px-6 py-20 lg:px-12 lg:py-28"
      id="rooms"
    >
      {/* Header row */}
      <div className="mx-auto flex max-w-7xl flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
        <h2 className="font-display text-[clamp(3rem,8vw,7rem)] uppercase leading-[0.9] tracking-tight text-dark">
          OUR ROOMS
          <br />
          FOR
        </h2>

        {/* Filter tabs */}
        <div className="flex flex-wrap gap-4 lg:gap-6">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`text-base font-medium italic transition-all duration-300 lg:text-lg ${
                activeFilter === filter
                  ? "text-dark underline underline-offset-8 decoration-2"
                  : "text-dark/40 hover:text-dark/70"
              }`}
              id={`filter-${filter.toLowerCase()}`}
            >
              {filter}
            </button>
          ))}
        </div>
      </div>

      {/* Room cards */}
      <div className="mx-auto mt-12 grid max-w-7xl grid-cols-2 gap-4 lg:mt-16 lg:grid-cols-4 lg:gap-6">
        {rooms.map((room, index) => (
          <div
            key={room.id}
            className={`group relative cursor-pointer overflow-hidden rounded-md transition-all duration-500 ${
              hoveredIndex === index
                ? "col-span-2 lg:col-span-2"
                : "col-span-1"
            }`}
            onMouseEnter={() => setHoveredIndex(index)}
            id={`room-card-${room.id}`}
          >
            {/* Number badge */}
            <span
              className={`absolute left-4 top-4 z-20 font-display text-3xl lg:text-4xl ${
                hoveredIndex === index ? "text-peach" : "text-dark"
              } transition-colors duration-300`}
            >
              {room.id}
            </span>

            {/* Image */}
            <div
              className={`relative overflow-hidden transition-all duration-500 ${
                hoveredIndex === index ? "h-64 lg:h-80" : "h-48 lg:h-64"
              }`}
            >
              <Image
                src={room.image}
                alt={room.name}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 768px) 50vw, 25vw"
              />
              {hoveredIndex === index && (
                <div className="absolute inset-0 bg-peach/20" />
              )}
            </div>

            {/* Info */}
            <div className="mt-3 px-1">
              <div className="flex items-center justify-between">
                <h3
                  className={`font-display text-xl uppercase lg:text-2xl ${
                    hoveredIndex === index ? "font-bold" : ""
                  }`}
                >
                  {room.name}
                </h3>
                {hoveredIndex === index && (
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    className="text-dark"
                  >
                    <path
                      d="M7 17L17 7M17 7H7M17 7V17"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                )}
              </div>
              {hoveredIndex === index && (
                <p className="mt-2 text-sm leading-relaxed text-dark/70">
                  {room.description}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Navigation */}
      <div className="mx-auto mt-10 flex max-w-7xl items-center gap-4">
        <button
          className="flex h-12 w-12 items-center justify-center rounded-full border border-dark/20 transition-colors duration-300 hover:bg-dark hover:text-white"
          id="rooms-prev"
          aria-label="Previous rooms"
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
        <span className="text-sm font-medium text-dark/60">1/3</span>
        <button
          className="flex h-12 w-12 items-center justify-center rounded-full border border-dark/20 transition-colors duration-300 hover:bg-dark hover:text-white"
          id="rooms-next"
          aria-label="Next rooms"
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
    </section>
  );
}
