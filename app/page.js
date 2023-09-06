import CatalogueSection from "./components/mainBody";
import HeaderSection from "./components/mainHeader";
import Navbar from "./components/navbar";

export default function Home() {
  return (
    <div className="bg-white">
      <Navbar />
      <HeaderSection />
      <CatalogueSection />
    </div>
  );
}
