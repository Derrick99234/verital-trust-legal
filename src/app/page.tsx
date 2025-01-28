import Image from "next/image";
import { LuPhone } from "react-icons/lu";
import { TbClockHour8 } from "react-icons/tb";
import { CgArrowLongLeftL } from "react-icons/cg";
import Link from "next/link";
import { IoIosSquare } from "react-icons/io";

export default function Home() {
  return (
    <main>
      <header className="flex h-20">
        <h2 className="font-mono w-[100px] flex justify-center items-center text-2xl font-semibold">
          LOGO
        </h2>
        <nav className="w-full">
          <div className=" flex gap-3 border-b-2 p-1 pl-5">
            <div className="flex gap-2 items-center">
              <LuPhone /> +234 916 1965 510
            </div>
            <div className="flex gap-2 items-center">
              <TbClockHour8 /> Mon - Fri 7:30am - 6:30pm
            </div>
          </div>
          <div className="p-1 pl-5 flex items-center justify-between">
            <ul className="flex gap-4 items-center">
              <li>
                <Link href="#" className="flex items-center gap-2">
                  <CgArrowLongLeftL /> Home
                </Link>
              </li>
              <li>
                <Link href="#" className="flex items-center gap-2">
                  <IoIosSquare /> About
                </Link>
              </li>
              <li>
                <Link href="#" className="flex items-center gap-2">
                  <IoIosSquare /> Career
                </Link>
              </li>
              <li>
                <Link href="#" className="flex items-center gap-2">
                  <IoIosSquare /> Contact
                </Link>
              </li>
            </ul>
            <button className="py-2 px-5 border border-amber-700 text-amber-700 font-semibold">
              Free consulation
            </button>
          </div>
        </nav>
      </header>
    </main>
  );
}
