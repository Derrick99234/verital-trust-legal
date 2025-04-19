import Image from "next/image";
import React from "react";
import { BsDot } from "react-icons/bs";
import { RxArrowTopRight } from "react-icons/rx";

function Section2() {
  return (
    <section className="min-h-screen">
      <div className="flex min-h-[40vh] items-center gap-36 max-w-7xl mx-auto px-10">
        <h2 className="text-lg font-bold font-mono uppercase text-nowrap flex items-center gap-2">
          <BsDot className="text-5xl text-red-900" /> About Us
        </h2>
        <p className="text-7xl font-semibold">
          Protecting people <br />
          for over <span className="font-thin text-6xl">two decades</span>
        </p>
      </div>
      <div className="border-t max-w-6xl mx-auto my-10 flex gap-10 justify-between">
        <Image
          src={
            "https://cdn.pixabay.com/photo/2024/06/24/14/26/ai-generated-8850331_1280.png"
          }
          width={400}
          height={400}
          className="my-10"
          alt="VT about image"
        />
        <div className="border-l pl-10 pr-5 py-10int max-w-2xl">
          <h2 className="text-2xl font-semibold font-sans">
            Our award-winning legal team has an impressive track record and
            extensive experience working on cases like yours. Our lawyers
            specialize in the practice areas that affect everyday.
          </h2>
          <p className="mt-5 font-sans text-lg">
            Our firm also can help if you’re going through a divorce, child
            custody or child support proceedings, or have been charged with a
            crime. We offer a free consultation so that you can evaluate your
            options with no financial risk
          </p>
          <button className="mt-10 py-2 px-8 border rounded-md border-red-900 text-red-900 flex items-center gap-2">
            Meet Our Attorneys <RxArrowTopRight />
          </button>
        </div>
      </div>
    </section>
  );
}

export default Section2;
