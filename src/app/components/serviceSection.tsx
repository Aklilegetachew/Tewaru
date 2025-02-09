import Link from "next/link";
import { IconType } from "react-icons";

interface ServiceItem {
  icon: IconType;
  title: string;
  description: string;
  link: string;
  highlight?: boolean; // Determines if this item should have an orange background
}

interface ServicesSectionProps {
  subtitle: string;
  title: string;
  services: ServiceItem[];
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({
  subtitle,
  title,
  services,
}) => {
  return (
    <section className="py-24 bg-[#1C1C1C] relative">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <p className="text-[#FF9F2D]">{subtitle}</p>
          <h2 className="text-4xl font-bold text-white">
            {title.split(" ").map((word, index) =>
              word === "&" ? (
                <span key={index}> {word} </span>
              ) : word === "PRODUCTS" ? (
                <span key={index} className="text-[#FF9F2D]">
                  {word}{" "}
                </span>
              ) : (
                `${word} `
              )
            )}
          </h2>
        </div>

        {/* Service Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className={`p-8 rounded-lg text-center space-y-4 ${
                service.highlight ? "bg-[#FF9F2D]" : "bg-white"
              }`}
            >
              <div
                className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto ${
                  service.highlight ? "bg-white" : "bg-[#1C1C1C]"
                }`}
              >
                <service.icon
                  className={
                    service.highlight ? "text-[#FF9F2D]" : "text-white"
                  }
                  size={32}
                />
              </div>
              <h3
                className={`text-xl font-bold ${
                  service.highlight ? "text-white" : "text-black"
                }`}
              >
                {service.title}
              </h3>
              <p
                className={
                  service.highlight ? "text-white/90" : "text-gray-600"
                }
              >
                {service.description}
              </p>
              <Link
                href={service.link}
                className={`inline-block font-medium transition-colors ${
                  service.highlight
                    ? "text-white hover:text-white/90"
                    : "text-[#1C1C1C] hover:text-[#FF9F2D]"
                }`}
              >
                GET STARTED
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
