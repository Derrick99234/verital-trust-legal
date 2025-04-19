import Image from "next/image";
import { GoLaw } from "react-icons/go";
import { FaAward } from "react-icons/fa";
import { TbWorldCheck } from "react-icons/tb";
import Header from "./components/Header/Header";
import Section2 from "./components/Section2";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <section
          style={{
            backgroundImage:
              'url("https://cdn.pixabay.com/photo/2019/11/11/10/05/law-4617873_640.jpg")',
            backgroundSize: "cover",
            position: "relative",
            backgroundPosition: "center",
            width: "100%",
            height: "90vh",
          }}
          className="flex justify-between items-center px-10 text-white"
        >
          <div className="absolute bg-red-900/60 inset-0"></div>
          <div className="z-50">
            <span className="text-lg uppercase font-mono">
              Home of Law & Orders
            </span>
            <h2 className="text-6xl my-3 font-semibold">EXPERTS OF JUSTICE</h2>
            <p className="text-sm max-w-lg">
              Diam leo vitae tortor mauris faucibus odio nullam enim. At dolor
              pellentesque eget et purus. Purus mauris eget maecenas placerat
              vehicula tortor massa.
            </p>
            <button className="mt-16 py-2 px-14 bg-red-800 text-white">
              Explores
            </button>
          </div>
        </section>
        <section className="bg-red-900 text-white flex items-center justify-around p-10">
          <div className="flex items-center justify-center gap-3">
            <GoLaw className="text-6xl" />
            <div className="">
              <h2 className="text-xl">Best Law Firm</h2>
              <span className="text-xs">45 Years of Experience</span>
            </div>
          </div>
          <div className="flex items-center justify-center gap-3">
            <FaAward className="text-6xl" />
            <div className="">
              <h2 className="text-xl">Best Law Firm</h2>
              <span className="text-xs">45 Years of Experience</span>
            </div>
          </div>
          <div className="flex items-center justify-center gap-3">
            <TbWorldCheck className="text-6xl" />
            <div className="">
              <h2 className="text-xl">Best Law Firm</h2>
              <span className="text-xs">45 Years of Experience</span>
            </div>
          </div>
        </section>
        <Section2 />
      </main>
    </>
  );
}
