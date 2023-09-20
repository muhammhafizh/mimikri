import Image from "next/image";
import BTNprojects from "/public/BTN.png";
import ToyotaProjects from "/public/Toyota.png";
import MaybankProjects from "/public/Maybank.png";
import VooyaProjects from "/public/Vooya.png";

export default function ProjectsSection() {
  const dataProjects = [
    {
      id: 1,
      image: BTNprojects,
      brand: "BTN",
      title: "Documentaries Video",
      subtitle: "SDP by Bank BTN",
    },
    {
      id: 2,
      image: ToyotaProjects,
      brand: "Toyota",
      title: "Documentaries Video",
      subtitle: "Team Building by Toyota",
    },
    {
      id: 3,
      image: MaybankProjects,
      brand: "Maybank",
      title: "Documentaries Video",
      subtitle: "Awarding Super League",
    },
    {
      id: 4,
      image: VooyaProjects,
      brand: "Vooya",
      title: "Documentaries and Vlog Video",
      subtitle: "Vooya",
    },
  ];
  return (
    <main className="bg-white">
      <main
        className="container mx-auto p-0 mb-28 md:pb-10 md:p-3"
        id="project"
      >
        <h1 className="font-semibold text-black italic text-light text-center md:text-left">
          MIMIKRI CREATIVE
        </h1>
        <h2 className="font-bold text-black text-2xl text-center md:text-left">
          RECENT PROJECT
        </h2>
        <div className="grid grid-flow-row justify-items-center md:justify-items-stretch md:grid-cols-2 gap-4 pt-10">
          {dataProjects?.map((data) => {
            return (
              <div
                className="bg-white shadow-xl flex flex-col md:flex-row-reverse rounded-xl w-fit p-7 hover:bg-neutral-100"
                key={data.id}
              >
                <figure className="h-fit">
                  <Image
                    src={data.image}
                    width={300}
                    alt={data.brand}
                    className="w-auto h-auto"
                  />
                </figure>
                <div className="mr-10 space-y-3 mt-5 md:mt-0">
                  <p className="italic text-black">{data.title}</p>
                  <h2 className="font-bold text-black">{data.subtitle}</h2>
                </div>
              </div>
            );
          })}
        </div>
      </main>
    </main>
  );
}
