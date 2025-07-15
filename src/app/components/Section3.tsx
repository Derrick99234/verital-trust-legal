import Image from "next/image";
import React from "react";
import { GoLaw } from "react-icons/go";
import { RxArrowTopRight } from "react-icons/rx";

export default function Section3() {
  return (
    <section className="min-h-[80vh] bg-red-900 flex justify-center items-center gap-16">
      <Image
        src={"/images/legal-consultant.jpg"}
        width={400}
        height={400}
        className="my-10 rounded"
        alt="VT about image"
      />
      <div className="max-w-lg text-white">
        <div className="flex gap-3 items-center text-white">
          <GoLaw className="bg-red-500 w-10 h-10 rounded-full text-white p-2 text-2xl" />{" "}
          People Make the difference
        </div>
        <h2 className="text-5xl text-white font-serif my-5">
          We are here to provide{" "}
          <span className="text-red-500">legal consultancy</span>
        </h2>
        <p>
          Our award-winning legal team has an impressive track record and
          extensive experience working on cases like yours. Our lawyers
          specialize in the practice areas that affect everyday life, ensuring
          you receive the best possible advice and representation.
        </p>
        <p className="mt-10 text-xl uppercase">
          Presidential Legal Consultancy
        </p>
        <span className="text-red-500 text-lg">
          - Alabota Happy-Great Esq -
        </span>
      </div>
    </section>
  );
}
