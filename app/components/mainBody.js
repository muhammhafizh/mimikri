import Image from "next/image";
import Catalogue1 from "/public/Catalogue1.svg";
import Catalogue2 from "/public/Catalogue2.svg";
import Catalogue3 from "/public/Catalogue3.svg";
import Arrow from "/public/Arrow.svg";

export default function CatalogueSection() {
  const dataCatalogue = [
    {
      image: Catalogue1,
      subtitle: "Hoodies & Sweetshirt",
    },
    {
      image: Catalogue2,
      subtitle: "Coats & Parkas",
    },
    {
      image: Catalogue3,
      subtitle: "Tees & T-Shirt",
    },
  ];

  return (
    <main className="container mx-auto p-0 md:p-3 my-20" id="catalogue">
      <h1 className="font-bold text-center text-3xl text-black">Our Product</h1>
      <div className="my-8 md:mt-28 md:ms-24 md:flex md:justify-between">
        {dataCatalogue?.map((data) => {
          return (
            <div
              key={data.index}
              className="w-60 h-80 md:h-96 mx-auto md:mx-0 mb-36 md:mb-0 md:me-20 rounded-md"
            >
              <Image src={data.image} width="auto" height="auto" />
              <div className="flex">
                <section className="mt-3 me-auto">
                  <h1 className="font-bold text-black">{data.subtitle}</h1>
                  <p className="font-light text-gray-400">explore now</p>
                </section>
                <button>
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
