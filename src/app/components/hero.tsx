import { Button } from "@/components/ui/button";
import { StatCard } from "./stat-card";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
// import Polygone from "@/public/polygon.svg";

export const Hero = ({ title }: { title: string }) => {
  let headingContent;

  switch (title) {
    case "ABOUT":
      headingContent = (
        <>
          ABOUT
          <br />
          OUR
          <br />
          <span className="text-primary">JOURNEY</span>
        </>
      );
      break;
    case "IMPORT":
      headingContent = (
        <>
          PRODUCTS
          <br />
          <span className="text-primary">WE</span>
          <br />
          IMPORT
        </>
      );
      break;
    case "SERVICES":
      headingContent = (
        <>
          EXPERT
          <br />
          <span className="text-primary">SERVICES</span>
          <br />
          FOR YOU
        </>
      );
      break;
    case "CONTACT US":
      headingContent = (
        <>
          GET IN
          <br />
          <span className="text-primary">TOUCH</span>
          <br />
          TODAY
        </>
      );
      break;
    case "Home":
      headingContent = (
        <>
          GLOBAL
          <br />
          TRADE MADE
          <br />
          <span className="text-primary">SIMPLE</span>
        </>
      );
      break;
    default:
      headingContent = (
        <>
          GLOBAL
          <br />
          TRADE MADE
          <br />
          <span className="text-primary">SIMPLE</span>
        </>
      );
  }
  return (
    <div className=" relative bg-black overflow-hidden h-screen">
      <div className="h-[80%]">
        {/* Background Truck Image */}
        <div
          className="absolute inset-0 z-0 opacity-10"
          style={{
            backgroundImage: `url("/truck.png")`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />

        {/* Content Section */}
        <div className="container z-10 w-full h-screen  flex justify-between">
          <div className="flex w-full items-center justify-between">
            <div>
              <div className="flex text-white mb-4">
                <hr className="border-t-2 border-white mb-2" />
                <p className="text-lg font-bold">TRADE EXCELLENCE</p>
              </div>
              <h1 className="text-5xl md:text-6xl lg:text-8xl font-bold text-white mb-8">
                {headingContent}
              </h1>
              <Button className="bg-primary text-white hover:bg-primary/90 group">
                GET STARTED
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
            {/* Stats Section */}
            <div>
              <StatCard label="RELOCATION" value="80+" />
              <StatCard label="CLIENT" value="12K" />
              <StatCard label="MOVING PRODUCTS" value="150+" />
            </div>
          </div>
        </div>
      </div>
      {/* Bottom Shape Fix */}
      <div className=" w-full h-auto z-100 absolute bottom-0">
        <img
          src="/polygonWhite.svg"
          alt="Polygon"
          className="w-full object-contain"
        />
      </div>
    </div>
  );
};
