import { FaDollarSign, FaTruck, FaBox, FaGlobe } from "react-icons/fa";

import Footer from "../components/footer";
import { Header } from "../components/header";
import { Hero } from "../components/hero";
import { HiDocument } from "react-icons/hi";

import ContactUsForm from "../components/ContactUsForm";

export default function Home() {
  
  return (
    <main>
      <Header />
      <Hero title={"CONTACT US"} />
      <ContactUsForm />
      <Footer />
    </main>
  );
}
