import { Headphones, Building2 } from "lucide-react";
import { cn } from "@/lib/utils";

interface SectionWithImageProps {
  title: string;
  highlightedWord: string;
  icon: "headphones" | "bank";
  heading: string;
  subheading: string;
  description: string;
  imageUrl?: string;
  imagePosition?: "left" | "right";
}

export function SectionWithImage({
  title,
  highlightedWord,
  icon,
  heading,
  subheading,
  description,
  imageUrl,
  imagePosition = "right",
}: SectionWithImageProps) {
  const icons = {
    headphones: <Headphones className="w-12 h-12 text-red-500" />,
    bank: <Building2 className="w-12 h-12 text-orange-500" />,
  };

  return (
    <section className="py-16 px-4 md:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto  space-y-12">
        {/* Main Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
          {title} <span className="text-orange-500">{highlightedWord}</span>
        </h2>

        <div
          className={cn(
            "grid grid-cols-1 gap-8 items-center",
            "lg:grid-cols-2 lg:gap-12",
            imagePosition === "left" && "lg:direction-rtl"
          )}
        >
          {/* Content Side */}
          <div className="flex flex-col text-center items-center lg:items-center lg:text-left space-y-6">
            {/* Icon */}
            <div className="mb-4">{icons[icon]}</div>

            {/* Heading */}
            <h3 className="text-2xl font-bold">{heading}</h3>

            {/* Subheading */}
            <p className="text-lg font-medium text-gray-700">{subheading}</p>

            {/* Description */}
            <p className="text-gray-600 leading-relaxed max-w-xl">
              {description}
            </p>
          </div>

          {/* Image Side */}
          <div
            className={cn(
              "aspect-square  rounded-lg overflow-hidden",
              "lg:aspect-auto lg:h-[400px]"
            )}
          >
            {imageUrl ? (
              <img
                src={imageUrl || "/placeholder.svg"}
                alt={heading}
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="w-full h-full" />
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
