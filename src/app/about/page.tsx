import { FaDollarSign, FaTruck, FaBox, FaGlobe } from "react-icons/fa";
import { InfoSection } from "../components/background";
import { ExpertiseSection } from "../components/Expertis";
import Footer from "../components/footer";
import { Header } from "../components/header";
import { Hero } from "../components/hero";
import { ServicesSection } from "../components/serviceSection";
import { HiDocument } from "react-icons/hi";
import { BankingSolutions } from "../components/solutionsCards";

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
      <BankingSolutions
        cards={bankingCards}
        title="BANKING AND CARD SOLUTIONS"
        highlightWord="AND"
      />
      <Footer />
    </main>
  );
}
