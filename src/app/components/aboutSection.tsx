import { Twitter, Facebook, Instagram } from "lucide-react";
import Link from "next/link";

export function AboutSection() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Image */}
          <div className="relative">
            <div className="relative aspect-square">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-3IQA9Rr5NCMJ6mjhSMOd4AfA6IGHH7.png"
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
          </div>

          {/* Right side - Content */}
          <div className="space-y-6">
            <div className="space-y-2">
              <p className="text-[#FF9F2D] font-medium">ABOUT US</p>
              <h2 className="text-4xl font-bold text-gray-900">
                IMPORT &<br />
                <span className="text-[#FF9F2D]">EXPORTER</span>
              </h2>
            </div>

            <div className="space-y-4 text-gray-600">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
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
          </div>
        </div>
      </div>
    </section>
  );
}
