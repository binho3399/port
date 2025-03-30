"use client";
import Link from "next/link";

const Header = () => {
  return (
    <header className=" text-white py-6 px-6 ">
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
            <Link href="/aboutme" className="text-gray-300 hover:text-accent-500 transition">
              About Binh
            </Link>
          </nav>

          {/* CTA Button */}
          <Link href="/contact">
            <button className="group relative flex border border-white text-white px-5 py-2 rounded-full items-center overflow-hidden">
              <span className="absolute left-0 w-0 h-full bg-accent-500 transition-all duration-300 esae-out group-hover:w-full z-[-1]"></span>
              <span className="relative z-10 group-hover:text-black transition-colors">Let's work together</span>
              <span className="material-icons z-10 ml-2 relative z-10 text-white group-hover:text-black transition-colors">
                arrow_right_alt
              </span>
            </button>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;