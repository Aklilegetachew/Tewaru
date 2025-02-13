import { FaDollarSign, FaTruck, FaBox, FaGlobe, FaCogs } from "react-icons/fa";
import { InfoSection } from "../components/background";
// import { ExpertiseSection } from "../components/Expertis";
import Footer from "../components/footer";
import { Header } from "../components/header";
import { Hero } from "../components/hero";
import { ServicesSection } from "../components/serviceSection";
import { HiDocument } from "react-icons/hi";
import { BankingSolutions } from "../components/solutionsCards";
import { ExpertiseSection } from "../components/expertis";
import { RiSeedlingLine } from "react-icons/ri";
import { BsFillCreditCard2BackFill } from "react-icons/bs";

export default function Home() {
  const content = [
    "Based on the Memorandum and Article of Associations, Tewaru Trading Plc is committed to bring an all round effort to bring effective, efficient and quality office equipments and stationery supply and after sales service, by employing the most appropriate management techniques and modern technologies. ",
    "Accordingly, Tewaru Trading has made its vision, mission and objectives clear and is putting every effort to play a major role in the cost reduction and making the company profitable and contributes its effort to the nation development in general.",
  ];

  const imageUrl = "/skyline.jpg";

  const expertiseData = {
    subtitle: "WHY CHOOSE US",
    title: "WHAT WE DO",
    description: [
      "Tewaru Trading Plc is committed to solving day-to-day problems simply and efficiently. We differentiate ourselves through our commitment to providing quality products, timely delivery, and exceptional after-sales service. Drawing on our extensive resources and experience, we have earned a solid reputation, giving our customers confidence in their investments.",
      "We specialize in importing and exporting a wide range of products, including office equipment, banking and financial instruments, and more. Our clients trust us for our reliable solutions, expert handling, and strong customer support. We pride ourselves on delivering top-quality products and services tailored to the needs of both local and international markets.",
    ],
    expertiseItems: [
      {
        icon: <FaTruck />,
        title: "EXPORT SERVICES",
        description:
          "We export a variety of high-quality products including oil seeds, pulses, cereals, and coffee. We are dedicated to providing efficient and reliable export services, ensuring timely deliveries and maintaining the highest standards of quality.",
      },
      {
        icon: <HiDocument />,
        title: "IMPORT SERVICES",
        description:
          "Tewaru Trading Plc is involved in importing critical products such as ATM cards, personalization machines, EMV solutions, ID card printers, vehicle tyres, promotional materials, and printed books. We focus on delivering high-quality products at competitive prices.",
      },
      {
        icon: <FaCogs />,
        title: "AFTER SALES SERVICES & MAINTENANCE",
        description:
          "We provide comprehensive after-sales services, including maintenance for banking financial instruments (e.g., personalization machines), with qualified expertise in handling spare parts and consumables. Our dedicated support ensures the longevity and optimal performance of the products we supply.",
      },
      {
        icon: <FaTruck />,
        title: "OUR NATIONAL CLIENTS",
        description:
          "We proudly serve major national clients such as Bank of Abyssinia, Premier Switch Solution, EthSwitch S.C, and more. These organizations trust us for our efficient services and high-quality products, knowing that we will meet their needs and exceed expectations.",
      },
      {
        icon: <HiDocument />,
        title: "OUR INTERNATIONAL CLIENTS",
        description:
          "We also have a strong international presence, serving clients like Next LLC and TechPerso LLC. Our international clients rely on us for our consistency, professionalism, and expertise in delivering top-notch products and services.",
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
        title: "Import Services",
        description:
          "Supplying a wide range of vehicle tires in different sizes.",
        link: "#",
      },
    ],
  };
  return (
    <main>
      <Header />
      <Hero title={"ABOUT"} />
      <InfoSection
        title={"Background History"}
        content={content}
        imageUrl={imageUrl}
      />
      <ServicesSection {...servicesSectionProps} />
      <div className="min-h-screen bg-white">
        <ExpertiseSection {...expertiseData} />
      </div>

      <Footer />
    </main>
  );
}
