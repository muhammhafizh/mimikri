import FooterSection from "./components/footerSection";
import CatalogueSection from "./components/mainBody";
import HeaderSection from "./components/mainHeader";
import Navbar from "./components/navbar";
import PartnerSection from "./components/partnerSection";
import EmailSection from "./components/sectionAffiliate";

export default function Home() {
  return (
    <div className="bg-white">
      <Navbar />
      <HeaderSection />
      <CatalogueSection />
      <PartnerSection />
      <EmailSection />
      <FooterSection />
    </div>
  );
}
