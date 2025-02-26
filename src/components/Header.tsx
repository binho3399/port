"use client";
import Link from "next/link";

const Header = () => {
  return (
    <header className=" text-white py-4 px-6 ">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="text-4xl font-bold">
          <Link href="/">
            <span className="font-agnes">BinH</span> {/* Update with actual logo */}
          </Link>
        </div>

        <div className="flex gap-6 items-center">
          {/* Navigation Links */}
          <nav className="hidden md:flex space-x-6">
            <Link href="/about" className="text-gray-300 hover:text-white transition">
              About Binh
            </Link>
          </nav>

          {/* CTA Button */}
          <Link href="/contact">
            <button className="group border border-white text-white px-5 py-2 rounded-full flex items-center hover:bg-white hover:text-black transition">
              Let's work together
              {/* <span className="ml-2">→</span> */}
              <span className="material-icons ml-2 text-white group-hover:text-black transition">
                arrow_right_alt
              </span>
              {/* <ArrowRightAltIcon className="ml-2 text-white hover:text-black transition" /> */}
            </button>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;