"use client"; // Ensure this runs on the client-side

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Twitter, Facebook, Instagram } from "lucide-react";
import Link from "next/link";

export function AboutSection() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref, // Detects scroll within this section
    offset: ["start end", "end start"], // Animation range
  });

  // Parallax effect: Moves the image slightly slower than the text
  const parallaxY = useTransform(scrollYProgress, [0, 1], ["0%", "-10%"]);

  return (
    <section ref={ref} className="relative py-24 bg-white">
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Image with Parallax */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative aspect-square">
              <img
                src="./importExportAbout.jpg"
                alt="Container being lifted at sunset"
                className="object-cover rounded-lg"
              />
              {/* Experience badge */}
              <div className="absolute bottom-0 right-0 bg-[#FF9F2D] p-4 text-white rounded-tl-lg">
                <div className="text-4xl font-bold">23</div>
                <div className="text-sm">
                  YEARS OF
                  <br />
                  EXPERIENCE
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Side - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="space-y-2">
              <p className="text-[#FF9F2D] font-medium">ABOUT US</p>
              <h2 className="text-4xl font-bold text-gray-900">
                IMPORT &<br />
                <span className="text-[#FF9F2D]">EXPORTER</span>
              </h2>
            </div>

            <div className="space-y-4 text-gray-600">
              <p>
                Tewaru Trading Plc, located in Addis Ababa, Ethiopia, is a
                dynamic company committed to delivering high-quality products
                and services across various sectors. We focus on innovation,
                cost reduction, and human capital development, leveraging modern
                technologies and efficient management techniques.
              </p>
              <p>
                Our core services include the export of oil seeds, pulses, and
                coffee, as well as the import of essential banking and
                industrial products such as ATM cards, ID card printers, and
                vehicle tires. We are known for our exceptional after-sales
                support and the ability to solve everyday problems with
                efficiency and reliability.
              </p>
            </div>

            {/* Social Media Links */}
            <div className="flex gap-4">
              <Link
                href="#"
                className="text-gray-400 hover:text-[#FF9F2D] transition-colors"
              >
                <Twitter size={20} />
              </Link>
              <Link
                href="#"
                className="text-gray-400 hover:text-[#FF9F2D] transition-colors"
              >
                <Facebook size={20} />
              </Link>
              <Link
                href="#"
                className="text-gray-400 hover:text-[#FF9F2D] transition-colors"
              >
                <Instagram size={20} />
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
