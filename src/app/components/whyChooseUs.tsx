import { Clock, Briefcase, ClipboardCheck, BarChart } from "lucide-react";
import Image from "next/image";
import type React from "react";

interface ReasonProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  className?: string;
}

function Reason({ title, description, icon, className = "" }: ReasonProps) {
  return (
    <div className={`flex gap-4 items-start ${className}`}>
      <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#FF9F2D] flex items-center justify-center text-white">
        {icon}
      </div>
      <div>
        <h3 className="font-bold mb-2">{title}</h3>
        <p className="text-gray-600 text-sm">{description}</p>
      </div>
    </div>
  );
}

export function WhyChooseUsSection() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-[#FF9F2D] mb-2">WHY CHOOSE US</p>
          <h2 className="text-4xl font-bold">
            YOUR <span className="text-[#FF9F2D]">GATEWAY</span> TO QUALITY
            IMPORTS
          </h2>
        </div>

        <div className="relative max-w-5xl mx-auto">
          {/* Center Image */}
          <div className="relative aspect-video mb-8 md:mb-0">
            <Image
              src="/companyImage.png"
              alt="Shipping containers"
              width={800}
              height={600}
              className="rounded-lg object-cover w-full h-full"
            />
          </div>

          {/* Reasons Grid */}
          <div className="grid md:grid-cols-2 gap-8 lg:gap-16 mt-8 md:mt-12">
            <Reason
              title="PROFESSIONAL SERVICE"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor."
              icon={<Briefcase size={24} />}
            />
            <Reason
              title="REASON 2"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor."
              icon={<ClipboardCheck size={24} />}
            />
            <Reason
              title="ALWAYS ON TIME"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor."
              icon={<Clock size={24} />}
            />
            <Reason
              title="REASON 3"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor."
              icon={<BarChart size={24} />}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
