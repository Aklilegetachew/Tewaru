import type React from "react";
import type { JSX } from "react";

interface ExpertiseItem {
  icon: JSX.Element;
  title: string;
  description: string;
}

interface ExpertiseSectionProps {
  subtitle: string;
  title: string;
  description: string[];
  expertiseItems: ExpertiseItem[];
}

export const ExpertiseSection: React.FC<ExpertiseSectionProps> = ({
  subtitle,
  title,
  description,
  expertiseItems,
}) => {
  return (
    <section className="container mx-auto px-4 py-16 lg:py-24">
      {/* Header */}
      <div className="text-center mb-16  ">
        <h3 className="text-sm uppercase tracking-wider text-[#FF6B6B] mb-3">
          {subtitle}
        </h3>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 flex items-center justify-center gap-3">
          {title.split(" ").map((word, index) => (
            <span key={index} className={index === 1 ? "text-[#F4A261]" : ""}>
              {word}
            </span>
          ))}
        </h2>
      </div>

      {/* Content Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
            OUR EXPERTISE
          </h2>
          {description.map((para, index) => (
            <p
              key={index}
              className="text-gray-600 text-base md:text-lg leading-relaxed mb-6"
            >
              {para}
            </p>
          ))}
        </div>

        {/* Expertise List */}
        <div className="space-y-8">
          {expertiseItems.map((item, index) => (
            <div key={index} className="flex items-start gap-6">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 flex items-center justify-center bg-[#FF6B6B] rounded-lg text-white text-2xl">
                  {item.icon}
                </div>
              </div>
              <div>
                <h4 className="text-xl font-semibold text-gray-900 mb-2">
                  {item.title}
                </h4>
                <p className="text-gray-600">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
