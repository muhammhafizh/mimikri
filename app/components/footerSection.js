"use client";

import Image from "next/image";
// import { useState } from "react";
import Facebook from "/public/facebook.svg";
import LinkedIn from "/public/linkedin.svg";
import Instagram from "/public/instagram.svg";
import Twitter from "/public/twitter.svg";
import Link from "next/link";

export default function FooterSection() {
  // const [open, setOpen] = useState(false);
  const imageData = [
    {
      id: 0,
      image: Facebook,
      Link: "facebook.com",
    },
    {
      id: 1,
      image: Instagram,
      Link: "https://www.instagram.com/mimikri.id/",
    },
    {
      id: 2,
      image: Twitter,
      Link: "twitter.com",
    },
    {
      id: 3,
      image: LinkedIn,
      Link: "linkedin.com",
    },
  ];

  return (
    <footer className="bottom-0 bg-black">
      <nav className="container mx-auto p-3 md:py-10 md:flex">
        <section className="w-60">
          <h1 className="text-white font-bold">MIMIKRI SUPPLY</h1>
          <p className="text-gray-400 font-light my-3">
            Complete your style with awesome clothes from us.
          </p>
          <div className="flex">
            {imageData?.map((img) => {
              return (
                <Link key={img.id} href={img.Link} className="me-3">
                  <Image
                    src={img.image}
                    width={50}
                    height={50}
                    className="object-cover"
                  />
                </Link>
              );
            })}
          </div>
        </section>
        <div></div>
      </nav>
    </footer>
  );
}
