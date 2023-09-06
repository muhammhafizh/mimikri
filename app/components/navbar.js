"use client";

import Image from "next/image";
import { useState } from "react";
import Logo from "/public/logo.svg";
import Hamburger from "/public/hamburger.svg";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50">
      <div className="container mx-auto p-0 md:p-3 md:flex bg-white">
        <div className="flex">
          <Image
            src={Logo}
            alt="Mimikri Supply Logo"
            className="w-32 md:w-52"
          />
          <button
            className="md:hidden mt-1 ml-auto"
            onClick={() => setOpen(!open)}
          >
            <Image src={Hamburger} width={50} height={50} />
          </button>
        </div>
        <div
          className={`ms-auto my-8 md:space-x-10 md:flex bg-white ${
            open ? "space-x-0" : "hidden"
          }`}
        >
          <a href="#catalogue">
            <button className="font-medium block ps-9 md:ps-0 text-black">
              CATALOGUE
            </button>
          </a>
          <a href="#fashion">
            <button className="font-medium block ps-9 md:ps-0 my-1 text-black md:my-0">
              FASHION
            </button>
          </a>
          <a href="#favourite">
            <button className="font-medium block ps-9 md:ps-0 mb-2 text-black md:mb-0">
              FAVOURITE
            </button>
          </a>
          <a href="#lifestyle">
            <button className="font-medium block ps-9 md:ps-0 mb-2 text-black md:mb-0">
              LIFESTYLE
            </button>
          </a>
          {/* <a href="/Register">
            <button className="bg-blue-400 px-3 py-1 text-white uppercase hover:bg-blue-300 md:hidden">
              Get started
            </button>
          </a> */}
        </div>
        {/* <a href="/Register">
          <button className="bg-blue-400 px-3 py-1 text-white uppercase hover:bg-blue-300 hidden md:inline">
            Get started
          </button>
        </a> */}
      </div>
    </nav>
  );
}
