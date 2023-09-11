import Image from "next/image";
import HeroSection from "/public/section.svg";

export default function HeaderSection() {
  return (
    <main className="container mx-auto p-0 md:p-3">
      <div className="mt-10 md:mt-0 flex flex-col-reverse md:flex-row">
        <section className="md:ps-28 md:pt-14 space-y-10 md:space-y-5">
          <h1 className="text-black font-medium text-2xl md:text-5xl mb-10 text-center md:text-left">
            <span className="text-yellow-400 font-bold">Hello</span>, We Are{" "}
            <span className="text-black font-black">Mimikri Supply</span>
          </h1>
          <p className="text-gray-400 md:pe-60 text-center md:text-left">
            A Creative Clothes Manufacturing that has been help organization or
            company since 2020, Based in Tangerang Selatan.
          </p>
          <p className="text-gray-400 md:pe-60 text-center md:text-left">
            We believe <span className="text-gray-500 font-bold">Identity</span>{" "}
            is a must towards building a great company and organization with
            creating <span className="text-gray-500 font-bold">Identity</span>{" "}
            is a way to introduce easily and have a big impact for organization
            growth.
          </p>
          <p className="text-gray-400 text-center md:text-left">
            So let's work together to make a bigger impact
          </p>
          <div className="flex justify-center md:justify-normal">
            <button className="px-3 py-2 border border-black text-black font-medium rounded-md hover:bg-black hover:text-white self-center">
              Discover now
            </button>
          </div>
        </section>
        <div className="ms-auto">
          <Image src={HeroSection} width={1000} />
        </div>
      </div>
    </main>
  );
}
