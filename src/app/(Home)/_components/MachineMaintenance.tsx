"use client";
import React from "react";
import Link from "next/link";
import Picture from "@src/components/picture/Picture";
import { heroBg, hero_Image, machineImage } from "@public/images";

const MachineMaintenance = () => {
  return (
    <>
      <div className="relative w-full h-[70vh] sm:h-[80vh] lg:h-screen overflow-hidden">
        {/* The Background Image */}
        <Picture
          src={hero_Image}
          alt="Brand New Collection"
          className="w-full h-full object-cover scale-105"
        />

        {/* Background Overlay */}
        <div className="absolute inset-0 bg-black/40" />

        {/* Content Overlay — Centered */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
          <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl capitalize font-semibold text-white leading-tight tracking-tight">
            Custom made sets
          </h1>
          <p className="mt-6 text-sm md:text-base text-white/70 max-w-xl leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In commodo
            enim sit amet magna semper lacinia. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. In commodo enim sit amet magna semper
            lacinia.
          </p>
          <Link
            href="/category"
            className="mt-8 inline-block bg-black hover:bg-black/80 text-white text-xs md:text-sm font-bold uppercase tracking-[0.2em] px-8 py-3.5 rounded-2xl transition-colors">
            Explore Now
          </Link>
        </div>
      </div>
    </>
  );
};

export default MachineMaintenance;
