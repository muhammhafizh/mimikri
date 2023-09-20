import FooterSection from "./components/footerSection";
import CatalogueSection from "./components/mainBody";
import HeaderSection from "./components/mainHeader";
import Navbar from "./components/navbar";
import PartnerSection from "./components/partnerSection";
import ProjectsSection from "./components/projectsSection";
import EmailSection from "./components/sectionAffiliate";
import ServicesSection from "./components/servicesSection";

export default function Home() {
  return (
    <>
      <Navbar />
      <HeaderSection />
      <CatalogueSection />
      <ServicesSection />
      <PartnerSection />
      <ProjectsSection />
      <EmailSection />
      <FooterSection />
    </>
  );
}
