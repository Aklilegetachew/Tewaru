"use client";

import { Clock, Briefcase, ClipboardCheck, BarChart } from "lucide-react";
import Image from "next/image";
import type React from "react";
import { IoStarSharp } from "react-icons/io5";
import { RiChatSmile2Fill } from "react-icons/ri";
import { TbShieldCheckFilled } from "react-icons/tb";
import { motion } from "framer-motion";

interface ReasonProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  className?: string;
}

function Reason({ title, description, icon, className = "" }: ReasonProps) {
  return (
    <motion.div
      className={`flex gap-4 items-start ${className}`}
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#FF9F2D] flex items-center justify-center text-white">
        {icon}
      </div>
      <div>
        <h3 className="font-bold mb-2">{title}</h3>
        <p className="text-gray-600 text-sm">{description}</p>
      </div>
    </motion.div>
  );
}

export function WhyChooseUsSection() {
  return (
    <motion.section
      className="py-24 bg-white"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.p
            className="text-[#FF9F2D] mb-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            WHY CHOOSE US
          </motion.p>
          <motion.h2
            className="text-4xl font-bold"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            YOUR <span className="text-[#FF9F2D]">GATEWAY</span> TO QUALITY
            IMPORTS
          </motion.h2>
        </div>

        <div className="relative max-w-5xl mx-auto">
          {/* Center Image */}
          <motion.div
            className="relative aspect-video mb-8 md:mb-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <Image
              src="/companyImage.png"
              alt="Shipping containers"
              width={800}
              height={600}
              className="rounded-lg object-cover w-full h-full"
            />
          </motion.div>

          {/* Reasons Grid */}
          <motion.div
            className="grid md:grid-cols-2 gap-8 lg:gap-16 mt-8 md:mt-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            <Reason
              title="Commitment to Excellence"
              description="We strive for excellence in every aspect of our business, ensuring continuous improvement and delivering the best results."
              icon={<IoStarSharp size={24} />}
            />
            <Reason
              title="Customer Satisfaction First"
              description="Our primary focus is on excelling in customer satisfaction, ensuring that every client experience is positive and memorable."
              icon={<RiChatSmile2Fill size={24} />}
            />
            <Reason
              title="Ethical and Transparent Business"
              description="We operate with the highest ethical standards, ensuring integrity in all our dealings with clients and partners."
              icon={<TbShieldCheckFilled size={24} />}
            />
            <Reason
              title="Strategic Growth & Development"
              description="We focus on expanding our market share, maximizing productivity, and strengthening our financial position for long-term success."
              icon={<BarChart size={24} />}
            />
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
