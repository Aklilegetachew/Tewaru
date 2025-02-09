import { FaBox, FaGlobe, FaTruck } from "react-icons/fa";
import { AboutSection } from "./components/aboutSection";
import { CTASection } from "./components/ctaSection";
import Footer from "./components/footer";
import { Header } from "./components/header";
import { Hero } from "./components/hero";
import { PartnersSection } from "./components/partnerSection";
import { ServicesSection } from "./components/serviceSection";
import { WhyChooseUsSection } from "./components/whyChooseUs";

export default function Home() {
  const servicesSectionProps = {
    subtitle: "OUR SERVICE",
    title: "SERVICES & PRODUCTS",
    services: [
      {
        icon: FaGlobe,
        title: "SERVICE 1",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
        link: "#",
      },
      {
        icon: FaBox,
        title: "SERVICE 2",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
        link: "#",
        highlight: true, // This will have an orange background
      },
      {
        icon: FaTruck,
        title: "SERVICE 3",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
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
