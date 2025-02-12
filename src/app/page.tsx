import { FaBox, FaGlobe, FaTruck } from "react-icons/fa";
import { AboutSection } from "./components/aboutSection";
import { CTASection } from "./components/ctaSection";
import Footer from "./components/footer";
import { Header } from "./components/header";
import { Hero } from "./components/hero";
import { PartnersSection } from "./components/partnerSection";
import { ServicesSection } from "./components/serviceSection";
import { WhyChooseUsSection } from "./components/whyChooseUs";
import { RiSeedlingLine } from "react-icons/ri";
import { BsFillCreditCard2BackFill } from "react-icons/bs";

export default function Home() {
  const servicesSectionProps = {
    subtitle: "OUR SERVICE",
    title: "SERVICES & PRODUCTS",
    services: [
      {
        icon: RiSeedlingLine,
        title: "Export Services",
        description: "We export high-quality oil seeds, pulses, and coffee.",
        link: "#",
      },
      {
        icon: BsFillCreditCard2BackFill,
        title: "Banking Solutions",
        description:
          "Providing personalization machines and EMV solutions for banking.",
        link: "#",
        highlight: true, // This will have an orange background
      },
      {
        icon: FaTruck,
        title: "Vehicle Tires",
        description:
          "Supplying a wide range of vehicle tires in different sizes.",
        link: "#",
      },
    ],
  };

  return (
    <main>
      <Header />
      <Hero title="" />
      <AboutSection />
      <ServicesSection {...servicesSectionProps} />
      <PartnersSection />
      <WhyChooseUsSection />
      <CTASection />
      <Footer />
    </main>
  );
}
