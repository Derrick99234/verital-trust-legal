"use client";
import React from "react";
import { GoLaw } from "react-icons/go";
import Carousel from "./Carousel";

export default function Section4() {
  const carouselItems = [
    {
      id: 1,
      title: "Marriage",
      subtitle: "& Divorce",
      image:
        "https://images.unsplash.com/photo-1544027993-37dbfe43562a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 2,
      title: "Real Estate",
      subtitle: "& Construction",
      image:
        "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 3,
      title: "Bank",
      subtitle: "Protected",
      image:
        "https://images.unsplash.com/photo-1541354329998-f4d9a9f9297f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 4,
      title: "Business",
      subtitle: "Solutions",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 5,
      title: "Family",
      subtitle: "Law",
      image:
        "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 6,
      title: "Employment",
      subtitle: "Law",
      image:
        "https://images.unsplash.com/photo-1562564055-71e051d33c19?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];
  return (
    <section className="min-h-[80vh] flex justify-center items-center gap-16 overflow-x-hidden px-10">
      <div className="max-w-lg">
        <div className="flex gap-3 items-center">
          <GoLaw className="bg-red-500 w-10 h-10 text-white rounded-full p-2 text-2xl" />{" "}
          Areas of Practice
        </div>
        <h2 className="text-7xl font-serif my-5">
          Case
          <span className="text-red-500 ml-3">Studies</span>
        </h2>
        <p>
          We provide expert legal services across core practice areas, offering
          practical solutions tailored to your personal or business needs.
        </p>
        <button className="text-white bg-black py-3 px-8 mt-10 rounded">
          Discover more
        </button>
      </div>
      <div className="w-full">
        <Carousel
          items={carouselItems}
          autoPlay={true}
          autoPlayInterval={4000}
        />
      </div>
    </section>
  );
}
