import Image from "next/image";
import Partner1 from "/public/catalogue jaket dan baju.png";
import Partner2 from "/public/Partner2.svg";
import Partner3 from "/public/Partner3.svg";
import Partner4 from "/public/Maybank.svg";
import Partner5 from "/public/Partner5.svg";
import Partner6 from "/public/Partner6.svg";

export default function PartnerSection() {
  const imageData = [
    Partner1,
    Partner2,
    Partner3,
    Partner4,
    Partner5,
    Partner6,
    Partner1,
    Partner2,
    Partner3,
    Partner4,
    Partner5,
    Partner6,
  ];

  return (
    <div className="w-full container mx-auto">
      <h1 className="text-center font-bold text-3xl">Our Partner</h1>
      <div className="h-[250px] m-auto overflow-hidden relative w-auto my-7">
        <ul className="flex w-[calc(250px*14)] justify-center items-center animate-scroll pt-5">
          {imageData?.map((image, index) => {
            return (
              <li className="w-60" key={index}>
                <Image src={image} width={200} height={200} />
              </li>
            );
          })}
          {/* <li className="w-[250px]">Image 2</li> */}
        </ul>
      </div>
    </div>
  );
}
