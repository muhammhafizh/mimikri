"use client";

import Image from "next/image";
import { useState } from "react";
import Logo from "/public/logo.svg";
import Hamburger from "/public/hamburger.svg";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white">
      <nav className="container mx-auto p-0 md:p-3 md:flex bg-white">
        <div className="flex">
          <Image
            src={Logo}
            alt="Mimikri Supply Logo"
            className="w-32 md:w-52"
          />
          <button
            className="md:hidden mt-1 ml-auto"
            onClick={() => setOpen(!open)}
            id="hamburger"
            aria-label="hamburger menu to see navigation"
          >
            <Image src={Hamburger} width={50} height={50} alt="Hamburger" />
          </button>
        </div>
        <ul
          className={`ms-auto md:my-8 space-y-3 py-3 md:py-0 md:space-y-0 md:space-x-10 md:flex bg-white ${
            open ? "space-x-0" : "hidden"
          }`}
        >
          <li>
            <a
              href="#aboutUs"
              role="link"
              aria-label="to mimikri about section"
              className="font-medium block ps-9 md:ps-0 mb-2 text-black md:mb-0"
            >
              ABOUT US
            </a>
          </li>
          <li>
            <a
              href="#product"
              role="link"
              aria-label="to mimikri product section"
              className="font-medium block ps-9 md:ps-0 mb-2 text-black md:mb-0"
            >
              OUR PRODUCT
            </a>
          </li>
          <li>
            <a
              href="#service"
              role="link"
              aria-label="to services section"
              className="font-medium block ps-9 md:ps-0 mb-2 text-black md:mb-0"
            >
              SERVICES
            </a>
          </li>
          <li>
            <a
              href="#project"
              role="link"
              aria-label="to projects section"
              className="font-medium block ps-9 md:ps-0 mb-2 text-black md:mb-0"
            >
              RECENT PROJECT
            </a>
          </li>
          <li>
            <a
              href="#contactUs"
              role="link"
              aria-label="to contact us section"
              className="font-medium block ps-9 md:ps-0 mb-2 text-black md:mb-0"
            >
              CONTACT US
            </a>
          </li>
        </ul>
        {/* <div
          className={`ms-auto md:my-8 space-y-3 py-3 md:py-0 md:space-y-0 md:space-x-10 md:flex bg-white ${
            open ? "space-x-0" : "hidden"
          }`}
        >
          
          <a href="/Register">
            <button className="bg-blue-400 px-3 py-1 text-white uppercase hover:bg-blue-300 md:hidden">
              Get started
            </button>
          </a>
        </div> */}
        {/* <a href="/Register">
          <button className="bg-blue-400 px-3 py-1 text-white uppercase hover:bg-blue-300 hidden md:inline">
            Get started
          </button>
        </a> */}
      </nav>
    </header>
  );
}
