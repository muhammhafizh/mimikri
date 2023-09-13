import Image from "next/image";
import Partner1 from "/public/Partner1.svg";
import Partner2 from "/public/Partner2.svg";
import Partner3 from "/public/Partner3.svg";
import Partner4 from "/public/Partner4.svg";
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
  ];

  return (
    <div className="w-full container mx-auto">
      <h1 className="text-center font-bold text-2xl">Our Partner</h1>
      <div className="h-[150px] m-auto overflow-hidden relative w-auto my-7">
        <ul className="flex w-[calc(250px*14)] animate-scroll">
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
