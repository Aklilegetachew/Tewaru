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
  const content = [
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  ];

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
      title: "Custom machines",
      subtitle: "Bank Solutions",
      image: "/personalization.png?height=300&width=400",
      link: "/contact",
      bgColor: "bg-[#E6C69C]",
    },
    {
      title: "ATM Cards",
      subtitle: "Bank Solution",
      image: "/atms.png?height=300&width=400",
      bgColor: "bg-[#F9A23F]",
    },
    {
      title: "EMV Solution",
      subtitle: "Frame 78",
      image: "/emv.png?height=300&width=400",
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
      title: "ATM Cards ",
      description: "Secure, high-quality cards for banking transactions",
      imageUrl: "./atms.png",
    },
    {
      title: "Personalization Machines & EMV Solutions",
      description:
        "Machines used for encoding customer details on ATM, credit, and ID cards",
      imageUrl: "./personalization.png",
    },
    {
      title: "ID Card Printers & Consumables",
      description:
        "Essential equipment for banks, businesses, and government institutions for identity verification.",
      imageUrl: "./S3610.webp",
    },
    {
      title: "S7000",
      description:
        "2000 cph • Centralized card issuance • Mailing and fulfilment inline • Flat and embossed cards • EMV compliant • laser marking technology option.",
      imageUrl: "./S7000.webp",
    },
    {
      title: "S6200",
      description:
        "Complete printing and embossing solution designed for centralized financial card issuance",
      imageUrl: "./S600.webp",
    },

    {
      title: "S5200E",
      description:
        "Entry level solution for low to mid volume card embossing • Indenting and tipping features • EMV compliance • Multiple encoding options",
      imageUrl: "./S5200E.webp",
    },
  ];
  return (
    <main>
      <Header />
      <Hero title={"IMPORT"} />
      <BankingSolutions
        cards={bankingCards}
        title="Banking And Financial Equipment"
        highlightWord=""
      />
      <IdCardSection
        title="IDENTIFICATION"
        highlightedWord=""
        mainHeading="Banking & Financial Equipment"
        description="We provide financial institutions with high-quality banking and identification solutions. Our imported products help banks enhance security, streamline operations, and offer customers a seamless banking experience."
        additionalText=""
        imageUrl="./atmhand.jpeg"
      />

      <ProductGrid products={products} />

      <RightCardSection
        title="Automotive And Industrial Supplies"
        highlightedWord=""
        mainHeading=""
        description="We import durable, high-performance vehicle tyres to ensure safety and efficiency in transportation. Our tyres meet international quality standards, catering to various vehicle types, from passenger cars to heavy-duty trucks."
        additionalText=""
        imageUrl="./tires.jpeg"
      />

      <IdCardSection
        title="Promotional & Business Materials"
        highlightedWord=""
        mainHeading=""
        description="We supply businesses with high-quality promotional materials to support their marketing and branding needs. From personalized diaries to custom giveaways, we help companies enhance their corporate identity."
        additionalText=" Custom-branded items like diaries, pens, and corporate gifts. Educational, professional, and business-related printed materials."
        imageUrl="./books.png"
      />

      {/* <SectionWithImage
        title="AFTER-SALES"
        highlightedWord="SUPPORT"
        icon="headphones"
        heading="After-Sales Support"
        subheading="Your Trusted Partner for Maintenance and Support"
        description="We understand that purchasing equipment is just the first step. Our after-sales support ensures that your investment continues to perform optimally over time. We provide expert maintenance and support services for a variety of specialized equipment."
        imageUrl="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-DHBgcfS42P6lJvB3JcOQWHwRlp2v7R.png"
        imagePosition="right"
      /> */}

      <Footer />
    </main>
  );
}
