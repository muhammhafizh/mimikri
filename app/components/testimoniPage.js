import Image from "next/image";
import Ipur from "/public/Ipur.svg";

export default function TestimoniSection() {
  return (
    <main className="bg-white">
      <main
        className="container mx-auto p-0 mb-28 md:mb-14 md:p-3"
        id="testimoni"
      >
        <div className="mt-10 md:mt-0 flex flex-col md:flex-row">
          <section className="md:ps-28 md:pt-14">
            <h1 className="text-black text-2xl md:text-4xl font-bold text-center md:text-left">
              What people say
            </h1>
            <h2 className="text-yellow-400 text-center text-2xl md:text-4xl font-bold md:text-left">
              about us
            </h2>
            <p className="text-gray-600 font-medium my-5 text-center md:text-right text-sm md:text-lg">
              Our Clients send us bunch of smilies with our services and
              product.
            </p>
          </section>
          <div className="relative w-96 bg-white mx-auto mt-10 py-10 px-3 rounded-2xl shadow-xl hover:bg-neutral-100">
            <Image
              src={Ipur}
              width={70}
              alt="Mimikri-testimoni-Section"
              className="absolute top-0 -mt-8 md:-mt-6 -ms-2 md:-ms-12"
            />
            <p className="text-gray-600 font-medium mb-5">
              “No Doubt, Shirt product its very cool within beautiful services
              towards client,we have 3 times purchased with mimikri supply..”
            </p>

            <section className="-mb-8">
              <p className="text-black font-bold">Iwan Purwanto</p>
              <p className="text-gray-600 font-medium">
                Learning Manager, Bank BTN
              </p>
            </section>
          </div>
        </div>
      </main>
    </main>
  );
}
