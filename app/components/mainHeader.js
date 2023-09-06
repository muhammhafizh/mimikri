import Image from "next/image";
import HeroSection from "/public/Herosection2.svg";

export default function HeaderSection() {
  return (
    <main className="container mx-auto p-0 md:p-3 md:flex">
      <div className="mt-10 md:mt-0">
        <div className="relative">
          <Image src={HeroSection} width={1550} height={100} />
        </div>
        {/* <div className="">
          <h1>LET’S EXPLORE UNIQUE CLOTHES</h1>
        </div> */}
      </div>
    </main>
  );
}
