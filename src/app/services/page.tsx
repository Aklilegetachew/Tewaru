import { FaDollarSign, FaTruck, FaBox, FaGlobe } from "react-icons/fa";
import { InfoSection } from "../components/background";
// import { ExpertiseSection } from "../components/Expertis";
import Footer from "../components/footer";
import { Header } from "../components/header";
import { Hero } from "../components/hero";
import { ServicesSection } from "../components/serviceSection";
import { HiDocument } from "react-icons/hi";
import { BankingSolutions } from "../components/solutionsCards";
import { ExpertiseSection } from "../components/expertis";
import IdCardSection from "../components/leftCard";
import RightCardSection from "../components/rightCard";

import { ProductGrid } from "../components/product-grid";
import { SectionWithImage } from "../components/section-with-image";

export default function Home() {
  const imageUrl = "/skyline.jpg";

  const expertiseData = {
    subtitle: "WHY CHOOSE US",
    title: "WHAT WE DO",
    description: [
      "Lorem ipsum dolor sit amet, consectetur. Arcu viverra amet augue mauris fames eros cum varius felis. Malesuada ullamcorper lectus pulvinar nulla fermentum lacus. Aliquam sagittis cras viverra lacus neque in. Eu id integer donec sodales nunc tellus fusce plates.",
      "Lorem ipsum dolor sit amet, consectetur. Arcu viverra amet augue mauris fames eros cum varius felis. Malesuada ullamcorper lectus pulvinar nulla fermentum lacus. Aliquam sagittis cras viverra lacus neque in.",
    ],
    expertiseItems: [
      {
        icon: <FaTruck />,
        title: "24 HOURS EMERGENCY SERVICE",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
      },
      {
        icon: <HiDocument />,
        title: "FLAT RATE FEES",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
      },
      {
        icon: <FaTruck />,
        title: "24 HOURS EMERGENCY SERVICE",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
      },
    ],
  };

  const bankingCards = [
    {
      title: "Oil Seeds",
      subtitle: "Sesame, Niger seeds, Sunflower seeds",
      image: "/OilSeeds.png?height=300&width=400",
      link: "/contact",
      bgColor: "bg-[#E6C69C]",
    },
    {
      title: "Pulses & Cereals",
      subtitle: "Lentils, Chickpeas, Beans",
      image: "/lentisBgRm.png?height=400&width=500",
      bgColor: "bg-[#F9A23F]",
    },
    {
      title: "Coffee",
      subtitle: "Coffee Beans, Ground Coffee",
      image: "/CoffeeBeanCupRm.png?height=300&width=400",
      bgColor: "bg-[#E6E0FA]",
    },
  ];

  const servicesSectionProps = {
    subtitle: "OUR ",
    title: "VISION & MISSION",
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

  const products = [
    {
      title: "Groundnuts (Peanuts)",
      description: "Secure, high-quality cards for banking transactions",
      imageUrl: "./peanuts.jpg",
    },
    {
      title: "Soybeans",
      description:
        " Our soybeans are grown under optimal conditions, ensuring top-grade quality and high protein content.",
      imageUrl: "./soyabeans.avif",
    },
    {
      title: "Sunflower Seeds",
      description:
        "Our sunflower seeds are harvested at their peak, ensuring freshness and quality.",
      imageUrl: "./Sunflower.jpeg",
    },
    {
      title: "Sesame Seeds",
      description:
        "These seeds are perfect for oil production, cooking, and use in various products like tahini.",
      imageUrl: "./sesameSeeds.jpeg",
    },

    {
      title: "Lentils",
      description:
        "Our premium-quality lentils are grown in Ethiopia’s fertile soils, ensuring top-notch taste and nutritional value.",
      imageUrl: "./lenties.gif",
    },
    {
      title: "Chickpeas (Garbanzo Beans)",
      description:
        "Our chickpeas are carefully harvested to preserve their size, texture, and nutritional benefits.",
      imageUrl: "./chickePeas.avif",
    },
    {
      title: "Oats",
      description:
        "Our oats are harvested with care and can be used in oatmeal, baking, or as an ingredient in healthy snacks and cereals.",
      imageUrl: "./Oats.jpeg",
    },
    {
      title: "Maize (Corn)",
      description:
        "Our maize is carefully cultivated for its high yield, excellent quality, and wide range of uses in food, feed, and industrial production.",
      imageUrl: "./Maize.jpeg",
    },
  ];
  return (
    <main>
      <Header />
      <Hero title={"SERVICES"} />

      <SectionWithImage
        title="AFTER-SALES"
        highlightedWord="SUPPORT"
        icon="headphones"
        heading="After-Sales Support"
        subheading="Your Trusted Partner for Maintenance and Support"
        description="We understand that purchasing equipment is just the first step. Our after-sales support ensures that your investment continues to perform optimally over time. We provide expert maintenance and support services for a variety of specialized equipment."
        imageUrl="./aftersales.jpg"
        imagePosition="right"
      />

      <SectionWithImage
        title="Banking Solutions"
        highlightedWord="Solutions"
        icon="bank"
        heading="Banking Solutions"
        subheading="Innovative Services for Financial Institutions"
        description="We specialize in providing cutting-edge solutions to local banks and financial institutions, ensuring they stay ahead in the fast-evolving financial sector. Our comprehensive services include"
        imageUrl="./bankingSolnImgRm.png"
        imagePosition="left"
      />

      <Footer />
    </main>
  );
}
