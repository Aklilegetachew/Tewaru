import type React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface SolutionCard {
  title: string;
  subtitle: string;
  image: string;
  link?: string;
  bgColor: string;
}

interface BankingSolutionsProps {
  cards: SolutionCard[];
  title: string;
  highlightWord: string;
}

export const BankingSolutions: React.FC<BankingSolutionsProps> = ({
  cards,
  title,
  highlightWord,
}) => {
  const words = title.split(" ");

  return (
    <section className="container mx-auto px-4 py-12">
      {/* Header */}
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-12">
        {words.map((word, index) => (
          <span
            key={index}
            className={
              word === highlightWord ? "text-orange-400" : "text-gray-900"
            }
          >
            {word}{" "}
          </span>
        ))}
      </h1>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {cards.map((card, index) => (
          <div
            key={index}
            className={`rounded-3xl p-8 h-[400px] relative overflow-hidden ${card.bgColor} transition-transform hover:scale-[1.02]`}
          >
            <div className="relative z-10">
              <span className="text-white/80 text-lg mb-2 block">
                {card.subtitle}
              </span>
              <h2 className="text-white text-4xl font-bold mb-6">
                {card.title}
              </h2>
              {card.link && (
                <Link
                  href={card.link}
                  className="inline-flex items-center gap-2 bg-white text-gray-900 px-6 py-2 rounded-full hover:bg-gray-100 transition-colors"
                >
                  Contact us
                  <ArrowRight className="w-4 h-4" />
                </Link>
              )}
            </div>
            <div className="absolute right-0 bottom-0 w-2/3 h-2/3">
              <Image
                src={card.image || "/placeholder.svg"}
                alt={card.title}
                fill
                className="object-contain"
                style={{
                  objectPosition: "right bottom",
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
