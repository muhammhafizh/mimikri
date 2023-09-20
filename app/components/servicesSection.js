import Image from "next/image";
import HeroSection from "/public/Services.svg";

export default function ServicesSection() {
  return (
    <main className="bg-white">
      <main className="container mx-auto p-0 mb-28 md:mb-0 md:p-3" id="service">
        <h1 className="text-center font-semibold text-blue-950 text-4xl">
          We Offer Best Services
        </h1>
        <div className="mt-10 md:mt-0 flex flex-col-reverse md:flex-row">
          <section className="md:ps-28 md:pt-14 space-y-10 md:space-y-5">
            <h1 className="text-black font-medium text-3xl md:text-4xl mb-10 text-center md:text-left uppercase">
              Documenter Video
            </h1>
            <p className="text-gray-400 text-center md:text-left text-2xl md:text-4xl">
              We provide video documentary services for event purposes which are
              a direct package with the procurement of clothes
            </p>
          </section>
          <div className="ms-auto">
            <Image
              src={HeroSection}
              width={1000}
              alt="Mimikri-services-Section"
            />
          </div>
        </div>
      </main>
    </main>
  );
}
