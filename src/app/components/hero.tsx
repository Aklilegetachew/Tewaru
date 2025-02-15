"use client";

import { Button } from "@/components/ui/button";
import { StatCard } from "./stat-card";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

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
    case "EXPORT":
      headingContent = (
        <>
          PRODUCTS
          <br />
          <span className="text-primary">WE</span>
          <br />
          EXPORT
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
    <div className="relative bg-black overflow-hidden h-screen">
      {/* Background Image with Animation */}
      <motion.div
        initial={{ opacity: 0, scale: 1.1 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute inset-0 z-0 bg-black opacity-10 bg-cover bg-center"
        style={{
          backgroundImage: `url("/truck.png")`,
        }}
      />

      {/* Black Overlay */}
      <div className="absolute inset-0 bg-black opacity-80 z-5"></div>

      {/* Content Section */}
      <div className="container relative z-10 w-full h-screen flex justify-between">
        <div className="flex w-full flex-col md:flex-row items-center justify-center  md:justify-between text-center md:text-left">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
            className="space-y-6"
          >
            <div className="flex justify-center md:justify-start items-center text-white">
              <hr className="border-t-2 border-white w-12 mr-2" />
              <motion.p
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-lg font-bold"
              >
                TRADE EXCELLENCE
              </motion.p>
            </div>

            {/* Hero Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.6 }}
              className="text-5xl md:text-6xl lg:text-8xl font-bold text-white"
            >
              {headingContent}
            </motion.h1>

            {/* Button */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <Button className="bg-primary text-white hover:bg-primary/90 group">
                GET STARTED
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </motion.div>
          </motion.div>

          {/* Stats Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 1 }}
            className="mt-32 md:mt-0"
          >
            <AnimatedStatCard label="RELOCATION" value={80} />
            <AnimatedStatCard label="CLIENT" value={12000} />
            <AnimatedStatCard label="MOVING PRODUCTS" value={150} />
          </motion.div>
        </div>
      </div>

      {/* Bottom Shape */}
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.2, delay: 1 }}
        className="absolute bottom-0 w-full"
      >
        <img
          src="/polygonWhite.svg"
          alt="Polygon"
          className="w-full object-contain"
        />
      </motion.div>
    </div>
  );
};

// Animated Number Component for Stats
const AnimatedStatCard = ({
  label,
  value,
}: {
  label: string;
  value: number;
}) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = value;
    if (start === end) return;

    let totalDuration = 2000;
    let incrementTime = totalDuration / end;
    let timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start === end) clearInterval(timer);
    }, incrementTime);

    return () => clearInterval(timer);
  }, [value]);

  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1, ease: "easeOut", delay: 1 }}
      className="text-white text-center md:text-left mt-6"
    >
      <h2 className="text-3xl font-bold">{count}+</h2>
      <p className="text-sm">{label}</p>
    </motion.div>
  );
};
