"use client";

import Image from "next/image";
import Catalogue1 from "/public/4.png";
import Catalogue2 from "/public/5.png";
import Catalogue3 from "/public/6.png";
import Catalogue4 from "/public/7.png";
import Catalogue5 from "/public/8.png";
import Catalogue6 from "/public/9.png";
import Arrow from "/public/Arrow.svg";

export default function CatalogueSection() {
  const dataCatalogue = [
    {
      id: 0,
      image: Catalogue1,
      subtitle: "Hoodies",
    },
    {
      id: 1,
      image: Catalogue2,
      subtitle: "T-Shirt",
    },
    {
      id: 2,
      image: Catalogue3,
      subtitle: "Jacket",
    },
    {
      id: 3,
      image: Catalogue4,
      subtitle: "Bomber",
    },
    {
      id: 4,
      image: Catalogue5,
      subtitle: "Jersey",
    },
    {
      id: 5,
      image: Catalogue6,
      subtitle: "Hats",
    },
  ];

  return (
    <main className="mt-16 md:mt-0 container mx-auto m-20" id="catalogue">
      <h1 className="font-bold text-center text-3xl text-black mb-5">
        Our Product
      </h1>
      <div className="carousel w-screen md:w-auto mx-auto">
        {dataCatalogue?.map((data) => {
          return (
            <div key={data.id} className="carousel-item flex flex-col">
              <Image src={data.image} width="auto" height={300} />
              <div className="flex w-64 -mt-7">
                <section className="ms-7">
                  <h1 className="font-bold text-black">{data.subtitle}</h1>
                  <p className="font-light text-gray-400">explore now</p>
                </section>
                <button className="ms-auto">
                  <Image src={Arrow} width={20} height={20} />
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </main>
  );
}
