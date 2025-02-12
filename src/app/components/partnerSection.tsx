import Image from "next/image";

export function PartnersSection() {
  const partners = [
    { name: "4P Company", logo: "/partners.png" },
    { name: "Your Company", logo: "/partners.png" },
    { name: "M Company", logo: "/partners.png" },
    { name: "4P Company Alt", logo: "/partners.png" },
    { name: "Your Company Alt", logo: "/partners.png" },
  ];

  return (
    <section className="py-16 bg-white h-">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Partners</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 items-center justify-items-center">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="w-full max-w-[160px] grayscale hover:grayscale-0 transition-all duration-300"
            >
              <Image
                src={partner.logo || "/placeholder.svg"}
                alt={partner.name}
                width={120}
                height={60}
                className="w-full h-auto object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
