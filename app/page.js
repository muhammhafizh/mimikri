import dynamic from "next/dynamic";

const Navbar = dynamic(() => import("./components/navbar"), { ssr: false });
const HeaderSection = dynamic(() => import("./components/mainHeader"), {
  ssr: false,
});
const CatalogueSection = dynamic(() => import("./components/mainBody"), {
  ssr: false,
});
const ServicesSection = dynamic(() => import("./components/servicesSection"), {
  ssr: false,
});
const PartnerSection = dynamic(() => import("./components/partnerSection"), {
  ssr: false,
});
const ProjectsSection = dynamic(() => import("./components/projectsSection"), {
  ssr: false,
});
const EmailSection = dynamic(() => import("./components/sectionAffiliate"), {
  ssr: false,
});
const FooterSection = dynamic(() => import("./components/footerSection"), {
  ssr: false,
});

const TestimoniSection = dynamic(() => import("./components/testimoniPage"), {
  ssr: false,
});

export default function Home() {
  return (
    <>
      <Navbar />
      <HeaderSection />
      <CatalogueSection />
      <ServicesSection />
      <PartnerSection />
      <ProjectsSection />
      <TestimoniSection />
      <EmailSection />
      <FooterSection />
    </>
  );
}
