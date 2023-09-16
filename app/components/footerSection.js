"use client";

import Image from "next/image";
// import { useState } from "react";
// import Facebook from "/public/facebook.svg";
// import LinkedIn from "/public/linkedin.svg";
// import Instagram from "/public/instagram.svg";
// import Twitter from "/public/twitter.svg";
import Down from "/public/VectorDown.svg";
import Up from "/public/VectorUp.svg";

export default function FooterSection() {
  // const [open, setOpen] = useState(false);
  const TextData = [
    {
      id: 0,
      text: "Location",
      subText: "Ruko Cendana Residence Blok A2 No. 6 Tangerang Selatan, 15416",
    },
    {
      id: 1,
      text: "Phone",
      subText: "+62 859-4575-0647",
    },
    {
      id: 2,
      text: "Email",
      subText: "Mimikriindonesia19@gmail.com",
    },
  ];

  const textFooter = [
    {
      title: "Company",
      text: ["About", "Contact Us", "Support", "Careers"],
    },
    {
      title: "Quick Link",
      text: ["Share Locations", "Orders Tracking", "Size Guide", "FAQs"],
    },
    {
      title: "Legal",
      text: ["Terms & conditions", "Privacy Policy"],
    },
  ];

  return (
    <footer className="bottom-0 bg-black">
      <nav className="container mx-auto p-3 md:py-10 md:flex">
        <section className="w-60">
          <h1 className="text-white font-bold">MIMIKRI SUPPLY</h1>
          <p className="text-gray-400 font-light my-3">
            Strengthen your IDENTITY with us.
          </p>
          <div className="flex flex-col">
            <div className="flex">
              <div className="me-3">
                <div className="w-1 h-52 bg-white"></div>
              </div>
              <div className="pt-1 space-y-3">
                {TextData?.map((txt) => {
                  return (
                    <section key={txt.id}>
                      <h1 className="text-white w-72 font-bold">{txt.text}</h1>
                      <p className="text-white font-light">{txt.subText}</p>
                    </section>
                  );
                })}
              </div>
            </div>
          </div>
        </section>
        <div className="ms-auto space-y-2 md:space-y-0 mt-7 md:mt-0 md:flex md:space-x-40">
          {textFooter?.map((txt) => {
            return (
              <div key={txt.index} className="space-y-5">
                <div className="flex md:block">
                  <p className="text-white font-bold me-auto">{txt.title}</p>
                  <button>
                    <Image src={Down} className="md:hidden" />
                  </button>
                </div>
                {txt?.text?.map((textData) => {
                  return (
                    <section key={txt.index} className="hidden md:block">
                      <p className="text-gray-400">{textData}</p>
                    </section>
                  );
                })}
              </div>
            );
          })}
        </div>
      </nav>
    </footer>
  );
}
